import { useCallback, useEffect, useState } from 'react';
import ShortsRepository from '../repositories/ShortsRepository';
import { VideosRequestState } from '../types/ShortsUiState';
import { idle, loading, requestError, success } from '../../../core/common/BaseState';

export interface ShortsState {
  request: VideosRequestState;
  refresh(): void;
}

export function useShorts(): ShortsState {
  const [request, setRequest] = useState<VideosRequestState>(idle([]));

  const loadVideos = useCallback(async () => {
    setRequest((prev) => loading(prev.data));

    const result = await ShortsRepository.getVideos();

    setRequest((prev) =>
      result.success ? success(result.data) : requestError(prev.data, result.error)
    );
  }, []);

  useEffect(() => {
    loadVideos();
  }, [loadVideos]);

  return { request, refresh: loadVideos };
}
