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

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function ShortsScreen() {
  const { videos, loading, error, refresh } = useShorts();

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

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-black">
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 items-center justify-center bg-black px-6">
        <Text className="text-white text-lg text-center">
          {error}
        </Text>

        <TouchableOpacity
          className="mt-6 bg-white rounded-lg px-6 py-3"
          onPress={refresh}
        >
          <Text className="text-black font-semibold">
            Retry
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-black" onLayout={onLayout}>
      <FlatList
        data={videos}
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