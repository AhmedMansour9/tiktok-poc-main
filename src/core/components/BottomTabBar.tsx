import { Pressable, Text, View } from 'react-native';
import Icon, { IconName } from './Icon';

export type TabKey = 'home' | 'search' | 'shorts' | 'profile';

interface TabBarProps {
  activeTab: TabKey;
  onTabPress: (tab: TabKey) => void;
}

const TABS: { key: TabKey; icon: IconName; label: string }[] = [
  { key: 'home', icon: 'home', label: 'Home' },
  { key: 'search', icon: 'search', label: 'Search' },
  { key: 'shorts', icon: 'shorts', label: 'Shorts' },
  { key: 'profile', icon: 'profile', label: 'Profile' },
];

const ACTIVE_COLOR = '#FF4D67';
const INACTIVE_COLOR = '#9E9E9E';

export default function BottomTabBar({ activeTab, onTabPress }: TabBarProps) {
  return (
    <View
      className="flex-row bg-black border border-[#222] rounded-t-[28px] overflow-hidden"
      style={{ paddingVertical: 8 }}
    >
      {TABS.map((tab) => {
        const isActive = tab.key === activeTab;
        const color = isActive ? ACTIVE_COLOR : INACTIVE_COLOR;

        return (
          <Pressable
            key={tab.key}
            onPress={() => onTabPress(tab.key)}
            className="flex-1 items-center justify-center"
            style={{ paddingVertical: 8 }}
          >
            <Icon name={tab.icon} size={24} color={color} selected={isActive} />
            <Text style={{ color, fontSize: 11, marginTop: 4, marginBottom: 10 }}>{tab.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
