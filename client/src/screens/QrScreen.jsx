import React from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import ScanQRScreen from "./ScanQRScreen";

export const QrScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: "red" }}>
        <Text>Scan the QR code!</Text>
        <ScanQRScreen />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
