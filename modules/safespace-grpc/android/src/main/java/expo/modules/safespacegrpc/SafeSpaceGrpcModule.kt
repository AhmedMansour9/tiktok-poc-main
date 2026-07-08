package expo.modules.safespacegrpc

import android.util.Base64
import expo.modules.kotlin.exception.CodedException
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

private class GrpcException(cause: GrpcCallException) :
  CodedException(code = "ERR_GRPC_${cause.statusCode}", message = cause.message, cause = cause)

private fun ByteArray.toBase64(): String = Base64.encodeToString(this, Base64.NO_WRAP)
private fun String.fromBase64(): ByteArray = Base64.decode(this, Base64.NO_WRAP)

private fun GrpcCallResult.toRecord(): Map<String, Any?> = mapOf(
  "contentBase64" to content.toBase64(),
  "headers" to headers,
)

class SafeSpaceGrpcModule : Module() {
  private val client = GrpcRuntimeClient()

  override fun definition() = ModuleDefinition {
    Name("SafeSpaceGrpc")

    Function("configure") { host: String, port: Int ->
      client.configure(host, port)
    }

    AsyncFunction("get") { apiVersion: String,
                            namespace: String?,
                            resource: String,
                            name: String?,
                            view: String?,
                            token: String?,
                            clientVersion: String ->
      runCatching {
        client.get(apiVersion, namespace, resource, name, view, token, clientVersion)
      }.getOrElse { throw wrap(it) }.toRecord()
    }

    AsyncFunction("execute") { apiVersion: String,
                                namespace: String?,
                                resource: String,
                                name: String?,
                                action: String?,
                                payloadBase64: String?,
                                token: String?,
                                clientVersion: String ->
      runCatching {
        client.execute(
          apiVersion, namespace, resource, name, action,
          payloadBase64?.fromBase64(), token, clientVersion
        )
      }.getOrElse { throw wrap(it) }.toRecord()
    }

    AsyncFunction("createOrUpdate") { apiVersion: String,
                                       namespace: String?,
                                       resource: String,
                                       name: String?,
                                       payloadBase64: String?,
                                       token: String?,
                                       clientVersion: String ->
      runCatching {
        client.createOrUpdate(
          apiVersion, namespace, resource, name,
          payloadBase64?.fromBase64(), token, clientVersion
        )
      }.getOrElse { throw wrap(it) }.toRecord()
    }

    AsyncFunction("delete") { apiVersion: String,
                               namespace: String?,
                               resource: String,
                               name: String?,
                               token: String?,
                               clientVersion: String ->
      runCatching {
        client.delete(apiVersion, namespace, resource, name, token, clientVersion)
      }.getOrElse { throw wrap(it) }.toRecord()
    }
  }

  private fun wrap(error: Throwable): Throwable =
    if (error is GrpcCallException) GrpcException(error) else error
}
