import './global.css';
import { useState } from 'react';
import { StatusBar, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import BottomTabBar, { TabKey } from './src/core/components/BottomTabBar';
import { initGrpc } from './src/core/network/grpc/config';
import HomeScreen from './src/features/home/screens/HomeScreen';
import SearchScreen from './src/features/search/screens/SearchScreen';
import ShortsScreen from './src/features/shorts/screens/ShortsScreen';
import ProfileScreen from './src/features/profile/screens/ProfileScreen';

initGrpc();

function AppContent() {
  const [activeTab, setActiveTab] = useState<TabKey>('shorts');
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-black">
      <StatusBar hidden />
      <View className="flex-1">
        <View style={{ flex: 1, display: activeTab === 'home' ? 'flex' : 'none' }}>
          <HomeScreen />
        </View>
        <View style={{ flex: 1, display: activeTab === 'search' ? 'flex' : 'none' }}>
          <SearchScreen />
        </View>
        <View style={{ flex: 1, display: activeTab === 'shorts' ? 'flex' : 'none' }}>
          <ShortsScreen />
        </View>
        <View style={{ flex: 1, display: activeTab === 'profile' ? 'flex' : 'none' }}>
          <ProfileScreen />
        </View>
      </View>
      <View style={{ position: 'absolute', left: 0, right: 0, bottom: insets.bottom }}>
        <BottomTabBar activeTab={activeTab} onTabPress={setActiveTab} />
      </View>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  );
}
