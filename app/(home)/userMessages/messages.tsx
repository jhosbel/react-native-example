import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const UserMessages = () => {
  return (
    <View className="bg-[#343B71] h-[640px] w-full gap-[15px]">
      <View className="justify-between gap-4">
        
        <View className="border-b-[1px] border-[#7177AB] p-4 flex-row justify-between">
          <View className="flex-row gap-4">
            <Image source={require("../../../assets/avatar-8.jpg")} style={style.img} />
            <View>
              <Text className="text-white text-[13px]">Carlos</Text>
              <Text className="text-[#7177AB] text-[10px]">
                El arrendador llegará en 3 min. Esp...
              </Text>
            </View>
          </View>
          <Text className="text-[#7177AB] text-[10px]">08/01</Text>
        </View>

        <View className="border-b-[1px] border-[#7177AB] p-4 flex-row justify-between">
          <View className="flex-row gap-4">
            <Image source={require("../../../assets/avatar-8.jpg")} style={style.img} />
            <View>
              <Text className="text-white text-[13px]">Carlos</Text>
              <Text className="text-[#7177AB] text-[10px]">
                El arrendador llegará en 3 min. Esp...
              </Text>
            </View>
          </View>
          <Text className="text-[#7177AB] text-[10px]">08/01</Text>
        </View>

        <View className="border-b-[1px] border-[#7177AB] p-4 flex-row justify-between">
          <View className="flex-row gap-4">
            <Image source={require("../../../assets/avatar-8.jpg")} style={style.img} />
            <View>
              <Text className="text-white text-[13px]">Carlos</Text>
              <Text className="text-[#7177AB] text-[10px]">
                El arrendador llegará en 3 min. Esp...
              </Text>
            </View>
          </View>
          <Text className="text-[#7177AB] text-[10px]">08/01</Text>
        </View>

        <View className="border-b-[1px] border-[#7177AB] p-4 flex-row justify-between">
          <View className="flex-row gap-4">
            <Image source={require("../../../assets/avatar-8.jpg")} style={style.img} />
            <View>
              <Text className="text-white text-[13px]">Carlos</Text>
              <Text className="text-[#7177AB] text-[10px]">
                El arrendador llegará en 3 min. Esp...
              </Text>
            </View>
          </View>
          <Text className="text-[#7177AB] text-[10px]">08/01</Text>
        </View>

        <View className="border-b-[1px] border-[#7177AB] p-4 flex-row justify-between">
          <View className="flex-row gap-4">
            <Image source={require("../../../assets/avatar-8.jpg")} style={style.img} />
            <View>
              <Text className="text-white text-[13px]">Carlos</Text>
              <Text className="text-[#7177AB] text-[10px]">
                El arrendador llegará en 3 min. Esp...
              </Text>
            </View>
          </View>
          <Text className="text-[#7177AB] text-[10px]">08/01</Text>
        </View>

      </View>
    </View>
  );
};

export default UserMessages;

const style = StyleSheet.create({
  img: {
    width: 45,
    height: 45,
    alignSelf: "center",
    borderRadius: 100
  },
});
