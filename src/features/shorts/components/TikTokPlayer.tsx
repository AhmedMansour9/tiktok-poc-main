import React, { useEffect, useRef } from 'react';
import { ActivityIndicator, Dimensions, View } from 'react-native';
import { WebView as RNWebView, WebViewMessageEvent } from 'react-native-webview';
import type { ShouldStartLoadRequest } from 'react-native-webview/lib/WebViewTypes';
import { PlayerCommand, createPlayerCommand } from '../utils/playerCommands';
import { PLAYER_SCRIPT } from '../utils/playerScript';
import { buildPlayerUrl, extractVideoId } from '../utils/playerUrl';

const WebView = RNWebView as unknown as React.ForwardRefExoticComponent<
  React.ComponentProps<typeof RNWebView> &
    React.RefAttributes<RNWebView>
>;

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get('window');

interface Props {
  url: string;
  isActive: boolean;
  height?: number;
}

export default function TikTokPlayer({
  url,
  isActive,
  height = SCREEN_HEIGHT,
}: Props) {
  const webViewRef = useRef<RNWebView>(null);
  const isReadyRef = useRef(false);

  const videoId = extractVideoId(url);
  const playerUrl = buildPlayerUrl(videoId);

  const sendCommand = (command: keyof typeof PlayerCommand) => {
    if (!webViewRef.current) {
      return;
    }

    webViewRef.current.injectJavaScript(
      createPlayerCommand(PlayerCommand[command])
    );
  };

  useEffect(() => {
    if (!isActive) {
      sendCommand('PAUSE');
      return;
    }

    if (isReadyRef.current) {
      sendCommand('PLAY');
      sendCommand('UN_MUTE');
    }
  }, [isActive]);

  const onMessage = (event: WebViewMessageEvent) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);

      if (
        data['x-tiktok-player'] &&
        data.type === 'onPlayerReady'
      ) {
        isReadyRef.current = true;

        if (isActive) {
          sendCommand('PLAY');
          sendCommand('UN_MUTE');
        }
      }
    } catch {
      // Ignore malformed messages.
    }
  };

  return (
    <View
      style={{
        width: SCREEN_WIDTH,
        height,
      }}
    >
      <WebView
        ref={webViewRef}
        source={{ uri: playerUrl }}
        style={{
          width: SCREEN_WIDTH,
          height,
          backgroundColor: '#000',
        }}
        javaScriptEnabled
        domStorageEnabled
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction={false}
        startInLoadingState
        injectedJavaScript={PLAYER_SCRIPT}
        onMessage={onMessage}
        onOpenWindow={() => {}}
        onShouldStartLoadWithRequest={(
          request: ShouldStartLoadRequest
        ) => {
          if (!request.isTopFrame) {
            return true;
          }

          return request.url.includes('tiktok.com/player');
        }}
        renderLoading={() => (
          <View className="absolute inset-0 items-center justify-center bg-black">
            <ActivityIndicator
              size="large"
              color="#ffffff"
            />
          </View>
        )}
      />
    </View>
  );
}
