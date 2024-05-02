import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerTintColor: "#000",
      }}
    >
      <Tabs.Screen
        name="login"
        options={{
          tabBarLabel: "Ingresar",
          title: 'Ingresar',
          //headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="login" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="register"
        options={{
          tabBarLabel: "Registrarse",
          title: "Registrarse",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="adduser" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
