import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Colors, Drawer, Switch } from "react-native-ui-lib";

const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View className="bg-[#282F62] h-full gap-[27px] justify-center">
      <View
        style={style.shadow}
        className="h-[642px] bg-[#343B71] pt-10 gap-[26px]"
      >
        <View
          style={style.shadow}
          className="bg-[#282F62] w-full rounded-[5px] justify-center"
        >
          <View className="flex-row self-center items-center justify-between py-4 w-[340px]">
            <Text className="text-white text-[16px]">Mi perfil</Text>
            <Text className="text-white text-[16px]">{`>`}</Text>
          </View>
          <View className="self-center flex-row items-center justify-between border-t-[1px] border-[#7177AB] py-4 w-[340px]">
            <Text className="text-white text-[16px]">
              Mis lugares favoritos
            </Text>
            <Text className="text-white text-[16px]">{`>`}</Text>
          </View>
          <View className="self-center flex-row items-center justify-between border-t-[1px] border-[#7177AB] py-4 w-[340px]">
            <View>
              <Text className="text-white text-[16px]">
                Mapa en la pantalla de bloqueo
              </Text>
              <Text className="text-[#7177AB] text-[10px]">
                Mostrar ubicación del socio, tiempo de llegada, etc.
              </Text>
            </View>
            <View>
              <Switch
                onColor={Colors.green20}
                offColor={Colors.getHexString("B9BCDD")}
                thumbColor={Colors.getHexString("343B71")}
                value={isEnabled}
                onValueChange={toggleSwitch}
              />
            </View>
          </View>
        </View>
        <View
          style={style.shadow}
          className="bg-[#282F62] w-full rounded-[5px] justify-center"
        >
          <View className="flex-row self-center items-center justify-between py-4 w-[340px]">
            <Text className="text-white text-[16px]">Privacidad</Text>
            <Text className="text-white text-[16px]">{`>`}</Text>
          </View>
          <View className="self-center flex-row items-center justify-between border-t-[1px] border-[#7177AB] py-4 w-[340px]">
            <Text className="text-white text-[16px]">
              Términos y Condiciones
            </Text>
            <Text className="text-white text-[16px]">{`>`}</Text>
          </View>
          <View className="self-center flex-row items-center justify-between border-t-[1px] border-[#7177AB] py-4 w-[340px]">
            <Text className="text-white text-[16px]">Acerca de Urbanity</Text>
            <Text className="text-white text-[16px]">{`>`}</Text>
          </View>
          <View className="self-center flex-row items-center justify-between border-t-[1px] border-[#7177AB] py-4 w-[340px]">
            <Text className="text-white text-[16px]">Cerrar sesión</Text>
            <Text className="text-white text-[16px]">{`>`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Settings;

const style = StyleSheet.create({
  shadow: {
    elevation: 10,
  },
});
