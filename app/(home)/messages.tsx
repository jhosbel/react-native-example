import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import UserMessages from "./userMessages/messages";
import Notification from "./userMessages/notification";
import { Stack } from "expo-router";
//import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createMaterialTopTabNavigator();
//const Tab = createBottomTabNavigator();

const Messages = () => {
  return (
    <View className="bg-[#282F62] h-full gap-[27px] justify-center">
      <View
        style={style.shadow}
        className="bg-[#343B71] h-[640px] w-full rounded-[5px] gap-[15px]"
      >
          <Tab.Navigator
            screenOptions={{
              tabBarStyle: style.nav,
              tabBarActiveTintColor: "#ffffff",
              tabBarInactiveTintColor: "#7177AB",
              tabBarPressColor: "#282F62",
              tabBarIndicatorStyle: { backgroundColor: "#ffffff" },
            }}
          >
            <Tab.Screen name="Notificaciones" component={Notification} />
            <Tab.Screen name="Conversaciones" component={UserMessages} />
          </Tab.Navigator>
      </View>
    </View>
  );
};

export default Messages;

const style = StyleSheet.create({
  shadow: {
    elevation: 10,
  },
  nav: {
    backgroundColor: "#343B71",
    borderRadius: 5,
  },
});
