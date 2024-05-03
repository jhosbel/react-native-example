import { View, Text, TextInput, Image } from "react-native";
import React from "react";

const HomeMapInput = () => {
  return (
    <View className="rounded-t-[15px] bg-[#343B71] justify-center items-center">
      {/* <View className="h-1/4 items-center">
        <TextInput />
      </View> */}
      <View className="h-3/4 flex-row gap-4 items-center">
        <View className="h-[174px] w-[150px] bg-[#343B71]">
          <Text className="text-white bg-[#343B71]">Disfruta del turismo</Text>
          <View className="h-[150px] w-[150px]">
            <Image
              className="object-contain h-[150px] w-[150px] rounded-[10px]"
              source={require("../assets/guatape.jpg")}
            />
          </View>
        </View>
        <View className="gap-4">
          <View className="h-[84px] w-[190px] bg-[#343B71]">
            <Text className="text-white">Taxi a la mano</Text>
            <View>
              <Image
                className="object-contain h-[60px] w-[190px] rounded-[10px]"
                source={require("../assets/taxi.webp")}
              />
            </View>
          </View>
          <View className="h-[84px] w-[190px] bg-[#343B71]">
            <Text className="text-white">Acarreos Rápidos</Text>
            <View>
              <Image
                className="object-contain h-[60px] w-[190px] rounded-[10px]"
                source={require("../assets/acarreos.webp")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeMapInput;
