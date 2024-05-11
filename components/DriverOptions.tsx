import { View, Text, TextInput } from "react-native";
import React from "react";
import BottomSheet, {
  BottomSheetView,
  BottomSheetTextInput,
} from "@gorhom/bottom-sheet";

const DriverOptions = ({ sheetRef, timeToDestination, distanceToDestination }: any) => {
  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={["25%", "60%"]}
      backgroundStyle={{ backgroundColor: "#343B71" }}
    >
      <View className="justify-center items-center gap-4">
        <Text className="text-center text-white">Elige tu viaje</Text>
        <View className="flex-row gap-16">
          <Text className="text-white">
            Tiempo de llegada: {Math.ceil(timeToDestination)} min
          </Text>
          <Text className="text-white">
            Distacina: {distanceToDestination.toFixed(2)} km
          </Text>
        </View>
        <View className="gap-[3px]">
          <View className="flex-row items-center w-[390px] h-[50px] bg-[#282F62] justify-around">
            <View className="flex-1 pl-4">
              <Text className="text-[#7177AB]">Taxi</Text>
              <Text className="text-[#7177AB] text-[8px]">6 min</Text>
            </View>
            <View className="flex-1">
              <Text className="text-[#7177AB]">$ 10.085 - 13.645</Text>
            </View>
          </View>
          <View className="flex-row items-center w-[390px] h-[50px] bg-[#282F62] justify-around">
            <View className="flex-1 pl-4">
              <Text className="text-[#7177AB]">Moto Taxi</Text>
              <Text className="text-[#7177AB] text-[8px]">3 min</Text>
            </View>
            <View className="flex-row items-center gap-[7px] flex-1">
              <Text className="text-[#7177AB] bg-white rounded-[25px] w-[40px] h-[25px]">
                - 500
              </Text>
              <TextInput
                placeholder="$ 8.500"
                className="text-[#7177AB] w-[60px] h-[25px] bg-white rounded-[25px]"
                placeholderTextColor={"#7177AB"}
              />
              <Text className="text-[#7177AB] bg-white rounded-[25px] w-[40px] h-[25px]">
                + 500
              </Text>
            </View>
          </View>
          <View className="flex-row items-center w-[390px] h-[50px] bg-[#ffffff] justify-around">
            <View className="flex-1 pl-4">
              <Text className="text-[#282F62]">Elige el precio</Text>
              <Text className="text-[#282F62] text-[8px]">
                Negocia el mejor precio
              </Text>
            </View>
            <View className="flex-row items-center gap-[7px] flex-1">
              <Text className="text-[#7177AB] bg-white border-[#545C9B] border rounded-[25px] w-[40px] h-[25px]">
                - 500
              </Text>
              <TextInput
                placeholder="$ 8.500"
                className="text-[#7177AB] border-[#545C9B] border w-[60px] h-[25px] bg-white rounded-[25px]"
                placeholderTextColor={"#7177AB"}
              />
              <Text className="text-[#7177AB] bg-white border-[#545C9B] border rounded-[25px] w-[40px] h-[25px]">
                + 500
              </Text>
            </View>
          </View>
          <View className="flex-row items-center w-[390px] h-[50px] bg-[#282F62] justify-around">
            <View className="flex-1 pl-4">
              <Text className="text-[#7177AB]">Mudanzas y Acarreos</Text>
              <Text className="text-[#7177AB] text-[8px]">
                Negocia el mejor precio para tu mudanza
              </Text>
            </View>
            <View className="flex-row items-center gap-[7px] flex-1">
              <Text className="text-[#7177AB] bg-white rounded-[25px] w-[40px] h-[25px]">
                - 500
              </Text>
              <TextInput
                placeholder="$ 8.500"
                className="text-[#7177AB] w-[60px] h-[25px] bg-white rounded-[25px]"
                placeholderTextColor={"#7177AB"}
              />
              <Text className="text-[#7177AB] bg-white rounded-[25px] w-[40px] h-[25px]">
                + 500
              </Text>
            </View>
          </View>
        </View>
        <View className="flex-row w-full justify-around">
          <Text className="text-white text-[10px]">****7070</Text>
          <Text className="text-white text-[10px]">Añadir método de pago</Text>
        </View>
        <View className="w-[360px] h-[45px] bg-white rounded-[10px] justify-center items-center">
          <Text className="text-[#343B71] text-[20px] font-semibold">
            Confirmar
          </Text>
        </View>
      </View>
    </BottomSheet>
  );
};

export default DriverOptions;
