import ExpoModulesCore
import Foundation

internal final class GrpcException: GenericException<GrpcCallException> {
  override var reason: String { param.message }
  override var code: String { "ERR_GRPC_\(param.statusCode)" }
}

private func toRecord(_ result: GrpcCallResult) -> [String: Any] {
  [
    "contentBase64": result.content.base64EncodedString(),
    "headers": result.headers,
  ]
}

public class SafeSpaceGrpcModule: Module {
  private let client = GrpcRuntimeClient()

  public func definition() -> ModuleDefinition {
    Name("SafeSpaceGrpc")

    Function("configure") { (host: String, port: Int) in
      client.configure(host: host, port: port)
    }

    AsyncFunction("get") {
      (apiVersion: String, namespace: String?, resource: String, name: String?,
       view: String?, token: String?, clientVersion: String) -> [String: Any] in
      do {
        let result = try await client.get(
          apiVersion: apiVersion, namespace: namespace, resource: resource, name: name,
          view: view, token: token, clientVersion: clientVersion
        )
        return toRecord(result)
      } catch let error as GrpcCallException {
        throw GrpcException(error)
      }
    }

    AsyncFunction("execute") {
      (apiVersion: String, namespace: String?, resource: String, name: String?,
       action: String?, payloadBase64: String?, token: String?, clientVersion: String) -> [String: Any] in
      do {
        let payload = payloadBase64.flatMap { Data(base64Encoded: $0) }
        let result = try await client.execute(
          apiVersion: apiVersion, namespace: namespace, resource: resource, name: name,
          action: action, payload: payload, token: token, clientVersion: clientVersion
        )
        return toRecord(result)
      } catch let error as GrpcCallException {
        throw GrpcException(error)
      }
    }

    AsyncFunction("createOrUpdate") {
      (apiVersion: String, namespace: String?, resource: String, name: String?,
       payloadBase64: String?, token: String?, clientVersion: String) -> [String: Any] in
      do {
        let payload = payloadBase64.flatMap { Data(base64Encoded: $0) }
        let result = try await client.createOrUpdate(
          apiVersion: apiVersion, namespace: namespace, resource: resource, name: name,
          payload: payload, token: token, clientVersion: clientVersion
        )
        return toRecord(result)
      } catch let error as GrpcCallException {
        throw GrpcException(error)
      }
    }

    AsyncFunction("delete") {
      (apiVersion: String, namespace: String?, resource: String, name: String?,
       token: String?, clientVersion: String) -> [String: Any] in
      do {
        let result = try await client.delete(
          apiVersion: apiVersion, namespace: namespace, resource: resource, name: name,
          token: token, clientVersion: clientVersion
        )
        return toRecord(result)
      } catch let error as GrpcCallException {
        throw GrpcException(error)
      }
    }
  }
}
