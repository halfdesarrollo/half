import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Button,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import EclipseBot from "../../assets/green-bottom-ellipse.svg";
import HalfLogo from "../../assets/HalfSVG.svg";
// import LoginComponent from "../components/LoginComponent";
import RegsiterForm from "../components/RegisterForm";

import WelcomeElipse from "../../assets/orange-top-ellipse.svg";
import ElipseHalf1 from "../../assets/elipseHalf1.svg";
import ElipseHalf2 from "../../assets/elipseHalf2.svg";
import LoginComponent from "../components/LoginComponent";
import BotElipse from "../../assets/welcome-ellipse.svg";

export const LoginScreen = () => {
  const [login, setLogin] = useState(false);
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "white" }}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <WelcomeElipse
          style={{
            position: "absolute",
            marginHorizontal: -3,
            marginVertical: 15,
            width: 400,
            height: 200,
            top: -110,
            zIndex: 1,
            top: -184,
          }}
        />

        <View style={styles.login_container}>
          <View style={styles.login_topLogo}>
            <HalfLogo style={styles.image_logo} />
            <ElipseHalf1
              style={{
                position: "absolute",
                width: 480,
                height: 373,
                left: -93,
                top: -144,
              }}
            />
            <ElipseHalf2
              style={{
                position: "absolute",
                width: 480,
                height: 373,
                left: -93,
                top: -154,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <TouchableHighlight onPress={() => setLogin(true)}>
              <Text>Registrate</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => setLogin(false)}>
              <Text>Inicia Sesion</Text>
            </TouchableHighlight>
          </View>
          {login ? <RegsiterForm /> : <LoginComponent />}
        </View>

        <BotElipse
          style={{
            zIndex: -1,
            position: "absolute",
            bottom: -520,
            with: 300,
          }}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  login_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  login_topLogo: {
    backgroundColor: "white",
    height: "25%",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    top: -40,
  },
  image_logo: {
    width: 290,
    height: 100,
    top: -6,
    resizeMode: "contain",
  },
  image_eclipseTop: {
    backgroundColor: "#FFAD3F",
    position: "absolute",
    top: 170,
    borderRadius: 100,

    width: wp("100.00%"),
    height: hp("10.00%"),
    position: "absolute",
  },
  image_eclipseBot: {
    backgroundColor: "#87BE56",
    position: "absolute",
    bottom: -60,
    right: -55,
    width: 500,
    height: 300,
    borderRadius: 100,
  },

  inputs_container: {
    height: Dimensions.get("window").height / 2.5,
    backgroundColor: "white",
    width: 350,
    borderTopColor: "#A4A4A4",
    borderTopWidth: 1,
  },
  button: {
    backgroundColor: "#87BE56",
    width: "100%",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },

  inputs: {
    borderWidth: 1,
    borderColor: "#A4A4A4",
    marginHorizontal: 1,
    marginVertical: 20,
    paddingVertical: 10,
    backgroundColor: "white",
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  socialMedia_container: {
    display: "flex",
    alignItems: "center",
    paddingHorizontal: 20,
    marginHorizontal: 50,
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
    width: "70%",
    bottom: -60,
  },

  socialMedia_logo: {
    resizeMode: "contain",
    width: 60,
    height: 60,
    margin: 10,
  },
});
