import * as GrpcProto from '../../../core/grpc/proto/generated';
import { performGrpcRequest } from '../../../core/grpc/runtimeServiceClient';

const { PingRequest, PingResponse } = GrpcProto.Example.V1;

export interface PingResult {
  message: string;
  serverTime: string;
}

class ProfileApi {
  async ping(message: string): Promise<PingResult> {
    const payload = PingRequest.encode({ message }).finish();

    return performGrpcRequest(
      { kind: 'Execute', resource: 'Example', argument: 'Ping', payload },
      (bytes) => {
        const response = PingResponse.decode(bytes);
        return { message: response.message, serverTime: response.serverTime };
      }
    );
  }
}

export default new ProfileApi();
