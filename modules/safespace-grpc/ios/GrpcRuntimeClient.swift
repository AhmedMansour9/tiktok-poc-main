import Foundation
import GRPC
import NIOCore
import NIOPosix

private let authorizationHeaderName = "authorization"
private let clientVersionHeaderName = "x-safespace-client-version"
private let grpcDeadlineSeconds: Int64 = 60

struct GrpcEndpoint: Equatable {
  let host: String
  let port: Int
}

struct GrpcCallResult {
  let content: Data
  let headers: [String: String]
}

struct GrpcCallException: Error {
  let statusCode: String
  let message: String
}

/// Thin bridge to the RuntimeService gRPC endpoint. Mirrors GrpcRuntimeClient.kt:
/// every domain call goes through this one generic Get/Execute/CreateOrUpdate/Delete
/// service; the concrete request/response schema lives entirely in the `content`
/// bytes, which are encoded/decoded on the JS side.
final class GrpcRuntimeClient {
  private var endpoint = GrpcEndpoint(host: "staging.impactyn.io", port: 530)
  private var channel: GRPCChannel?
  private let group = MultiThreadedEventLoopGroup(numberOfThreads: 1)

  func configure(host: String, port: Int) {
    let newEndpoint = GrpcEndpoint(host: host, port: port)
    if newEndpoint == endpoint { return }
    endpoint = newEndpoint
    try? channel?.close().wait()
    channel = nil
  }

  private func getChannel() throws -> GRPCChannel {
    if let channel = channel { return channel }
    let built = try GRPCChannelPool.with(
      target: .host(endpoint.host, port: endpoint.port),
      transportSecurity: .tls(GRPCTLSConfiguration.makeClientDefault(compatibleWith: group)),
      eventLoopGroup: group
    )
    channel = built
    return built
  }

  private func callOptions(token: String?, clientVersion: String) -> CallOptions {
    var headers = HPACKHeaders()
    if let token = token {
      headers.add(name: authorizationHeaderName, value: token)
    }
    headers.add(name: clientVersionHeaderName, value: clientVersion)
    var options = CallOptions(customMetadata: headers)
    options.timeLimit = .timeout(.seconds(grpcDeadlineSeconds))
    return options
  }

  private func stub(token: String?, clientVersion: String) throws -> Impactyn_Contracts_RuntimeService_V1_RuntimeServiceClient {
    Impactyn_Contracts_RuntimeService_V1_RuntimeServiceClient(
      channel: try getChannel(),
      defaultCallOptions: callOptions(token: token, clientVersion: clientVersion)
    )
  }

  func get(
    apiVersion: String, namespace: String?, resource: String, name: String?,
    view: String?, token: String?, clientVersion: String
  ) async throws -> GrpcCallResult {
    do {
      let request = Impactyn_Contracts_RuntimeService_V1_GetRequest.with {
        $0.apiVersion = apiVersion
        if let namespace = namespace { $0.namespace = namespace }
        $0.resource = resource
        if let name = name { $0.name = name }
        $0.view = view ?? ""
      }
      let response = try await stub(token: token, clientVersion: clientVersion).get(request).response.get()
      return GrpcCallResult(content: response.content, headers: response.headers)
    } catch {
      throw Self.toGrpcCallException(error)
    }
  }

  func execute(
    apiVersion: String, namespace: String?, resource: String, name: String?,
    action: String?, payload: Data?, token: String?, clientVersion: String
  ) async throws -> GrpcCallResult {
    do {
      let request = Impactyn_Contracts_RuntimeService_V1_ExecuteRequest.with {
        $0.apiVersion = apiVersion
        if let namespace = namespace { $0.namespace = namespace }
        $0.resource = resource
        if let name = name { $0.name = name }
        $0.action = action ?? ""
        if let payload = payload { $0.content = payload }
      }
      let response = try await stub(token: token, clientVersion: clientVersion).execute(request).response.get()
      return GrpcCallResult(content: response.content, headers: response.headers)
    } catch {
      throw Self.toGrpcCallException(error)
    }
  }

  func createOrUpdate(
    apiVersion: String, namespace: String?, resource: String, name: String?,
    payload: Data?, token: String?, clientVersion: String
  ) async throws -> GrpcCallResult {
    do {
      let request = Impactyn_Contracts_RuntimeService_V1_CreateOrUpdateRequest.with {
        $0.apiVersion = apiVersion
        if let namespace = namespace { $0.namespace = namespace }
        $0.resource = resource
        if let name = name { $0.name = name }
        if let payload = payload { $0.content = payload }
      }
      let response = try await stub(token: token, clientVersion: clientVersion).createOrUpdate(request).response.get()
      return GrpcCallResult(content: response.content, headers: response.headers)
    } catch {
      throw Self.toGrpcCallException(error)
    }
  }

  func delete(
    apiVersion: String, namespace: String?, resource: String, name: String?,
    token: String?, clientVersion: String
  ) async throws -> GrpcCallResult {
    do {
      let request = Impactyn_Contracts_RuntimeService_V1_DeleteRequest.with {
        $0.apiVersion = apiVersion
        if let namespace = namespace { $0.namespace = namespace }
        $0.resource = resource
        if let name = name { $0.name = name }
      }
      _ = try await stub(token: token, clientVersion: clientVersion).delete(request).response.get()
      return GrpcCallResult(content: Data(), headers: [:])
    } catch {
      throw Self.toGrpcCallException(error)
    }
  }

  private static func toGrpcCallException(_ error: Error) -> GrpcCallException {
    if let status = error as? GRPCStatus {
      return GrpcCallException(statusCode: "\(status.code)", message: status.message ?? "Unknown gRPC error")
    }
    return GrpcCallException(statusCode: "UNKNOWN", message: error.localizedDescription)
  }
}
