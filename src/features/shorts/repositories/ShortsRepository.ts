import ShortsApi, { ExternalReviewPublicView } from '../api/ShortsApi';
import { Video } from '../types/Video';
import { Result } from '../../../core/common/Result';
import { safeCall } from '../../../core/common/safeCall';
import { buildResourceUrl, ResourceView } from '../../../core/network/http/resourceClient';

class ShortsRepository {
  async getVideos(): Promise<Result<Video[]>> {
    return safeCall(() => this.fetchReelsVideos());
  }

 
  private async fetchReelsVideos(): Promise<Video[]> {
    const { reelsFeed } = await ShortsApi.getUserExternalReels();
    if (!reelsFeed) {
      return [];
    }

    const page = await ShortsApi.getIndexListPage(reelsFeed);
    const views = await Promise.all(
      (page.items ?? []).map((item) => ShortsApi.getExternalReviewPublicView(item))
    );

    return views.map(this.toVideo).filter((video): video is Video => video !== null);
  }

  private toVideo = (view: ExternalReviewPublicView): Video | null => {
    const { externalReelId, externalReelLink, externalFeedId } = view;
    if (!externalReelId || !externalReelLink || !externalFeedId) {
      return null;
    }

    return {
      id: `${externalReelId.namespace}/${externalReelId.name}`,
      url: buildResourceUrl(externalReelLink.resourceType ?? '', externalReelLink, externalFeedId.sas, ResourceView.Public),
    };
  };
}

export default new ShortsRepository();
