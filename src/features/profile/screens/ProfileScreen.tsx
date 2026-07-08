import { Button, Text, TextInput, View } from 'react-native';
import { useProfile } from '../hooks/useProfile';

export default function ProfileScreen() {
  const { state, dispatch } = useProfile();
  const { request } = state;

  return (
    <View className="flex-1 bg-neutral-200 items-center justify-center px-6">
      <Text className="text-base mb-4">gRPC basic example: Ping</Text>
      <TextInput
        className="w-full bg-white rounded-md px-3 py-2 mb-3"
        placeholder="message"
        value={state.message}
        onChangeText={(message) => dispatch({ type: 'MessageChanged', message })}
      />
      <Button
        title="Send"
        disabled={request.status === 'loading'}
        onPress={() => dispatch({ type: 'SendPing' })}
      />
      {request.status === 'loading' && <Text className="mt-4 text-center">Sending...</Text>}
      {request.status === 'success' && (
        <Text className="mt-4 text-center">
          Response: {request.message} @ {request.serverTime}
        </Text>
      )}
      {request.status === 'error' && (
        <Text className="mt-4 text-center text-red-600">gRPC error: {request.error}</Text>
      )}
    </View>
  );
}
