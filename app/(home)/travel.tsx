import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Constants from "expo-constants";
import MapView, { LatLng, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import BottomSheet from "@gorhom/bottom-sheet";
import {
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";
import { InputAutocomplete } from "../../components/InputAutocomplete";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_API_KEY } from "../../env";
import * as Location from "expo-location";
import { Entypo } from "@expo/vector-icons";
import DriverOptions from "../../components/DriverOptions";
import customMapStyle from "./customMapStyle.json";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  latitude: 40.76711,
  longitude: -73.979704,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

const Travel = () => {
  const [origin, setOrigin] = useState<LatLng | null>();
  const [destination, setDestination] = useState<LatLng | null>();
  const [showDirections, setShowDirections] = useState(false);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);
  const [userLocation, setUserLocation] = useState<any>({
    latitude: 6.167754,
    longitude: -75.619507,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const mapRef = useRef<MapView>(null);
  const sheetRef = useRef<BottomSheet>(null);

  const getUserLocation = async () => {
    let location = await Location.getCurrentPositionAsync({});
    const userLocation = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };
    setUserLocation(userLocation);
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    if (destination) {
      traceRoute();
    }
  }, [destination]);

  const moveTo = async (position: LatLng) => {
    const camera = await mapRef.current?.getCamera();
    if (camera) {
      camera.center = position;
      mapRef.current?.animateCamera(camera, { duration: 1000 });
    }
  };

  const edgePaddingValue = 70;

  const edgePadding = {
    top: edgePaddingValue,
    right: edgePaddingValue,
    bottom: edgePaddingValue,
    left: edgePaddingValue,
  };

  const traceRouteOnReady = (args: any) => {
    if (args) {
      // args.distance
      // args.duration
      setDistance(args.distance);
      setDuration(args.duration);
    }
  };

  const traceRoute = () => {
    if (userLocation && destination) {
      setShowDirections(true);
      mapRef.current?.fitToCoordinates([userLocation, destination], {
        edgePadding,
      });
    }
  };

  const onPlaceSelected = (details: GooglePlaceDetail | null) => {
    const position = {
      latitude: details?.geometry.location.lat || 0,
      longitude: details?.geometry.location.lng || 0,
    };
    setDestination(position);
    moveTo(position);
  };
  return (
    <View>
      <View style={styles.container}>
        <MapView
          ref={mapRef}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={INITIAL_POSITION}
          region={userLocation}
          showsUserLocation={true}
          showsMyLocationButton={false}
          customMapStyle={customMapStyle}
        >
          {destination && <Marker coordinate={destination} />}
          {showDirections && userLocation && destination && (
            <MapViewDirections
              origin={userLocation}
              destination={destination}
              apikey={`${GOOGLE_API_KEY}`}
              strokeColor="#6644ff"
              strokeWidth={4}
              onReady={traceRouteOnReady}
            />
          )}
        </MapView>
        <View style={styles.searchContainer}>
          <View className="w-[100%] h-[45px] justify-between rounded-[5px] shadow border-[#EDEDF6] border bg-white mt-[4.5rem] flex-row items-center">
            <View className="flex-row">
              <View className="h-[7px] w-[7px] bg-[#43B05C] rounded-full self-center ml-[15px]"></View>
              <Text className="text-[#343B71] self-center ml-[15px]">|</Text>
              <Text className="text-[#343B71] self-center ml-[15px]">
                Mi dirección actual
              </Text>
            </View>
            <Entypo name="plus" size={24} color="#343B71" className="pr-4" />
          </View>
            <InputAutocomplete
              placeholder="A donde quieres ir?"
              onPlaceSelected={(details) => {
                onPlaceSelected(details);
              }}
            />
          {/* <View className=" h-[45px] flex-row rounded-[5px] shadow border-[#EDEDF6] border bg-white mt-[13px]">
            <View className="h-[7px] w-[7px] bg-[#E41B1B] rounded-full self-center ml-[15px]"></View>
            <Text className="text-[#343B71] self-center ml-[15px]">|</Text>
          </View> */}
        </View>
      </View>
      {distance && duration ? (
        <DriverOptions
          sheetRef={sheetRef}
          timeToDestination={duration}
          distanceToDestination={distance}
        />
      ) : null}
    </View>
  );
};

export default Travel;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  searchContainer: {
    position: "absolute",
    width: "90%",
    top: Constants.statusBarHeight,
  },
});
