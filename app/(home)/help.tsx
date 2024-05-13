import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Help = () => {
  return (
    <View className="bg-[#282F62] h-full gap-[27px] justify-center">
      <View
        style={style.shadow}
        className="h-[642px] bg-[#343B71] pt-10 gap-[26px]"
      >
        <Text className="text-white text-[16px] text-center">
          ¿Qué deseas saber?
        </Text>
        <View
          style={style.shadow}
          className="bg-[#282F62] w-full rounded-[5px] justify-center"
        >
          <View className="flex-row self-center items-center justify-between py-4 w-[340px]">
            <Text className="text-white text-[16px]">Pagos</Text>
            <Text className="text-white text-[16px]">{`>`}</Text>
          </View>
          <View className="self-center flex-row items-center justify-between border-t-[1px] border-[#7177AB] py-4 w-[340px]">
            <Text className="text-white text-[16px]">Ayuda con un viaje</Text>
            <Text className="text-white text-[16px]">{`>`}</Text>
          </View>
          <View className="self-center flex-row items-center justify-between border-t-[1px] border-[#7177AB] py-4 w-[340px]">
            <Text className="text-white text-[16px]">Cuenta</Text>
            <Text className="text-white text-[16px]">{`>`}</Text>
          </View>
          <View className="self-center flex-row items-center justify-between border-t-[1px] border-[#7177AB] py-4 w-[340px]">
            <Text className="text-white text-[16px]">
              Seguridad y Emergencias
            </Text>
            <Text className="text-white text-[16px]">{`>`}</Text>
          </View>
          <View className="self-center flex-row items-center justify-between border-t-[1px] border-[#7177AB] py-4 w-[340px]">
            <Text className="text-white text-[16px]">
              Historial de mensajes
            </Text>
            <Text className="text-white text-[16px]">{`>`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Help;

const style = StyleSheet.create({
  shadow: {
    elevation: 10,
  },
});
