import React, { useCallback, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  LayoutChangeEvent,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
  View,
  ViewToken,
} from 'react-native';
import TikTokPlayer from '../components/TikTokPlayer';
import { useShorts } from '../hooks/useShorts';
import { Video } from '../types/Video';
import LoadingView from '../../../core/components/LoadingView';
import ErrorView from '../../../core/components/ErrorView';
import { RequestStatus } from '../../../core/common/BaseState';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function ShortsScreen() {
  const { request, refresh } = useShorts();

  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [itemHeight, setItemHeight] = useState(SCREEN_HEIGHT);

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    setItemHeight(event.nativeEvent.layout.height);
  }, []);

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0 && viewableItems[0].index !== null) {
        setActiveIndex(viewableItems[0].index);
      }
    },
    []
  );

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const renderItem = useCallback(
    ({ item, index }: ListRenderItemInfo<Video>) => (
      <TikTokPlayer
        url={item.url}
        isActive={index === activeIndex && !isScrolling}
        height={itemHeight}
      />
    ),
    [activeIndex, isScrolling, itemHeight]
  );

  const hasVideos = request.data.length > 0;
  const isLoading = request.status === RequestStatus.Idle || request.status === RequestStatus.Loading;
  const isError = request.status === RequestStatus.Error;

  if (!hasVideos && isLoading) {
    return <LoadingView />;
  }

  if (!hasVideos && isError) {
    return (
      <ErrorView
        title="Unable to load videos"
        message={request.error}
        retryText="Try Again"
        onRetry={refresh}
      />
    );
  }

  return (
    <View className="flex-1 bg-black" onLayout={onLayout}>
      <FlatList
        data={request.data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToInterval={itemHeight}
        snapToAlignment="start"
        decelerationRate="fast"
        onScrollBeginDrag={() => setIsScrolling(true)}
        onMomentumScrollEnd={() => setIsScrolling(false)}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        getItemLayout={(_, index) => ({
          length: itemHeight,
          offset: itemHeight * index,
          index,
        })}
      />
    </View>
  );
}