import { Result, success, failure } from './Result';

export async function safeCall<T>(
  action: () => Promise<T>
): Promise<Result<T>> {
  try {
    const data = await action();

    return success(data);
  } catch (error) {
    return failure(getErrorMessage(error));
  }
}

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  return 'Something went wrong';
}