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
  const snapPoints = ["50%", "75%"];

  return (
    <View style={{ height: "100%" }}>
      <View
        style={{
          flex: 1,
        }}
      >
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
        <BottomSheetTextInput className="border" />
        <HomeMapInput />
        {/* <BottomSheetView>
          
        </BottomSheetView> */}
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
