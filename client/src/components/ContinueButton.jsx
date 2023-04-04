import { Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigate } from "react-router-native";

import React from "react";

export default function ContinueButton({ to }) {
  const navigate = useNavigate();
  const continueButtonOnPress = () => {
    navigate(to);
  };
  return (
    <TouchableOpacity style={styles.button} onPress={continueButtonOnPress}>
      <Text style={styles.textButton}>Continuar {">"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    zIndex: 1,
    backgroundColor: "#FFAD3F",
    bottom: 150,
    left: 100,
    width: wp("50.00%"),
    height: hp("6.00%"),
    borderRadius: 7,
  },
  textButton: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 25,
    color: "#FFFFFF",
    fontWeight: "bold",
    paddingTop: 9,
  },
});
