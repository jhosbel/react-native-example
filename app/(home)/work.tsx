import { View, Text, StyleSheet, TextInput, TouchableOpacity, BackHandler } from "react-native";
import React, { useEffect } from "react";
import { Link, useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";

const Work = () => {
  const router = useRouter();
  const navigation = useNavigation()

  const goBackHandler = () => {
    navigation.goBack();
  };

  return (
    <View className="bg-[#282F62] h-full justify-center">
      <View className="w-full h-[642] bg-[#343B71] p-9 gap-4">
        <Text className="text-white text-[20px]">
          Los siguientes documentos son necesarios para poder ser parte de
          nuestra red de conductores.
        </Text>
        <View className="gap-4">
          <View
            style={style.shadow}
            className="w-[340px] bg-[#282F62] rounded-[5px] p-4 self-center"
          >
            <View className="flex-row justify-between">
              <View>
                <Text className="text-white text-[15px]">
                  Licencia de conducción
                </Text>
                <Text className="text-white text-[10px]">
                  Un permiso de conducir es un documento oficial.
                </Text>
              </View>
              <View>
                <Text className="text-white text-[12px]">COP 15.600,00</Text>
              </View>
            </View>
          </View>
          <View
            style={style.shadow}
            className="w-[340px] bg-[#282F62] rounded-[5px] p-4 self-center"
          >
            <View className="flex-row justify-between">
              <View>
                <Text className="text-white text-[15px]">
                  Documento de Identificación
                </Text>
                <Text className="text-white text-[10px]">
                  Una cedula de ciudadanía es un documento oficial.
                </Text>
              </View>
              <View>
                <Text className="text-white text-[12px]">COP 15.600,00</Text>
              </View>
            </View>
          </View>
          <View
            style={style.shadow}
            className="w-[340px] bg-[#282F62] rounded-[5px] p-4 self-center"
          >
            <View className="justify-between gap-4">
              <View>
                <Text className="text-white text-[15px]">
                  Características del vehículo
                </Text>
              </View>
              <View className="flex-row justify-around">
                <View className="gap-4">
                  <View className="gap-2">
                    <Text className="text-white text-[12px]">Marca</Text>
                    <View className="w-[96px] h-[20px] rounded-[15px] border border-[#545C9B] pl-3">
                      <TextInput
                        placeholder="Marca"
                        placeholderTextColor={"#545C9B"}
                        className="text-white"
                      />
                    </View>
                  </View>
                  <View className="gap-2">
                    <Text className="text-white text-[12px]">Año</Text>
                    <View className="w-[96px] h-[20px] rounded-[15px] border border-[#545C9B] pl-3">
                      <TextInput
                        placeholder="Año"
                        placeholderTextColor={"#545C9B"}
                        className="text-white"
                      />
                    </View>
                  </View>
                </View>
                <View className="gap-4">
                  <View className="gap-2">
                    <Text className="text-white text-[12px]">Modelo</Text>
                    <View className="w-[96px] h-[20px] rounded-[15px] border border-[#545C9B] pl-3">
                      <TextInput
                        placeholder="Modelo"
                        placeholderTextColor={"#545C9B"}
                        className="text-white"
                      />
                    </View>
                  </View>
                  <View className="gap-2">
                    <Text className="text-white text-[12px]">Matricula</Text>
                    <View className="w-[96px] h-[20px] rounded-[15px] border border-[#545C9B] pl-3">
                      <TextInput
                        placeholder="Matricula"
                        placeholderTextColor={"#545C9B"}
                        className="text-white"
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={goBackHandler}
          style={style.button}
        >
          <Text className="text-[#343B71] text-[20px] font-bold">Siguente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Work;

const style = StyleSheet.create({
  shadow: {
    elevation: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    color: "#343B71",
    padding: 10,
    borderRadius: 15,
    marginTop: 20,
  },
});
