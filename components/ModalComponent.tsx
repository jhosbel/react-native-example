import { View, Text, Modal, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const ModalComponent = ({ isVisible, setIsVisible, children }: any) => {
  return (
    <>
      <Modal visible={isVisible} transparent={true} animationType="slide">
        <View
          //style={style.container}
          //onPress={() => setIsVisible(!setIsVisible)}
          className="flex-1 justify-end items-center"
        >
          <View
            className="bg-white p-8 w-[390px] h-[700px] rounded-t-[10px] gap-4"
            style={style.modalStyle}
          >
            <Button
              title="Cancelar"
              onPress={() => setIsVisible(!setIsVisible)}
            />
            {children}
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ModalComponent;

const style = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalStyle: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
