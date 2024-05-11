import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  Animated,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Polyline,
  LatLng,
} from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import {
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";
import * as Location from "expo-location";
import BottomSheet from "@gorhom/bottom-sheet";
import HomeMapInput from "../../components/HomeMapInput";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import customMapStyle from "./customMapStyle.json";
import { GOOGLE_API_KEY } from "../../env";
import DriverOptions from "../../components/DriverOptions";
import { InputAutocomplete } from "../../components/InputAutocomplete";
import Constants from "expo-constants";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  latitude: 6.167754,
  longitude: -75.619507,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

const Home = () => {
  const [destination, setDestination] = useState<LatLng | null>();
  const [showDirections, setShowDirections] = useState(false);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [userAddress, setUserAddress] = useState("");
  const [text, setText] = useState("");
  const [userLocation, setUserLocation] = useState<any>({
    latitude: 6.167754,
    longitude: -75.619507,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const snapPoints = ["11%", "50%"];
  const sheetRef = useRef<BottomSheet>(null);
  const mapRef = useRef<MapView>(null);

  const requestLocationPermission = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("permiso denegado");
        return false;
      }
      return true;
    } catch (error) {
      setErrorMsg("Error al solicitar permisos");
      return false;
    }
  };

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

  const getReverseGeocoding = async () => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${userLocation.latitude},${userLocation.longitude}&key=${GOOGLE_API_KEY}`
      );
      const data = await response.json();
      if (data.status === "OK") {
        const address = data.results[0].formatted_address;
        const addCut = address.split(",")[0];
        console.log(addCut);
        console.log(address);
        setUserAddress(addCut);
        return address;
      } else {
        throw new Error("Reverse geocoding request failed");
      }
    } catch (error) {
      console.error("Error fetching reverse geocoding:", error);
      return null;
    }
  };

  useEffect(() => {
    requestLocationPermission();
    getUserLocation();
  }, []);

  useEffect(() => {
    getReverseGeocoding();
  }, [userAddress]);

  useEffect(() => {
    if (destination) {
      traceRoute();
    }
  }, [destination]);

  const textHanlder = (text: string) => {
    setText(text);
  };

  console.log(destination);
  console.log(duration);
  console.log(destination);

  return (
    <View style={{ height: "100%" }}>
      <View className="flex-1 items-center">
        <MapView
          ref={mapRef}
          style={style.maps}
          provider={PROVIDER_GOOGLE}
          //initialRegion={INITIAL_POSITION}
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
        <View style={style.searchContainer}>
          <View className="w-[100%] h-[45px] justify-between rounded-[5px] shadow border-[#EDEDF6] border bg-white mt-[4.5rem] flex-row items-center">
            <View className="flex-row">
              <View className="h-[7px] w-[7px] bg-[#43B05C] rounded-full self-center ml-[15px]"></View>
              <Text className="text-[#343B71] self-center ml-[15px]">|</Text>
              <Text className="text-[#343B71] self-center ml-[15px]">
                {userAddress}
              </Text>
            </View>
            {/* <Entypo name="plus" size={24} color="#343B71" className="pr-4" /> */}
          </View>
          <InputAutocomplete
            setIsOpen={setIsOpen}
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
      {isOpen ? (
        <DriverOptions
          sheetRef={sheetRef}
          timeToDestination={duration}
          distanceToDestination={distance}
        />
      ) : null}
    </View>
  );
};

const style = StyleSheet.create({
  maps: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
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
  inputSearch: {
    width: 340,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#545C9B",
    backgroundColor: "#282F62",
    alignSelf: "center",
    paddingLeft: 16,
  },
  searchContainer: {
    position: "absolute",
    width: "90%",
    top: Constants.statusBarHeight,
  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
