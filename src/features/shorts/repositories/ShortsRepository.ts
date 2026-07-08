import ShortsApi from '../api/ShortsApi';
import { Video } from '../types/Video';

class ShortsRepository {
  async getVideos(): Promise<Video[]> {
    return ShortsApi.getVideos();
  }
}

export default new ShortsRepository();
