import { TIKTOK_VIDEOS } from '../mock/videos';
import { Video } from '../types/Video';
import httpClient from '../../../core/network/httpClient';
import { Endpoints } from '../../../core/network/endpoints';

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
