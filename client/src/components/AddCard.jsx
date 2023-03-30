import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

const AddCard = () => {
  return (
    <View style={styles.conteiner}>
      <TouchableOpacity>
        <Text style={styles.text}>Agregar tarjeta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    fontFamily: fonts.poppins.regular,
    marginTop: 30,
    marginLeft: 25,
    backgroundColor: "#FFC107",
    width: 270,
    height: 45,
    textAlign: "center",
    left: 27,
    right: 28,
    borderRadius: 5,
    shadowColor: "#000000",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.2,
  },
  text: {
    color: "#ffff",
    width: 128,
    height: 24,
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    marginTop: 7,
    fontWeight: "bold",
  },
});

export default AddCard;
