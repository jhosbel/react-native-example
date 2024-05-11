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
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from "react-native-maps";
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

const INITIAL_REGION = {
  latitude: 6.167754,
  longitude: -75.619507,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const Home = () => {
  const sheetRef = useRef<BottomSheet>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const snapPoints = ["11%", "50%"];
  const mapRef = useRef<MapView>(null);

  const [timeToDestination, setTimeToDestination] = useState<any>();
  const [distanceToDestination, setDistanceToDestination] = useState<any>();

  const [mapRegion, setMapRegion] = useState({
    latitude: 6.167754,
    longitude: -75.619507,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [destination, setDestination] = useState<any>({
    latitude: 6.167572646861407,
    longitude: -75.62527812955533,
  });
  const [destination2, setDestinatio2] = useState<any>({
    latitude: 6.167572646861407,
    longitude: -75.62527812955533,
  });
  const [errorMsg, setErrorMsg] = useState("");

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
    console.log(location);
    const newRegion = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };
    setMapRegion(newRegion);
  };

  const getReverseGeocoding = async () => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${mapRegion.latitude},${mapRegion.longitude}&key=${GOOGLE_API_KEY}`
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

  const textHanlder = (text: string) => {
    setText(text);
  };

  console.log(destination);
  console.log(timeToDestination);
  console.log(distanceToDestination);

  return (
    <View style={{ height: "100%" }}>
      <View className="flex-1 items-center">
        <MapView
          ref={mapRef}
          style={style.maps}
          provider={PROVIDER_GOOGLE}
          initialRegion={INITIAL_REGION}
          region={mapRegion}
          showsUserLocation={true}
          showsMyLocationButton={true}
          customMapStyle={customMapStyle}
          mapPadding={{ bottom: 300, left: 0, right: 0, top: 300 }}
        >
          <Marker coordinate={mapRegion} />
          {/* <Marker
            coordinate={destination}
            draggable
            onDragEnd={(newDestination) =>
              setDestination(newDestination.nativeEvent.coordinate)
            }
          /> */}
          {destination && (
            <Marker
              coordinate={destination}
              draggable
              onDragEnd={(newDestination) =>
                setDestination(newDestination.nativeEvent.coordinate)
              }
            />
          )}
          {destination && (
            <MapViewDirections
              origin={mapRegion}
              //waypoints={[destination]}
              destination={destination}
              mode="DRIVING"
              apikey={`${GOOGLE_API_KEY}`}
              strokeColor="white"
              strokeWidth={2}
              onReady={(result) => {
                setTimeToDestination(result.duration);
                console.log(result.distance);
                setDistanceToDestination(result.distance);
                console.log(result.duration);
              }}
            />
          )}
        </MapView>
        <View className="w-[340px] h-[30px] rounded-[5px] shadow border-[#EDEDF6] border bg-white mt-[4.5rem] flex-row">
          <View className="h-[7px] w-[7px] bg-[#43B05C] rounded-full self-center ml-[15px]"></View>
          <Text className="text-[#343B71] self-center ml-[15px]">|</Text>
          <Text className="text-[#343B71] self-center ml-[15px]">
            {userAddress}
          </Text>
          <Entypo name="plus" size={24} color="#343B71" />
        </View>
        {/* <View className="w-[340px] h-[30px] rounded-[5px] shadow border-[#EDEDF6] border bg-white mt-8 flex-row">
            <Text className="text-[#343B71] self-center ml-[15px]">{text}</Text>
            <Ionicons name="remove" size={24} color="#343B71" />
          </View> */}
        <GooglePlacesAutocomplete
          placeholder="A donde quieres ir?"
          fetchDetails={true}
          onPress={(data, details = null) => {
            console.log(details?.adr_address);
            console.log(data.description);
            setIsOpen(true);
            setDestination({
              latitude: details?.geometry?.location.lat,
              longitude: details?.geometry?.location.lng,
            });
          }}
          query={{
            key: GOOGLE_API_KEY,
            language: "en",
          }}
          styles={{
            textInputContainer: {
              width: 340,
              marginTop: 11,
            },
            textInput: {
              height: 30,
              color: "#343B71",
              fontSize: 13,
            },
            predefinedPlacesDescription: {
              color: "#1faadb",
            },
          }}
        />
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
          timeToDestination={timeToDestination}
          distanceToDestination={distanceToDestination}
        />
      ) : null}
    </View>
  );
};

const style = StyleSheet.create({
  maps: {
    ...StyleSheet.absoluteFillObject,
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
});

export default Home;
