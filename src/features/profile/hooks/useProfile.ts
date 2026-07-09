import { useState } from 'react';
import ProfileRepository from '../repositories/ProfileRepository';
import { PingRequestState } from '../types/ProfileUiState';

export interface ProfileViewModel {
  message: string;
  setMessage(message: string): void;
  request: PingRequestState;
  sendPing(): void;
}

export function useProfile(): ProfileViewModel {
  const [message, setMessage] = useState('hello');
  const [request, setRequest] = useState<PingRequestState>({ status: 'idle' });

  const sendPing = async () => {
    setRequest({ status: 'loading' });
    try {
      const result = await ProfileRepository.ping(message);
      setRequest({ status: 'success', ...result });
    } catch (error: unknown) {
      setRequest({ status: 'error', error: error instanceof Error ? error.message : String(error) });
    }
  };

  return { message, setMessage, request, sendPing };
}
