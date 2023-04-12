import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ImageRestaurant from "../../assets/ImageRestaurant.svg";
import Discount from "../../assets/Discount.svg";
import HeartLike from "../../assets/HeartLike.svg";
import Stars from "../../assets/stars.svg";

const MiniatureRestaurant = () => {
  return (
    <View style={styles.container}>
      <HeartLike style={styles.heart} />
      <ImageRestaurant style={styles.imagerestaurant} />
      <View style={styles.container2}>
        <Discount style={styles.discount} />
        <View style={styles.nameCheck}>
          <Text style={styles.nameRestaurant}></Text>
        </View>
        <Stars />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 318,
    height: 160,
    left: 5,
    top: 5,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  container2: {
    top: 50,
  },
  heart: {
    position: "absolute",
  },
  nameRestaurant: {
    width: 112,
    height: 19,
    left: 44,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 20,
    lineHeight: 23,
  },
  imagerestaurant: {
    position: "absolute",
  },
});

export default MiniatureRestaurant;
