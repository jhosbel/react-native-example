import { StyleSheet, Text, View } from "react-native";
import {
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "../env";

type InputAutocompleteProps = {
  label?: string;
  placeholder?: string;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  onPlaceSelected: (details: GooglePlaceDetail | null) => void;
};

export function InputAutocomplete({
  label,
  placeholder,
  onPlaceSelected,
  setIsOpen,
}: InputAutocompleteProps) {
  return (
    <>
      <GooglePlacesAutocomplete
        styles={{
          textInput: styles.input,
          predefinedPlacesDescription: styles.placeHolderColor,
        }}
        textInputProps={{
          autoFocus: true
        }}
        placeholder={placeholder || ""}
        fetchDetails
        onPress={(data, details = null) => {
          if(setIsOpen) setIsOpen(true)
          onPlaceSelected(details);
        }}
        query={{
          key: GOOGLE_API_KEY,
          language: "pt-BR",
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 45,
    color: "#343B71",
    fontSize: 13,
    marginTop: 13,
  },
  placeHolderColor: {
    color: "#1faadb",
  },
});
