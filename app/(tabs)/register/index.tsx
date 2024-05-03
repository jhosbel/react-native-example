import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";

const Register = () => {
  const router = useRouter();
  return (
    <View style={style.container}>
      <View>
        <Image
          source={require("../../../assets/logo-sin-fondo.png")}
          style={style.img}
        />
      </View>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>Bienvenido</Text>
      <View
        style={{
          height: 30,
          width: "60%",
          borderBottomWidth: 1,
          borderColor: "#E9E9E9",
        }}
      ></View>
      <View>
        <TextInput style={style.input} placeholder="Usuario" />
        <TextInput style={style.input} placeholder="Correo electronico" />
        <TextInput style={style.input} placeholder="Contraseña" />
        <TextInput style={style.input} placeholder="Numero de telefono" />
        <TouchableOpacity
          onPress={() => router.navigate("/(code)/code")}
          style={style.button}
        >
          <Text style={{ color: "#ffffff" }}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: "100%",
  },
  img: {
    resizeMode: "contain",
    width: 200,
    height: 200,
  },
  text: {
    fontWeight: "bold",
  },
  input: {
    height: 40,
    width: 150,
    margin: 12,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#E9E9E9",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#343B71",
    color: "#ffffff",
    padding: 10,
    borderRadius: 15,
    marginTop: 20,
  },
});

export default Register;
