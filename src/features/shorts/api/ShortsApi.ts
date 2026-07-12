import { TIKTOK_VIDEOS } from '../../../mocks/videos';
import { Video } from '../types/Video';
import * as GrpcProto from '../../../core/network/grpc/proto/generated';
import { performGrpcRequest, RequestKind } from '../../../core/network/grpc/runtimeServiceClient';
import httpClient from '../../../core/network/http/httpClient';
import { Endpoints } from '../../../core/network/http/endpoints';
import { performExternalResourceRequest } from '../../../core/network/http/resourceClient';

const { GetUserExternalReelsResponse, ExternalReviewPublicView } = GrpcProto.ExternalContent.V1;
const { IndexListPageResource } = GrpcProto.Impactyn.Contracts.IndexListPage.V1;

export type ResourceToken = GrpcProto.Common.V1.ResourceToken.$Properties;
export type IndexListPageItem = GrpcProto.Impactyn.Contracts.IndexListPage.V1.IndexListPageItem.$Properties;
export type GetUserExternalReelsResponse = GrpcProto.ExternalContent.V1.GetUserExternalReelsResponse.$Properties;
export type IndexListPageResource = GrpcProto.Impactyn.Contracts.IndexListPage.V1.IndexListPageResource.$Properties;
export type ExternalReviewPublicView = GrpcProto.ExternalContent.V1.ExternalReviewPublicView.$Properties;

class ShortsApi {
  async getVideos(): Promise<Video[]> {
    return TIKTOK_VIDEOS;
  }

  async getVideosHttp() {
    const response = await httpClient.get(Endpoints.shorts);

    return response.data;
  }
  
  async getUserExternalReels(): Promise<GetUserExternalReelsResponse> {
    return performGrpcRequest(
      {
        kind: RequestKind.GET,
        resource: 'externalContent',
        namespace: 'default',
        name: 'default',
        argument: 'default',
      },
      (bytes) => GetUserExternalReelsResponse.decode(bytes)
    );
  }


  async getIndexListPage(token: ResourceToken): Promise<IndexListPageResource> {
    return performExternalResourceRequest(
      'externalFeed',
      token.resourceId,
      token.sas,
      'rootpage',
      (bytes) => IndexListPageResource.decode(bytes),
      () => IndexListPageResource.create()
    );
  }

  async getExternalReviewPublicView(item: IndexListPageItem): Promise<ExternalReviewPublicView> {
    return performExternalResourceRequest(
      'externalReel',
      item.itemId,
      item.sas,
      'public',
      (bytes) => ExternalReviewPublicView.decode(bytes)
    );
  }
}

export default new ShortsApi();
