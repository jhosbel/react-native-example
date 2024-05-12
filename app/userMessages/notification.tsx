import { View, Text } from "react-native";
import React from "react";

const Notification = () => {
  return (
    <View className="bg-[#343B71] h-[640px] w-full gap-[15px]">
      <View className="justify-between gap-4">
        <View className="border-b-[1px] border-[#7177AB] p-4">
          <Text className="text-white text-[13px]">
            Conéctate tempranito con 15% off
          </Text>
          <Text className="text-[#7177AB] text-[10px]">
            De lunes a jueves, desde las 7 hasta las 10 a.m. Lo bueno es que hay
            Urbanity
          </Text>
        </View>
        <View className="border-b-[1px] border-[#7177AB] p-4">
          <Text className="text-white text-[13px]">
            ¡Vuelve a Urbanity Moto con 30% OFF!
          </Text>
          <Text className="text-[#7177AB] text-[10px]">
            ¡Aprovecha este descuento! Vuelve a moverte por la ciudad con
            Urbanity Moto
          </Text>
        </View>
        <View className="border-b-[1px] border-[#7177AB] p-4 flex-row justify-between items-center">
          <Text className="text-white text-[10px]">4 Nuevos mensajes</Text>
          <Text className="text-white">{`>`}</Text>
        </View>
      </View>
    </View>
  );
};

export default Notification;
