import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { View, Image, StyleSheet } from "react-native";
import CustomDrawerContent from "../../components/CustomDrawerContent";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={CustomDrawerContent}
        initialRouteName="home"
        screenOptions={{
          drawerActiveBackgroundColor: '#F9FAFF',
          //drawerHideStatusBarOnOpen: true,
          drawerActiveTintColor: "#282F62",
          drawerInactiveTintColor: '#FFFFFF',
          drawerStyle: {
            backgroundColor: '#282F62'
          }
        }}
      >
        <Drawer.Screen
          name="home"
          options={{
            title: "Mapa",
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            title: "Perfil",
          }}
        />
        <Drawer.Screen
          name="travel"
          options={{
            title: "Mis viajes",
          }}
        />
        <Drawer.Screen
          name="wallet"
          options={{
            title: "Mi billetera",
          }}
        />
        <Drawer.Screen
          name="messages"
          options={{
            title: "Mensajes",
          }}
        />
        <Drawer.Screen
          name="security"
          options={{
            title: "Seguridad",
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            title: "Configuración",
          }}
        />
        <Drawer.Screen
          name="help"
          options={{
            title: "Ayuda",
          }}
        />
        <Drawer.Screen
          name="work"
          options={{
            title: "Genera ingresos",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}


const style = StyleSheet.create({
  options: {
    borderColor: 'red',
    borderWidth: 1
  }
})