export type Result<T> = Success<T> | Failure;

export interface Success<T> {
  success: true;
  data: T;
}

export interface Failure {
  success: false;
  error: string;
}

export const success = <T>(data: T): Success<T> => ({
  success: true,
  data,
});

export const failure = (error: string): Failure => ({
  success: false,
  error,
});