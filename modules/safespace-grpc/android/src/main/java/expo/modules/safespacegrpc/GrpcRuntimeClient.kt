package expo.modules.safespacegrpc

import Impactyn.Contracts.RuntimeService.V1.ImpactynContractsRuntimeServiceV1.CreateOrUpdateRequest
import Impactyn.Contracts.RuntimeService.V1.ImpactynContractsRuntimeServiceV1.DeleteRequest
import Impactyn.Contracts.RuntimeService.V1.ImpactynContractsRuntimeServiceV1.ExecuteRequest
import Impactyn.Contracts.RuntimeService.V1.ImpactynContractsRuntimeServiceV1.GetRequest
import Impactyn.Contracts.RuntimeService.V1.RuntimeServiceGrpc
import com.google.protobuf.ByteString
import io.grpc.ManagedChannel
import io.grpc.Metadata
import io.grpc.StatusRuntimeException
import io.grpc.okhttp.OkHttpChannelBuilder
import io.grpc.stub.MetadataUtils
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.asExecutor
import java.util.concurrent.TimeUnit
import java.util.concurrent.atomic.AtomicReference

private const val AUTHORIZATION_HEADER_NAME = "authorization"
private const val CLIENT_VERSION_HEADER_NAME = "x-safespace-client-version"
private const val GRPC_DEADLINE_SECONDS = 60L

private val AUTHORIZATION_METADATA_KEY: Metadata.Key<String> =
  Metadata.Key.of(AUTHORIZATION_HEADER_NAME, Metadata.ASCII_STRING_MARSHALLER)
private val CLIENT_VERSION_METADATA_KEY: Metadata.Key<String> =
  Metadata.Key.of(CLIENT_VERSION_HEADER_NAME, Metadata.ASCII_STRING_MARSHALLER)

data class GrpcEndpoint(val host: String, val port: Int)

data class GrpcCallResult(val content: ByteArray, val headers: Map<String, String>)

class GrpcCallException(val statusCode: String, message: String) : Exception(message)

/**
 * Thin bridge to the RuntimeService gRPC endpoint. Every domain call in the backend
 * (login, feed, wallet, ...) goes through this one generic Get/Execute/CreateOrUpdate/Delete
 * service; the concrete request/response schema lives entirely in the `content` bytes, which
 * are encoded/decoded on the JS side.
 */
class GrpcRuntimeClient {
  private val endpointRef = AtomicReference(GrpcEndpoint(host = "staging.impactyn.io", port = 530))
  private val channelRef = AtomicReference<ManagedChannel?>(null)

  fun configure(host: String, port: Int) {
    val current = endpointRef.get()
    if (current.host == host && current.port == port) return
    endpointRef.set(GrpcEndpoint(host, port))
    channelRef.getAndSet(null)?.shutdownNow()
  }

  private fun channel(): ManagedChannel = channelRef.get() ?: synchronized(this) {
    channelRef.get() ?: run {
      val endpoint = endpointRef.get()
      val built = OkHttpChannelBuilder.forAddress(endpoint.host, endpoint.port)
        .useTransportSecurity()
        .executor(Dispatchers.IO.asExecutor())
        .build()
      channelRef.set(built)
      built
    }
  }

  private fun stub(token: String?, clientVersion: String) = run {
    val headers = Metadata()
    token?.let { headers.put(AUTHORIZATION_METADATA_KEY, it) }
    headers.put(CLIENT_VERSION_METADATA_KEY, clientVersion)

    RuntimeServiceGrpc.newBlockingStub(channel())
      .withDeadlineAfter(GRPC_DEADLINE_SECONDS, TimeUnit.SECONDS)
      .withInterceptors(MetadataUtils.newAttachHeadersInterceptor(headers))
  }

  fun get(
    apiVersion: String,
    namespace: String?,
    resource: String,
    name: String?,
    view: String?,
    token: String?,
    clientVersion: String,
  ): GrpcCallResult = runCatching {
    val request = GetRequest.newBuilder()
      .setApiVersion(apiVersion)
      .apply { namespace?.let { setNamespace(it) } }
      .setResource(resource)
      .apply { name?.let { setName(it) } }
      .setView(view ?: "")
      .build()
    val response = stub(token, clientVersion).get(request)
    GrpcCallResult(response.content.toByteArray(), response.headersMap)
  }.getOrElse { throw toGrpcCallException(it) }

  fun execute(
    apiVersion: String,
    namespace: String?,
    resource: String,
    name: String?,
    action: String?,
    payload: ByteArray?,
    token: String?,
    clientVersion: String,
  ): GrpcCallResult = runCatching {
    val request = ExecuteRequest.newBuilder()
      .setApiVersion(apiVersion)
      .apply { namespace?.let { setNamespace(it) } }
      .setResource(resource)
      .apply { name?.let { setName(it) } }
      .setAction(action ?: "")
      .apply { payload?.let { setContent(ByteString.copyFrom(it)) } }
      .build()
    val response = stub(token, clientVersion).execute(request)
    GrpcCallResult(response.content.toByteArray(), response.headersMap)
  }.getOrElse { throw toGrpcCallException(it) }

  fun createOrUpdate(
    apiVersion: String,
    namespace: String?,
    resource: String,
    name: String?,
    payload: ByteArray?,
    token: String?,
    clientVersion: String,
  ): GrpcCallResult = runCatching {
    val request = CreateOrUpdateRequest.newBuilder()
      .setApiVersion(apiVersion)
      .apply { namespace?.let { setNamespace(it) } }
      .setResource(resource)
      .apply { name?.let { setName(it) } }
      .apply { payload?.let { setContent(ByteString.copyFrom(it)) } }
      .build()
    val response = stub(token, clientVersion).createOrUpdate(request)
    GrpcCallResult(response.content.toByteArray(), response.headersMap)
  }.getOrElse { throw toGrpcCallException(it) }

  fun delete(
    apiVersion: String,
    namespace: String?,
    resource: String,
    name: String?,
    token: String?,
    clientVersion: String,
  ): GrpcCallResult = runCatching {
    val request = DeleteRequest.newBuilder()
      .setApiVersion(apiVersion)
      .apply { namespace?.let { setNamespace(it) } }
      .setResource(resource)
      .apply { name?.let { setName(it) } }
      .build()
    stub(token, clientVersion).delete(request)
    GrpcCallResult(ByteArray(0), emptyMap())
  }.getOrElse { throw toGrpcCallException(it) }

  private fun toGrpcCallException(error: Throwable): GrpcCallException {
    if (error is StatusRuntimeException) {
      return GrpcCallException(error.status.code.name, error.status.description ?: error.message.orEmpty())
    }
    return GrpcCallException("UNKNOWN", error.message ?: "Unknown gRPC error")
  }
}
