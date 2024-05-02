import { View, Text, Image } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

export default function CustomDrawerContent(props: any) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View>
          <Image
            source={require("../assets/logo-sin-fondo.png")}
            style={{ width: 100, height: 100, alignSelf: "center" }}
          />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}
