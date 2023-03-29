import React from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  View,
  Text,
  Image,
} from "react-native";
import ecliplseTopLogo from "../../assets/Ellipse-172.png";
import ecliplseBotLogo from "../../assets/Ellipse-170.png";
import { styles } from "../styles/loginStyles";
import HalfLogo from "../../assets/HalfSVG.svg";
import LoginComponent from "../components/LoginComponent";

export const LoginScreen = () => {
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "white" }}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <View style={styles.login_container}>
          <View style={styles.login_topLogo}>
            <HalfLogo style={styles.image_logo} />
          </View>
          <Image style={styles.image_eclipseTop} source={ecliplseTopLogo} />
          <Text style={{ fontSize: 20 }}>Inicia Sesion | Register </Text>
          <LoginComponent />
        </View>
        <Image style={styles.image_eclipseBot} source={ecliplseBotLogo} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
