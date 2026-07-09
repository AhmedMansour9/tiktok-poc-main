import { useCallback, useEffect, useState } from 'react';
import ShortsRepository from '../repositories/ShortsRepository';
import { Video } from '../types/Video';

export function useShorts() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadVideos = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await ShortsRepository.getVideos();

      if (result.success) {
        setVideos(result.data);
      } else {
        setError(result.error);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadVideos();
  }, [loadVideos]);

  return {
    videos,
    loading,
    error,
    refresh: loadVideos,
  };
}
