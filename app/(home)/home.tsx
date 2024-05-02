import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Link } from "expo-router";

const INITIAL_REGION = {
    latitude: 6.167754,
    longitude: -75.619507,
    latitudeDelta: 0.08,
    longitudeDelta: 0.04,
}

const Home = () => {
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
      <View style={{ flex: 1 }}>
        <Text>Part 2</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  maps: {
    width: "100%",
    height: "100%",
  },
});

export default Home;
