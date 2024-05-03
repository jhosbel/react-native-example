import { Stack } from "expo-router";
import "../global.css"

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(code)/code"
        options={{
          title: 'Código de verificación'
        }}
      />
      <Stack.Screen
        name="(home)"
        options={{
          title: 'Home',
          headerShown: false
        }}
      />
    </Stack>
  );
};

export default Layout;
