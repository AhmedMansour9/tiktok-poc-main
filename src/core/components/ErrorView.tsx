import React from 'react';
import { Pressable, Text, View } from 'react-native';

interface ErrorViewProps {
  message: string;
  title?: string;
  retryText?: string;
  onRetry?: () => void;
}

export default function ErrorView({
  message,
  title = 'Something went wrong',
  retryText = 'Retry',
  onRetry,
}: ErrorViewProps) {
  return (
    <View className="flex-1 items-center justify-center bg-black px-6">
      <Text className="text-xl font-semibold text-white">
        {title}
      </Text>

      <Text className="mt-2 text-center text-gray-400">
        {message}
      </Text>

      {onRetry && (
        <Pressable
          onPress={onRetry}
          className="mt-6 rounded-lg bg-white px-6 py-3"
        >
          <Text className="font-semibold text-black">
            {retryText}
          </Text>
        </Pressable>
      )}
    </View>
  );
}