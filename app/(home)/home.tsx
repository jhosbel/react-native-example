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
import BottomSheet, {
  BottomSheetView,
  BottomSheetTextInput,
} from "@gorhom/bottom-sheet";
import HomeMapInput from "../../components/HomeMapInput";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import customMapStyle from "./customMapStyle.json";
import { GOOGLE_API_KEY } from "../../env";

const INITIAL_REGION = {
  latitude: 6.167754,
  longitude: -75.619507,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

type LatLng = {
  latitude: number;
  longitude: number;
};

type Test = {
  onPLaceSelected: (details: GooglePlaceDetail | null) => void;
};

const Home = () => {
  const sheetRef = useRef<BottomSheet>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
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

  console.log(destination);

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
            Mi dirección actual
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
            console.log(details?.geometry?.location);
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
        {/* <TextInput
          placeholder="Prueba"
          className="w-[340px] h-[30px] rounded-[5px] shadow border-[#EDEDF6] border bg-white mt-8 text-[#343B71]"
        /> */}
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
      {isOpen ? (
        <BottomSheet
          ref={sheetRef}
          snapPoints={["25%", "50%"]}
          backgroundStyle={{ backgroundColor: "#343B71" }}
        >
          <Text className="text-center text-white">Elige tu viaje</Text>
          <View className="flex-row justify-around">
            <Text className="text-white">Tiempo de llegada: {Math.round(timeToDestination)} min</Text>
            <Text className="text-white">Distacina: {distanceToDestination} km</Text>
          </View>
          <View className="gap-[3px]">
            <View className="flex-row items-center w-[390px] h-[50px] bg-[#282F62] justify-around">
              <View>
                <Text className="text-[#7177AB]">Taxi</Text>
                <Text className="text-[#7177AB] text-[8px]">6 min</Text>
              </View>
              <Text className="text-[#7177AB]">$ 10.085 - 13.645</Text>
            </View>
            <View className="flex-row items-center w-[390px] h-[50px] bg-[#282F62] justify-around">
              <View>
                <Text className="text-[#7177AB]">Moto Taxi</Text>
                <Text className="text-[#7177AB] text-[8px]">3 min</Text>
              </View>
              <View className="flex-row items-center gap-[7px]">
                <Text className="text-[#7177AB] bg-white rounded-[25px] w-[40px] h-[25px]">- 500</Text>
                <TextInput placeholder="$ 8.500" className="text-[#7177AB] w-[60px] h-[25px] bg-white rounded-[25px]" placeholderTextColor={'#7177AB'} />
                <Text className="text-[#7177AB] bg-white rounded-[25px] w-[40px] h-[25px]">+ 500</Text>
              </View>
            </View>
            <View className="flex-row items-center w-[390px] h-[50px] bg-[#ffffff] justify-around">
              <View>
                <Text className="text-[#282F62]">Elige el precio</Text>
                <Text className="text-[#282F62] text-[8px]">Negocia el mejor precio</Text>
              </View>
              <View className="flex-row items-center gap-[7px]">
                <Text className="text-[#7177AB] bg-white border-[#545C9B] border rounded-[25px] w-[40px] h-[25px]">- 500</Text>
                <TextInput placeholder="$ 8.500" className="text-[#7177AB] border-[#545C9B] border w-[60px] h-[25px] bg-white rounded-[25px]" placeholderTextColor={'#7177AB'} />
                <Text className="text-[#7177AB] bg-white border-[#545C9B] border rounded-[25px] w-[40px] h-[25px]">+ 500</Text>
              </View>
            </View>
            <View className="flex-row items-center w-[390px] h-[50px] bg-[#282F62] justify-around">
              <View>
                <Text className="text-[#7177AB]">Mudanzas y Acarreos</Text>
                <Text className="text-[#7177AB] text-[8px]">Negocia el mejor precio para tu mudanza</Text>
              </View>
              <View className="flex-row items-center gap-[7px]">
                <Text className="text-[#7177AB] bg-white rounded-[25px] w-[40px] h-[25px]">- 500</Text>
                <TextInput placeholder="$ 8.500" className="text-[#7177AB] w-[60px] h-[25px] bg-white rounded-[25px]" placeholderTextColor={'#7177AB'} />
                <Text className="text-[#7177AB] bg-white rounded-[25px] w-[40px] h-[25px]">+ 500</Text>
              </View>
            </View>
          </View>
        </BottomSheet>
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
