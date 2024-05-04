import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import BottomSheet, {
  BottomSheetView,
  BottomSheetTextInput,
} from "@gorhom/bottom-sheet";
import HomeMapInput from "../../components/HomeMapInput";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const INITIAL_REGION = {
  latitude: 6.167754,
  longitude: -75.619507,
  latitudeDelta: 0.08,
  longitudeDelta: 0.04,
};

const Home = () => {
  const sheetRef = useRef<BottomSheet>(null);
  const [isOpen, setIsOpen] = useState(true);
  const [text, setText] = useState("");
  const snapPoints = ["11%", "50%"];

  const [location, setLocation] = useState<any>();
  const [errorMsg, setErrorMsg] = useState("");

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("permiso denegado");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    console.log(location)
  };

  useEffect(() => {
    userLocation();
  }, []);

  const textHanlder = (text: string) => {
    setText(text);
  };

  let texto = "Waiting..";
  if (errorMsg) {
    texto = errorMsg;
  } else if (location) {
    texto = JSON.stringify(location);
  }

  return (
    <View style={{ height: "100%" }}>
      <View className="flex-1 items-center">
        <MapView
          style={StyleSheet.absoluteFill}
          provider={PROVIDER_GOOGLE}
          initialRegion={INITIAL_REGION}
          showsUserLocation={true}
          showsMyLocationButton={true}
          //showsTraffic={true}
        />
        <View className="w-[340px] h-[30px] rounded-[5px] shadow border-[#EDEDF6] border bg-white mt-8 flex-row">
          <View className="h-[7px] w-[7px] bg-[#43B05C] rounded-full self-center ml-[15px]"></View>
          <Text className="text-[#343B71] self-center ml-[15px]">|</Text>
          <Text className="text-[#343B71] self-center ml-[15px]">
            Mi dirección actual
          </Text>
          <Entypo name="plus" size={24} color="#343B71" />
        </View>
        <View className="w-[340px] h-[30px] rounded-[5px] shadow border-[#EDEDF6] border bg-white mt-8 flex-row">
          <Text className="text-[#343B71] self-center ml-[15px]">{text}</Text>
          <Ionicons name="remove" size={24} color="#343B71" />
        </View>
        <TextInput
          placeholder="Prueba"
          className="w-[340px] h-[30px] rounded-[5px] shadow border-[#EDEDF6] border bg-white mt-8 text-[#343B71]"
        />
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        backgroundStyle={{ backgroundColor: "#343B71" }}
        enablePanDownToClose={true}
      >
        <TextInput
          className="w-[343px] h-[40px] border self-center rounded-[5px] border-[#545C9B] bg-[#282F62] text-white pl-4"
          placeholder="¿A dónde quieres ir?"
          placeholderTextColor={"white"}
          onChangeText={textHanlder}
          onSubmitEditing={() => console.log(text)}
        />
        <HomeMapInput />
      </BottomSheet>
    </View>
  );
};

const style = StyleSheet.create({
  maps: {
    width: "100%",
    height: "100%",
  },
  sheet: {
    backgroundColor: "#343B71",
  },
});

export default Home;
