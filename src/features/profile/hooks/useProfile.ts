import { useCallback, useReducer } from 'react';
import ProfileRepository from '../repositories/ProfileRepository';
import { initialProfileUiState, ProfileIntent, ProfileUiState } from '../types/ProfileUiState';

type Action =
  | { type: 'MessageChanged'; message: string }
  | { type: 'PingStarted' }
  | { type: 'PingSucceeded'; message: string; serverTime: string }
  | { type: 'PingFailed'; error: string };

function reduce(state: ProfileUiState, action: Action): ProfileUiState {
  switch (action.type) {
    case 'MessageChanged':
      return { ...state, message: action.message };
    case 'PingStarted':
      return { ...state, request: { status: 'loading' } };
    case 'PingSucceeded':
      return { ...state, request: { status: 'success', message: action.message, serverTime: action.serverTime } };
    case 'PingFailed':
      return { ...state, request: { status: 'error', error: action.error } };
  }
}

export interface ProfileViewModel {
  state: ProfileUiState;
  dispatch(intent: ProfileIntent): void;
}

export function useProfile(): ProfileViewModel {
  const [state, dispatchAction] = useReducer(reduce, initialProfileUiState);

  const dispatch = useCallback(
    (intent: ProfileIntent) => {
      switch (intent.type) {
        case 'MessageChanged':
          dispatchAction({ type: 'MessageChanged', message: intent.message });
          return;
        case 'SendPing':
          dispatchAction({ type: 'PingStarted' });
          ProfileRepository.ping(state.message)
            .then((result) => dispatchAction({ type: 'PingSucceeded', ...result }))
            .catch((error: unknown) =>
              dispatchAction({ type: 'PingFailed', error: error instanceof Error ? error.message : String(error) })
            );
          return;
      }
    },
    [state.message]
  );

  return { state, dispatch };
}
