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
        <View
          style={{ alignItems: "center", height: 150, gap: 5 }}
          className="bg-[#282F62]"
        >
          <Image
            source={require("../assets/avatar-8.jpg")}
            className="rounded-full object-fill"
            style={{
              width: 100,
              height: 100,
              alignSelf: "center",
            }}
          />
          <Text className="text-white">Mario Reyes</Text>
          <Text className="text-[#7177AB]" style={{ fontSize: 10 }}>
            Editar mi perfil
          </Text>
        </View>
        <View style={{ height: 650 }} className="bg-[#343B71] justify-center rounded-tr-lg">
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
