import { TIKTOK_VIDEOS } from '../mock/videos';
import { Video } from '../types/Video';

class ShortsApi {
  async getVideos(): Promise<Video[]> {
    return TIKTOK_VIDEOS;
  }
}

export default new ShortsApi();
