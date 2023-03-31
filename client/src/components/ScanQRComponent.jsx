import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { StatusBar } from "expo-status-bar";
import { useNavigate } from "react-router-native";

export default function ScanQRComponent() {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (!hasPermission) {
    return (
      <View>
        <Text>Da Permisos a la camara por favor</Text>
        <Button title="Volver Inicio" onPress={() => navigate("/")}>
          Inicio
        </Button>
      </View>
    );
  }

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    console.log(data);
    setHasPermission(!hasPermission);
    alert(`la data del codigo QR es:  ${data} `);
    navigate("/");
  };

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <StatusBar style="auto" />
      <View style={{ bottom: 430, position: "absolute" }}>
        <Text style={styles.top_text}>
          Usa la cámara de tu móvil para escanear el código QR.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    flexDirection: "column",
  },
  scanner: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
  top_text: {
    color: "white",
    fontSize: 25,
    textShadowColor: "grey",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
});
