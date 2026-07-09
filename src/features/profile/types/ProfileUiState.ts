export type PingRequestState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; message: string; serverTime: string }
  | { status: 'error'; error: string };
