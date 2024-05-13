import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Security = () => {
  return (
    <View className="bg-[#282F62] h-full gap-[27px] justify-center">
      <View
        style={style.shadow}
        className="bg-[#343B71] h-[640px] w-full rounded-[5px] gap-[15px]"
      >
        <View className="self-center flex-row  justify-between gap-4 py-4 w-[340px] border-b-[1px] border-[#7177AB]">
          <View className="flex-1">
            <Text className="text-white text-[15px]">
              Contactos de confianza
            </Text>
            <Text className="text-[#7177AB] text-[10px]">
              Con un solo clic, comparte tu ubicación con familiares y amigos
            </Text>
          </View>
          <View className="flex-1 justify-between items-end">
            <Text className="text-[#7177AB] text-[15px]">{`Agregar >`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Security;

const style = StyleSheet.create({
  shadow: {
    elevation: 10,
  },
});
