import { TIKTOK_VIDEOS } from '../../../mocks/videos';
import { Video } from '../types/Video';
import httpClient from '../../../core/network/http/httpClient';
import { Endpoints } from '../../../core/network/http/endpoints';

class ShortsApi {
  async getVideos(): Promise<Video[]> {
    return TIKTOK_VIDEOS;
  }

  async getVideosHttp() {
    const response = await httpClient.get(Endpoints.shorts);

    return response.data;
  }
}

export default new ShortsApi();
