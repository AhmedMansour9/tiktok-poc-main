import React, { useCallback, useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  LayoutChangeEvent,
  ListRenderItemInfo,
  View,
  ViewToken,
} from 'react-native';
import TikTokEmbed from '../components/TikTokEmbed';
import { TIKTOK_VIDEOS } from '../data/videos';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

type Video = { id: string; url: string };

export default function ShortsScreen() {
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

  const viewabilityConfig = useRef({ itemVisiblePercentThreshold: 50 }).current;

  const renderItem = useCallback(
    ({ item, index }: ListRenderItemInfo<Video>) => (
      <TikTokEmbed
        url={item.url}
        isActive={index === activeIndex && !isScrolling}
        height={itemHeight}
      />
    ),
    [activeIndex, isScrolling, itemHeight]
  );

  return (
    <View className="flex-1 bg-black" onLayout={onLayout}>
      <FlatList
        data={TIKTOK_VIDEOS}
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
