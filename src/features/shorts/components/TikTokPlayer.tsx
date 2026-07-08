import React, { useEffect, useRef } from 'react';
import { Dimensions, View, ActivityIndicator } from 'react-native';
import { WebView as RNWebView, WebViewMessageEvent } from 'react-native-webview';
import type { ShouldStartLoadRequest } from 'react-native-webview/lib/WebViewTypes';

const WebView = RNWebView as unknown as React.ForwardRefExoticComponent<
  React.ComponentProps<typeof RNWebView> & React.RefAttributes<RNWebView>
>;

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

interface Props {
  url: string;
  isActive: boolean;
  height?: number;
}

function extractVideoId(url: string): string {
  const match = url.match(/video\/(\d+)/);
  return match ? match[1] : '';
}

export default function TikTokPlayer({ url, isActive, height = SCREEN_HEIGHT }: Props) {
  const webViewRef = useRef<RNWebView>(null);
  const isReadyRef = useRef(false);
  const videoId = extractVideoId(url);

  const playerUrl =
    `https://www.tiktok.com/player/v1/${videoId}` +
    `?autoplay=1&loop=1&controls=1&music_info=0&description=0&rel=0&native_context_menu=0&closed_caption=0&muted=0`;

  const sendCommand = (type: string) => {
    if (!webViewRef.current) return;
    const script = `
      (function() {
        window.postMessage({ 'x-tiktok-player': true, type: '${type}', value: null }, '*');
      })();
      true;
    `;
    webViewRef.current.injectJavaScript(script);
  };

  useEffect(() => {
    if (!isActive) {
      sendCommand('pause');
      return;
    }
    if (isReadyRef.current) {
      sendCommand('play');
      sendCommand('unMute');
    }
  }, [isActive]);

  const onMessage = (event: WebViewMessageEvent) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      if (data['x-tiktok-player'] && data.type === 'onPlayerReady') {
        isReadyRef.current = true;
        if (isActive) {
          sendCommand('play');
          sendCommand('unMute');
        }
      }
    } catch {}
  };

  return (
    <View style={{ width: SCREEN_WIDTH, height }}>
      <WebView
        ref={webViewRef}
        source={{ uri: playerUrl }}
        style={{ width: SCREEN_WIDTH, height, backgroundColor: '#000' }}
        javaScriptEnabled
        domStorageEnabled
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction={false}
        startInLoadingState
        onShouldStartLoadWithRequest={(request: ShouldStartLoadRequest) => {
          if (!request.isTopFrame) return true;
          return request.url.includes('tiktok.com/player');
        }}
        onOpenWindow={() => {}}
        onMessage={onMessage}
        injectedJavaScript={`
          window.addEventListener('message', function(event) {
            if (event.data && event.data['x-tiktok-player']) {
              window.ReactNativeWebView.postMessage(JSON.stringify(event.data));
            }
          });
          window.open = function() { return null; };
          window.location.assign = function() {};
          window.location.replace = function() {};
          document.addEventListener('click', function(e) {
            const target = e.target.closest('a');
            if (target && target.href) {
              e.preventDefault();
              e.stopPropagation();
            }
          }, true);
          true;
        `}
        renderLoading={() => (
          <View className="absolute inset-0 bg-black items-center justify-center">
            <ActivityIndicator size="large" color="#fff" />
          </View>
        )}
      />
    </View>
  );
}
