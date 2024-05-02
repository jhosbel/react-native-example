import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { View, Image } from 'react-native';
import CustomDrawerContent from '../../components/CustomDrawerContent';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1, position: 'relative' }}>
      <Drawer drawerContent={CustomDrawerContent}>
        <Drawer.Screen name='home' options={{
          title: 'Mapa'
        }} />
        <Drawer.Screen name='profile' options={{
          title: 'Perfil'
        }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}