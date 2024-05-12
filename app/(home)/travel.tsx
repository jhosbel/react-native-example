import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Travel = () => {
  return (
    <View className="bg-[#282F62] h-full justify-center">
      <View className="w-full h-[642] bg-[#343B71]">
        <Text className="text-white text-[20px] text-center">Mis Viajes</Text>
        <View className="gap-2">
          <Text className="text-center text-[12px] text-[#7177AB]">
            Finalizados
          </Text>
          <View style={style.shadow} className="w-[370px] h-[127px] bg-[#282F62] rounded-[5px] p-2 self-center">
            <View className="flex-row justify-between">
              <Text className="text-white text-[12px]">Express</Text>
              <View>
                <Text className="text-white text-[12px]">COP 15.600,00</Text>
                <Text className="text-[#7177AB] text-[12px]">Completada</Text>
              </View>
            </View>
            <Text className="text-white text-[12px]">08/01/2024, 4:07pm</Text>
            <Text className="text-white text-[12px]">
              Envigado - Plaza Viva Envigado
            </Text>
            <Text className="text-white text-[12px]">
              Itagui - Barrio La Union
            </Text>
          </View>
          <Text className="text-center text-[#7177AB] text-[12px]">
            Viajes del 30/11/2023
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Travel;

const style = StyleSheet.create({
  shadow: {
    elevation: 10,
  },
});
