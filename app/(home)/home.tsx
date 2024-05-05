import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  Animated,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import BottomSheet, {
  BottomSheetView,
  BottomSheetTextInput,
} from "@gorhom/bottom-sheet";
import HomeMapInput from "../../components/HomeMapInput";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import customMapStyle from "./customMapStyle.json";

const INITIAL_REGION = {
  latitude: 6.167754,
  longitude: -75.619507,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const Home = () => {
  const sheetRef = useRef<BottomSheet>(null);
  const [isOpen, setIsOpen] = useState(true);
  const [text, setText] = useState("");
  const snapPoints = ["11%", "50%"];

  const [mapRegion, setMapRegion] = useState({
    latitude: 6.167754,
    longitude: -75.619507,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [errorMsg, setErrorMsg] = useState("");

  /* const userLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("permiso denegado");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    const newRegion = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
    setMapRegion(newRegion);
  }; */

  const requestLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("permiso denegado");
      return false;
    }
    return true;
  };

  const getUserLocation = async () => {
    let location = await Location.getCurrentPositionAsync({});
    const newRegion = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };
    setMapRegion(newRegion);
  };

  useEffect(() => {
    requestLocationPermission();
    getUserLocation();
  }, []);

  const textHanlder = (text: string) => {
    setText(text);
  };

  return (
    <View style={{ height: "100%" }}>
      <View className="flex-1 items-center">
        <MapView
          style={StyleSheet.absoluteFill}
          provider={PROVIDER_GOOGLE}
          initialRegion={INITIAL_REGION}
          region={mapRegion}
          showsUserLocation={true}
          showsMyLocationButton={true}
          customMapStyle={customMapStyle}
          mapPadding={{ bottom: 300, left: 0, right: 0, top: 300 }}
        />
        <View className="w-[340px] h-[30px] rounded-[5px] shadow border-[#EDEDF6] border bg-white mt-[4.5rem] flex-row">
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
        {/* <TouchableOpacity style={style.pointLocation} onPress={userLocationPermission}>
          <MaterialCommunityIcons
            name="crosshairs-gps"
            size={20}
            color="white"
          />
        </TouchableOpacity> */}
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        backgroundStyle={{ backgroundColor: "#343B71" }}
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
  pointLocation: {
    height: 48,
    width: 48,
    backgroundColor: "#343B71",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
