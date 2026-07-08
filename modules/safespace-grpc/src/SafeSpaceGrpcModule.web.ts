import { registerWebModule, NativeModule } from 'expo';

class SafeSpaceGrpcModule extends NativeModule<{}> {
  configure(): void {
    throw new Error('SafeSpaceGrpc is not supported on web');
  }
  get(): Promise<never> {
    return Promise.reject(new Error('SafeSpaceGrpc is not supported on web'));
  }
  execute(): Promise<never> {
    return Promise.reject(new Error('SafeSpaceGrpc is not supported on web'));
  }
  createOrUpdate(): Promise<never> {
    return Promise.reject(new Error('SafeSpaceGrpc is not supported on web'));
  }
  delete(): Promise<never> {
    return Promise.reject(new Error('SafeSpaceGrpc is not supported on web'));
  }
}

export default registerWebModule(SafeSpaceGrpcModule, 'SafeSpaceGrpcModule');
