import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <View className="bg-[#282F62] h-full gap-[27px] justify-center">
      <View style={style.shadow} className="bg-[#343B71] h-[227px] w-full rounded-[5px]">
        <View className="flex-row self-center items-center justify-between py-4 w-[340px]">
          <Image
            source={require("../../assets/avatar-8.jpg")}
            className="rounded-full object-fill"
            style={{
              width: 45,
              height: 45,
              alignSelf: "center",
            }}
          />
          <Text className="text-white">{`Editar mi foto de perfil >`}</Text>
        </View>
        <View className="self-center p-4 border-t-[1px] border-[#ffffff] w-[340px]">
          <Text className="text-[#7177AB] text-[10px]">Nombre</Text>
          <Text className="text-white text-[20px]">Mario</Text>
        </View>
        <View className="self-center p-4 border-t-[1px] border-[#ffffff] w-[340px]">
          <Text className="text-[#7177AB] text-[10px]">Apellido</Text>
          <Text className="text-white text-[20px]">Reyes</Text>
        </View>
      </View>
      <View style={style.shadow} className="bg-[#343B71] h-[404px] w-full rounded-[5px] gap-[15px] justify-center">
        <View className="self-center flex-row justify-between py-4 border-b-[1px] border-[#ffffff] w-[340px]">
          <Text className="text-white text-[15px]">Numero de teléfono</Text>
          <Text className="text-white text-[15px]">309***5566</Text>
        </View>
        <View className="self-center flex-row justify-between py-4 border-b-[1px] border-[#ffffff] w-[340px]">
          <Text className="text-white text-[15px]">Correo electrónico</Text>
          <Text className="text-white text-[15px]">user***@gmail.com</Text>
        </View>
        <View className="self-center flex-row justify-between py-4 border-b-[1px] border-[#ffffff] w-[340px]">
          <Text className="text-white text-[15px]">Cambiar mi contraseña</Text>
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
        <View className="self-center flex-row justify-between py-4 w-[340px]">
          <Text className="text-white text-[15px]">Eliminar mi cuenta</Text>
          <Text className="text-white text-[15px]">{`>`}</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const style = StyleSheet.create({
  shadow: {
    elevation: 10,
  },
});