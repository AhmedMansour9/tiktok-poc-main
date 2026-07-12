export enum RequestStatus {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Error = 'error',
}

export type BaseState<T> =
  | { status: RequestStatus.Idle; data: T }
  | { status: RequestStatus.Loading; data: T }
  | { status: RequestStatus.Success; data: T }
  | { status: RequestStatus.Error; data: T; error: string };

export const idle = <T>(data: T): BaseState<T> => ({ status: RequestStatus.Idle, data });
export const loading = <T>(data: T): BaseState<T> => ({ status: RequestStatus.Loading, data });
export const success = <T>(data: T): BaseState<T> => ({ status: RequestStatus.Success, data });
export const requestError = <T>(data: T, error: string): BaseState<T> => ({
  status: RequestStatus.Error,
  data,
  error,
});
