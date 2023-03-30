import {
  View,
  SafeAreaView,
  Image,
  Dimensions,
  Alert,
  StyleSheet,
} from "react-native";
import React, { useState, useEffect } from "react";
import QrImage from "../../assets/qrscreenpng.png";
import { useNavigate } from "react-router-native";
import TitlePageLocation from "../components/TitlePageLocation";
import ScanQRComponent from "../components/ScanQRComponent.jsx";

export function QrScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    Alert.alert("Debes Activar Tu camara?", "Das Permisos para Activar?", [
      { text: "Si", onPress: () => setHasPermission(true) },
      { text: "No", onPress: () => navigate("/"), style: "cancel" },
    ]);
  }, []);

  return (
    <SafeAreaView style={styles.container_Qr}>
      <TitlePageLocation />
      <View style={{ height: Dimensions.get("window").height / 1.2 }}>
        <Image source={QrImage} style={styles.image} />
        {hasPermission && (
          <View style={styles.container_scanQr}>
            <ScanQRComponent style={{ height: "100%" }} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container_Qr: {
    backgroundColor: "white",
    textAlign: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
  },

  container_scanQr: {
    position: "absolute",
    top: 220,
    marginHorizontal: 60,
    width: Dimensions.get("window").width / 1.4,
    height: Dimensions.get("window").height / 2.2,
  },
});
