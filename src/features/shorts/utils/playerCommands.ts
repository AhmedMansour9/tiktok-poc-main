export const PlayerCommand = {
  PLAY: 'play',
  PAUSE: 'pause',
  UN_MUTE: 'unMute',
} as const;

export type PlayerCommandType =
  (typeof PlayerCommand)[keyof typeof PlayerCommand];

export function createPlayerCommand(command: PlayerCommandType): string {
  return `
    (function() {
      window.postMessage({
        'x-tiktok-player': true,
        type: '${command}',
        value: null,
      }, '*');
    })();
    true;
  `;
}