import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CameraView, BarcodeScanningResult } from 'expo-camera';

export default function QRScanner() {
  const [scanned, setScanned] = useState(false);
  const [qrData, setQrData] = useState("");

  const handleBarCodeScanned = ({ data }: BarcodeScanningResult) => {
    setScanned(true);
    setQrData(data);
  };

  return (
    <View style={styles.container}>
      <CameraView
        style={StyleSheet.absoluteFillObject}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
      />

      {qrData !== "" && (
        <View style={styles.overlay}>
          <Text style={styles.text}>Contenido del QR:</Text>
          <Text style={styles.text}>{qrData}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  overlay: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
    backgroundColor: "#000000aa",
    padding: 20,
    borderRadius: 10
  },
  text: { color: "white" }
});