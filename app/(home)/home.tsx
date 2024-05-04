import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React, { useCallback, useRef, useState } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import BottomSheet, {
  BottomSheetView,
  BottomSheetTextInput,
} from "@gorhom/bottom-sheet";
import HomeMapInput from "../../components/HomeMapInput";

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
  const snapPoints = ["15%", "50%"];

  const textHanlder = (text: string) => {
    setText(text);
  };

  return (
    <View style={{ height: "100%" }}>
      <View className="flex-1">
        <MapView
          style={StyleSheet.absoluteFill}
          provider={PROVIDER_GOOGLE}
          initialRegion={INITIAL_REGION}
          showsUserLocation
          showsMyLocationButton
        />
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        backgroundStyle={{ backgroundColor: "#343B71" }}
      >
        {/* <BottomSheetTextInput
          className="w-[343px] h-[40px] border self-center rounded-[5px] border-[#545C9B] bg-[#282F62] text-white pl-4"
          placeholder="¿A dónde quieres ir?"
          placeholderTextColor={"white"}
        /> */}
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
