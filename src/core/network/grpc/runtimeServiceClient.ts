import SafeSpaceGrpcModule from '../../../../modules/safespace-grpc/src/SafeSpaceGrpcModule';
import { decodeBase64, encodeBase64 } from './base64';

export type GrpcRequestKind = 'Get' | 'Execute' | 'CreateOrUpdate' | 'Delete';


export interface GrpcRequestModel {
  kind: GrpcRequestKind;
  resource: string;
  apiVersion?: string;
  namespace?: string;
  name?: string;
  argument?: string;
  payload?: Uint8Array;
}

export interface GrpcAuth {
  token?: string | null;
  clientVersion?: string;
}

const DEFAULT_CLIENT_VERSION = '1.0.0';

export function configureGrpcEndpoint(host: string, port: number): void {
  SafeSpaceGrpcModule.configure(host, port);
}

export async function performGrpcRequest<T>(
  request: GrpcRequestModel,
  decode: (bytes: Uint8Array) => T,
  auth?: GrpcAuth
): Promise<T> {
  const apiVersion = request.apiVersion ?? 'v1';
  const namespace = request.namespace ?? null;
  const name = request.name ?? null;
  const token = auth?.token ?? null;
  const clientVersion = auth?.clientVersion ?? DEFAULT_CLIENT_VERSION;

  let contentBase64: string;

  switch (request.kind) {
    case 'Get': {
      const result = await SafeSpaceGrpcModule.get(
        apiVersion, namespace, request.resource, name,
        request.argument ?? null, token, clientVersion
      );
      contentBase64 = result.contentBase64;
      break;
    }
    case 'Execute': {
      const payloadBase64 = request.payload ? encodeBase64(request.payload) : null;
      const result = await SafeSpaceGrpcModule.execute(
        apiVersion, namespace, request.resource, name,
        request.argument ?? null, payloadBase64, token, clientVersion
      );
      contentBase64 = result.contentBase64;
      break;
    }
    case 'CreateOrUpdate': {
      const payloadBase64 = request.payload ? encodeBase64(request.payload) : null;
      const result = await SafeSpaceGrpcModule.createOrUpdate(
        apiVersion, namespace, request.resource, name,
        payloadBase64, token, clientVersion
      );
      contentBase64 = result.contentBase64;
      break;
    }
    case 'Delete': {
      const result = await SafeSpaceGrpcModule.delete(
        apiVersion, namespace, request.resource, name, token, clientVersion
      );
      contentBase64 = result.contentBase64;
      break;
    }
  }

  return decode(decodeBase64(contentBase64));
}
