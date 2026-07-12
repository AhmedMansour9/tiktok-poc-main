import { configureGrpcEndpoint } from './runtimeServiceClient';

export const GRPC_HOST = 'staging.impactyn.io';
export const GRPC_PORT = 530;

export function initGrpc(): void {
  configureGrpcEndpoint(GRPC_HOST, GRPC_PORT);
}
