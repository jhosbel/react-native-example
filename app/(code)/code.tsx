import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";

const CodeVerification = () => {

    const router = useRouter()

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', height: '100%'}} >
      <View style={style.container}>
        <Text style={{ color: "white" }}>
          Ingrese su código de verificación
        </Text>
        <Text style={{ color: "white", fontSize: 10 }}>
          El codigo ah sido envíado al +91 454 5454710
        </Text>
        <View style={{flexDirection: 'row'}} >
            <TextInput style={style.input} placeholder="1" placeholderTextColor={'#545C9B'} />
            <TextInput style={style.input} placeholder="2" placeholderTextColor={'#545C9B'} />
            <TextInput style={style.input} placeholder="3" placeholderTextColor={'#545C9B'} />
            <TextInput style={style.input} placeholder="4" placeholderTextColor={'#545C9B'} />
        </View>
        <Text style={{ color: "white", fontSize: 10 }}>
          No ah recibido su código? <Text style={{fontWeight: 'bold'}} >Reenviar</Text>
        </Text>
      </View>
      <Button title="Confirmar" onPress={() => router.navigate('(home)/home')} /* style={style.button} */ >
        {/* <Text href={'(home)/home'} style={{color: 'white'}} >Confirmar</Text> */}
      </Button>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#343B71",
    width: 365,
    height: 305,
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 15
  },
  input: {
    width: 50,
    height: 50,
    borderColor: '#545C9B',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#282F62',
    textAlign: 'center',
    color: 'white'
  },
  button: {
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "#343B71",
    color: "#ffffff",
    padding: 10,
    borderRadius: 10,
    marginTop: 25,
    width: 365,
    height: 45,
  },
});

export default CodeVerification;
