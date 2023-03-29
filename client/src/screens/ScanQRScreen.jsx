import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Camera, CameraView } from "react-native-vision-camera";

export default function ScanQRScreen() {
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [scannedData, setScannedData] = useState(null);

  useEffect(() => {
    if (isCameraReady) {
      Camera.startScanningQRCodes(({ value }) => {
        console.log("Scanned QR code:", value);
        setScannedData(value);
      });
    }
  }, [isCameraReady]);

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        onCameraReady={() => setIsCameraReady(true)}
        cameraConfig={{ captureQuality: "1080p" }}
      >
        <CameraView style={styles.cameraView} />
      </Camera>
      {scannedData && (
        <View style={styles.overlay}>
          <Text style={styles.scannedData}>{scannedData}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  cameraView: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  scannedData: {
    color: "#fff",
    fontSize: 24,
  },
});
