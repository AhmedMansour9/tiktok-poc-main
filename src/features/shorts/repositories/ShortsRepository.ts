import ShortsApi from '../api/ShortsApi';
import { Video } from '../types/Video';
import { Result } from '../../../core/common/Result';
import { safeCall } from '../../../core/common/safeCall';

class ShortsRepository {
  async getVideos(): Promise<Result<Video[]>> {
    return safeCall(() => ShortsApi.getVideos());
  }
}


export default new ShortsRepository();
