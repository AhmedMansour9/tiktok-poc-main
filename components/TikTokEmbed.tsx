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

function buildPage(videoId: string): string {
  const playerUrl =
    `https://www.tiktok.com/player/v1/${videoId}` +
    `?autoplay=1&loop=1&controls=1&music_info=0&description=0&rel=0&native_context_menu=0&closed_caption=0`;

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }
          iframe { width: 100%; height: 100%; border: none; display: block; }
        </style>
      </head>
      <body>
        <iframe
          src="${playerUrl}"
          allow="fullscreen"
          id="tiktok-player"
        ></iframe>
        <script>
          const iframe = document.getElementById('tiktok-player');

          // Forward messages from TikTok player to React Native
          window.addEventListener('message', function(event) {
            if (event.data && event.data['x-tiktok-player']) {
              window.ReactNativeWebView.postMessage(JSON.stringify(event.data));
            }
          });

          // Receive commands from React Native and forward to TikTok player
          document.addEventListener('message', function(event) {
            try {
              const msg = JSON.parse(event.data);
              iframe.contentWindow.postMessage(msg, 'https://www.tiktok.com');
            } catch(e) {}
          });

          // Block all link navigation
          document.addEventListener('click', function(e) {
            const target = e.target.closest('a');
            if (target) { e.preventDefault(); e.stopPropagation(); }
          }, true);
          window.open = function() { return null; };

          // Keep iframe focused to prevent pause on button clicks
          iframe.addEventListener('blur', function() {
            setTimeout(function() { iframe.focus(); }, 0);
          });
          window.addEventListener('blur', function() {
            setTimeout(function() { iframe.focus(); }, 0);
          });
        </script>
      </body>
    </html>
  `;
}

export default function TikTokEmbed({ url, isActive, height = SCREEN_HEIGHT }: Props) {
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
