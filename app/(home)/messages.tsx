import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import UserMessages from "../userMessages/messages";
import Notification from "../userMessages/notification";
import MessageTabs from "../../components/MessageTabs";

const Tab = createMaterialTopTabNavigator();

const Messages = () => {
  return (
    <MessageTabs />
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
