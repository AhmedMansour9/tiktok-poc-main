export function extractVideoId(url: string): string {
  const match = url.match(/video\/(\d+)/);

  return match ? match[1] : '';
}

export function buildPlayerUrl(videoId: string): string {
  const params = new URLSearchParams({
    autoplay: '1',
    loop: '1',
    controls: '1',
    music_info: '0',
    description: '0',
    rel: '0',
    native_context_menu: '0',
    closed_caption: '0',
    muted: '0',
  });

  return `https://www.tiktok.com/player/v1/${videoId}?${params.toString()}`;
}