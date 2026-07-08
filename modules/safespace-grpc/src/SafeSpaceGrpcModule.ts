import { NativeModule, requireNativeModule } from 'expo';
import { GrpcCallRecord } from './SafeSpaceGrpc.types';

declare class SafeSpaceGrpcModule extends NativeModule<{}> {
  configure(host: string, port: number): void;

  get(
    apiVersion: string,
    namespace: string | null,
    resource: string,
    name: string | null,
    view: string | null,
    token: string | null,
    clientVersion: string
  ): Promise<GrpcCallRecord>;

  execute(
    apiVersion: string,
    namespace: string | null,
    resource: string,
    name: string | null,
    action: string | null,
    payloadBase64: string | null,
    token: string | null,
    clientVersion: string
  ): Promise<GrpcCallRecord>;

  createOrUpdate(
    apiVersion: string,
    namespace: string | null,
    resource: string,
    name: string | null,
    payloadBase64: string | null,
    token: string | null,
    clientVersion: string
  ): Promise<GrpcCallRecord>;

  delete(
    apiVersion: string,
    namespace: string | null,
    resource: string,
    name: string | null,
    token: string | null,
    clientVersion: string
  ): Promise<GrpcCallRecord>;
}

export default requireNativeModule<SafeSpaceGrpcModule>('SafeSpaceGrpc');
