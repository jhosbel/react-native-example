import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Wallet = () => {
  return (
    <View className="bg-[#282F62] h-full gap-[27px] justify-center">
      <View
        style={style.shadow}
        className="bg-[#343B71] h-[640px] w-full rounded-[5px] gap-[15px]"
      >
        <View className="self-center justify-between py-4">
          <Text className="text-white text-[16px] font-bold">
            Métodos de pago
          </Text>
          <View className="self-center flex-row justify-between py-4 border-b-[1px] border-[#ffffff] w-[340px]">
            <Text className="text-white text-[15px]">Efectivo</Text>
            <Text className="text-white text-[15px]">{`>`}</Text>
          </View>
          <View className="self-center flex-row justify-between py-4 border-b-[1px] border-[#ffffff] w-[340px]">
            <Text className="text-white text-[15px]">DAVIplata</Text>
            <Text className="text-white text-[15px]">{`>`}</Text>
          </View>
          <View className="self-center flex-row justify-between py-4 border-b-[1px] border-[#ffffff] w-[340px]">
            <Text className="text-white text-[15px]">Nequi</Text>
            <Text className="text-white text-[15px]">{`>`}</Text>
          </View>
          <View className="self-center flex-row justify-between py-4 border-b-[1px] border-[#ffffff] w-[340px]">
            <Text className="text-white text-[15px]">Mis redes sociales</Text>
            <Text className="text-white text-[15px]">{`>`}</Text>
          </View>
          <View className="self-center flex-row justify-between py-4 border-b-[1px] border-[#ffffff] w-[340px]">
            <Text className="text-white text-[15px]">Mis dispositivos</Text>
            <Text className="text-white text-[15px]">{`>`}</Text>
          </View>
        </View>
        <View className="self-center justify-between gap-4 py-4 w-[340px] border-b-[1px] border-[#ffffff]">
          <View className="flex-row justify-between">
            <Text className="text-white text-[15px]">****7070</Text>
            <Text className="text-white text-[15px]">{`>`}</Text>
          </View>
          <View>
            <Text className="text-white text-[15px]">
              Agregar método de pago
            </Text>
            <Text className="text-[#7177AB] text-[10px]">
              Tarjeta de credito/debito
            </Text>
          </View>
        </View>
        <View className="self-center justify-between gap-4 py-4 w-[340px]">
          <Text className="text-white text-[16px] font-bold">Promoción</Text>
          <View className="flex-row justify-between">
            <Text className="text-white text-[15px]">Cupones</Text>
            <Text className="text-white text-[15px]">{`>`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Wallet;

const style = StyleSheet.create({
  shadow: {
    elevation: 10,
  },
});
