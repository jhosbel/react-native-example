import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
  Modal,
  Image,
} from "react-native";
import React, { useState } from "react";
import BottomSheet, {
  BottomSheetView,
  BottomSheetTextInput,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import ModalComponent from "./ModalComponent";

const DriverOptions = ({
  sheetRef,
  timeToDestination,
  distanceToDestination,
}: any) => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const ModalPersonal = () => (
    <Modal
      visible={isVisible}
      animationType="slide"
      onRequestClose={() => setIsVisible(false)}
      transparent={true}
      style={{
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        alignSelf: "center",
      }}
    >
      <View className="bg-[#ffffff] h-[300px] justify-center items-center">
        <Text>This is a Modal</Text>
        <Button title="Close Modal" onPress={() => setIsVisible(false)} />
      </View>
    </Modal>
  );

  const handlePress = (buttonName: any) => {
    setSelectedButton(buttonName);
  };

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={["25%", "60%"]}
      backgroundStyle={{ backgroundColor: "#343B71" }}
    >
      <BottomSheetScrollView>
        <View className="justify-center items-center gap-4">
          <Text className="text-center text-white">Elige tu viaje</Text>
          <View className="flex-row gap-16">
            <Text className="text-white">
              Tiempo de llegada: {Math.ceil(timeToDestination)} min
            </Text>
            <Text className="text-white">
              Distacina: {distanceToDestination.toFixed(2)} km
            </Text>
          </View>
          <View className="gap-[3px]">
            <TouchableOpacity
              onPress={() => handlePress("button1")}
              style={[
                style.optionSelect,
                selectedButton === "button1" && style.selectedButton,
              ]}
            >
              <View className="flex-1 pl-4">
                <Text
                  style={selectedButton === "button1" && style.selectTextColor}
                  className="text-[#7177AB]"
                >
                  Taxi
                </Text>
                <Text
                  style={selectedButton === "button1" && style.selectTextColor}
                  className="text-[#7177AB] text-[8px]"
                >
                  {Math.ceil(timeToDestination)} min
                </Text>
              </View>
              <View className="flex-1">
                <Text
                  style={selectedButton === "button1" && style.selectTextColor}
                  className="text-[#7177AB]"
                >
                  $ 10.085 - 13.645
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handlePress("button2")}
              style={[
                style.optionSelect,
                selectedButton === "button2" && style.selectedButton,
              ]}
            >
              <View className="flex-1 pl-4">
                <Text
                  style={[
                    selectedButton === "button2" && style.selectTextColor,
                  ]}
                  className="text-[#7177AB]"
                >
                  Moto Taxi
                </Text>
                <Text
                  style={[
                    selectedButton === "button2" && style.selectTextColor,
                  ]}
                  className="text-[#7177AB] text-[8px]"
                >
                  {Math.ceil(timeToDestination)} min
                </Text>
              </View>
              <View className="flex-row items-center gap-[7px] flex-1">
                <View
                  className={`${
                    selectedButton === "button2"
                      ? "bg-white border border-[#545C9B] rounded-[25px] w-[40px] h-[25px] justify-center items-center"
                      : "bg-white rounded-[25px] w-[40px] h-[25px] justify-center items-center"
                  }`}
                >
                  <Text
                    className={`${
                      selectedButton === "button2"
                        ? "text-[#282F62] font-bold"
                        : "text-[#7177AB]"
                    }`}
                  >
                    -500
                  </Text>
                </View>
                <View>
                  <TextInput
                    keyboardType="numeric"
                    editable={selectedButton === "button2" ? true : false}
                    placeholder="$8.500"
                    className={`${
                      selectedButton === "button2"
                        ? "text-[#282F62] font-bold"
                        : "text-[#7177AB]"
                    } w-[60px] h-[25px] bg-white rounded-[25px] pl-2`}
                    placeholderTextColor={
                      selectedButton === "button2" ? "#282F62" : "#7177AB"
                    }
                    style={[
                      selectedButton === "button2" && style.borderRounded,
                    ]}
                  />
                </View>
                <View
                  className={`${
                    selectedButton === "button2"
                      ? "bg-white border border-[#545C9B] rounded-[25px] w-[40px] h-[25px] justify-center items-center"
                      : "bg-white rounded-[25px] w-[40px] h-[25px] justify-center items-center"
                  }`}
                >
                  <Text
                    className={`${
                      selectedButton === "button2"
                        ? "text-[#282F62] font-bold"
                        : "text-[#7177AB]"
                    }`}
                  >
                    +500
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handlePress("button3")}
              style={[
                style.optionSelect,
                selectedButton === "button3" && style.selectedButton,
              ]}
            >
              <View className="flex-1 pl-4">
                <Text
                  style={[
                    selectedButton === "button3" && style.selectTextColor,
                  ]}
                  className="text-[#7177AB]"
                >
                  Elige el precio
                </Text>
                <Text
                  style={[
                    selectedButton === "button3" && style.selectTextColor,
                  ]}
                  className="text-[#7177AB] text-[8px]"
                >
                  Negocia el mejor precio
                </Text>
              </View>
              <View className="flex-row items-center gap-[7px] flex-1">
                <View
                  className={`${
                    selectedButton === "button3"
                      ? "bg-white border border-[#545C9B] rounded-[25px] w-[40px] h-[25px] justify-center items-center"
                      : "bg-white rounded-[25px] w-[40px] h-[25px] justify-center items-center"
                  }`}
                >
                  <Text
                    className={`${
                      selectedButton === "button3"
                        ? "text-[#282F62] font-bold"
                        : "text-[#7177AB]"
                    }`}
                  >
                    -500
                  </Text>
                </View>
                <View>
                  <TextInput
                    keyboardType="numeric"
                    editable={selectedButton === "button3" ? true : false}
                    placeholder="$8.500"
                    className={`${
                      selectedButton === "button3"
                        ? "text-[#282F62] font-bold"
                        : "text-[#7177AB]"
                    } w-[60px] h-[25px] bg-white rounded-[25px] pl-2`}
                    placeholderTextColor={
                      selectedButton === "button3" ? "#282F62" : "#7177AB"
                    }
                    style={[
                      selectedButton === "button3" && style.borderRounded,
                    ]}
                  />
                </View>
                <View
                  className={`${
                    selectedButton === "button3"
                      ? "bg-white border border-[#545C9B] rounded-[25px] w-[40px] h-[25px] justify-center items-center"
                      : "bg-white rounded-[25px] w-[40px] h-[25px] justify-center items-center"
                  }`}
                >
                  <Text
                    className={`${
                      selectedButton === "button3"
                        ? "text-[#282F62] font-bold"
                        : "text-[#7177AB]"
                    }`}
                  >
                    +500
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handlePress("button4")}
              style={[
                style.optionSelect,
                selectedButton === "button4" && style.selectedButton,
              ]}
            >
              <View className="flex-1 pl-4">
                <Text
                  style={[
                    selectedButton === "button4" && style.selectTextColor,
                  ]}
                  className="text-[#7177AB]"
                >
                  Mudanzas y Acarreos
                </Text>
                <Text
                  style={[
                    selectedButton === "button4" && style.selectTextColor,
                  ]}
                  className="text-[#7177AB] text-[8px]"
                >
                  Negocia el mejor precio para tu mudanza
                </Text>
              </View>
              <View className="flex-row items-center gap-[7px] flex-1">
                <View
                  className={`${
                    selectedButton === "button4"
                      ? "bg-white border border-[#545C9B] rounded-[25px] w-[40px] h-[25px] justify-center items-center"
                      : "bg-white rounded-[25px] w-[40px] h-[25px] justify-center items-center"
                  }`}
                >
                  <Text
                    className={`${
                      selectedButton === "button4"
                        ? "text-[#282F62] font-bold"
                        : "text-[#7177AB]"
                    }`}
                  >
                    -500
                  </Text>
                </View>
                <View>
                  <TextInput
                    keyboardType="numeric"
                    editable={selectedButton === "button4" ? true : false}
                    placeholder="$8.500"
                    className={`${
                      selectedButton === "button4"
                        ? "text-[#282F62] font-bold"
                        : "text-[#7177AB]"
                    } w-[60px] h-[25px] bg-white rounded-[25px] pl-2`}
                    placeholderTextColor={
                      selectedButton === "button4" ? "#282F62" : "#7177AB"
                    }
                    style={[
                      selectedButton === "button4" && style.borderRounded,
                    ]}
                  />
                </View>
                <View
                  className={`${
                    selectedButton === "button4"
                      ? "bg-white border border-[#545C9B] rounded-[25px] w-[40px] h-[25px] justify-center items-center"
                      : "bg-white rounded-[25px] w-[40px] h-[25px] justify-center items-center"
                  }`}
                >
                  <Text
                    className={`${
                      selectedButton === "button4"
                        ? "text-[#282F62] font-bold"
                        : "text-[#7177AB]"
                    }`}
                  >
                    +500
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View className="flex-row w-full justify-around">
            <Text className="text-white text-[10px]">****7070</Text>
            <Text className="text-white text-[10px]">
              Añadir método de pago
            </Text>
          </View>
          <View className="w-[360px] h-[45px] bg-white rounded-[10px] justify-center items-center">
            <Text
              onPress={() => setIsVisible(true)}
              className="text-[#343B71] text-[20px] font-semibold"
            >
              Confirmar
            </Text>
          </View>
          <View className="w-[360px] h-[45px] bg-white rounded-[10px] justify-center items-center mb-4">
            <Text className="text-[#343B71] text-[20px] font-semibold">
              Cancelar
            </Text>
          </View>
        </View>
      </BottomSheetScrollView>
      <ModalComponent isVisible={isVisible} setIsVisible={setIsVisible}>
        <View
          style={style.shadow}
          className="w-[335px] bg-[#343B71] justify-around items-center flex-row py-2"
        >
          <View className="flex-row items-center gap-3">
            <View>
              <Image
                className="rounded-full object-fill"
                source={require("../assets/avatar-8.jpg")}
                style={{
                  width: 45,
                  height: 45,
                  alignSelf: "center",
                }}
              />
            </View>
            <View>
              <Text className="text-white text-[13px]">Alex Martin</Text>
              <Text className="text-white text-[13px]">4.4</Text>
              <Text className="text-white text-[13px]">Nissan Sentra</Text>
              <Text className="text-white text-[13px]">
                AAA 123 - BOGOTA DC
              </Text>
            </View>
          </View>
          <View className="justify-center items-center">
            <View className="w-[100px] h-[25px] rounded-[10px] bg-white justify-center items-center ">
              <Text>Contactar</Text>
            </View>
          </View>
        </View>
      </ModalComponent>
    </BottomSheet>
  );
};

export default DriverOptions;

const style = StyleSheet.create({
  optionSelect: {
    width: 390,
    height: 50,
    backgroundColor: "#282F62",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  selectedButton: {
    backgroundColor: "white",
  },
  selectTextColor: {
    color: "#282F62",
    fontWeight: "600",
  },
  borderRounded: {
    borderWidth: 1,
    borderColor: "#545C9B",
  },
  shadow: {
    elevation: 10,
  },
});
