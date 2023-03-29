import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Svg, { Image } from "react-native-svg";

const StartBooking = () => {
  return (
    <View style={styles.conteiners}>
      <View>
        <Text style={styles.title}>Empieza a reservar</Text>
        <View style={styles.touchabel}>
          <TouchableOpacity style={styles.button}>
            <View style={styles.text}>
              <View>
                <Text style={styles.eltexto}>01/03/2023</Text>
              </View>
              <View style={styles.separeitor}>
                <Text style={styles.barras}>|</Text>
              </View>
              <View>
                <Text style={styles.eltexto}>1 persona</Text>
              </View>
              <View style={styles.separeitor}>
                <Text style={styles.barras}>|</Text>
              </View>
              <View>
                <Text style={styles.eltexto}>1:00 pm</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Svg >
        <Image
        style={styles.imagesvg}
          href={require("../../assets/calendary.svg")}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiners: {
    flexDirection: "row",
    width: 318.9,
    height: 74.16,
    left: 2,
  },

  button: {
    borderRadius: 5,
    alignItems: "center",
    borderWidth: 1,
    width: 200,
    height: 30,
    left: 27,
    top: 20,
    opacity: 1,
    justifyContent: "space-evenly",
    margin: 0,
    borderWidth: 2, 
    borderColor: '#FFAD3F'
  },

  touchabel: {
    flexDirection: "row",
    opacity: 0.5,
  },

  text: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  eltexto: {
    color: "#BDBDBD",
    fontSize: 12,
    fontWeight: 400,
    alignItems: "center",
    justifyContent: "space-around",
  },

  separeitor: {
    width: 15,
    height: 15,
    alignItems: "center",
    justifyContent: "space-around",
  },

  barras: {
    color: "#FFAD3F",
  },

  title: {
    color: "#FFAD3F",
    width: 209,
    height: 16,
    left: 27,
    fontWeight: 700,
    fontSize: 16,
    lineheight: 36,
    alignItems: "center",
    paddingLeft: 27,
    paddingTop: 5,
  },

  svg:{
    display:"flex",
    width: 100, 
    height: 100,
  },

  imagesvg:{
    display:"flex",
    width:100,
    height:100,
  },
});

export default StartBooking;
