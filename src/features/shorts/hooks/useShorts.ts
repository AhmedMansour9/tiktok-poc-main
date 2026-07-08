import { useEffect, useState } from 'react';
import ShortsRepository from '../repositories/ShortsRepository';
import { Video } from '../types/Video';

export function useShorts() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    ShortsRepository.getVideos().then(setVideos);
  }, []);

  return { videos };
}
