import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
  Image,
} from "react-native";
import PerfilLogo from "../../assets/hombre 1.svg";
import HomeLogo from "../../assets/Home-logo.svg";
import QrLogo from "../../assets/QR.svg";
import { useNavigate } from "react-router-native";

const Navbar = () => {
  const [activeButton, setActiveButton] = useState("home");
  const navigation = useNavigate();

  return (
    <SafeAreaView style={styles.navbar_container}>
      <TouchableHighlight
        underlayColor="white"
        onPress={() => {
          navigation("/");
          setActiveButton("home");
        }}
      >
        <View
          style={[
            styles.navbar_button,
            {
              bottom: activeButton === "home" ? 25 : 0,
              color: activeButton === "home" ? "white" : "#ffffff",
              backgroundColor: activeButton === "home" ? "#87BE56" : "#fff",
            },
          ]}
        >
          <HomeLogo fill="#000000" />
          <Text>Home</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="white"
        onPress={() => {
          navigation("/qr");
          setActiveButton("qr");
        }}
      >
        <View
          style={[
            styles.navbar_button,
            {
              bottom: activeButton === "qr" ? 25 : 0,
              color: activeButton === "qr" ? "white" : "white",
              backgroundColor: activeButton === "qr" ? "#87BE56" : "#fff",
            },
          ]}
        >
          <QrLogo fill={activeButton === "qr" ? "#000000" : "#ffffff"} />
          <Text>QR</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="white"
        onPress={() => {
          setActiveButton("perfil");
        }}
      >
        <View
          style={[
            styles.navbar_button,
            {
              bottom: activeButton === "perfil" ? 25 : 0,
              color: activeButton === "perfil" ? "#fff" : "#000",
              backgroundColor: activeButton === "perfil" ? "#87BE56" : "#fff",
            },
          ]}
        >
          <PerfilLogo />
          <Text>Perfil</Text>
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbar_container: {
    backgroundColor: "white",
    height: 90,
    flexDirection: "row",
    elevation: 3,
    paddingHorizontal: 25,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navbar_button: {
    width: 90,
    borderColor: "red",
    height: 90,
    marginVertical: 30,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});
