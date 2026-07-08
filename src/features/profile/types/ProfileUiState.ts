/** Result of the last Ping request. A sealed union, like a Kotlin sealed interface. */
export type PingRequestState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; message: string; serverTime: string }
  | { status: 'error'; error: string };

export interface ProfileUiState {
  message: string;
  request: PingRequestState;
}

export const initialProfileUiState: ProfileUiState = {
  message: 'hello',
  request: { status: 'idle' },
};

export type ProfileIntent =
  | { type: 'MessageChanged'; message: string }
  | { type: 'SendPing' };
