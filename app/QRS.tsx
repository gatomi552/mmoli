import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { CameraView, BarcodeScanningResult, useCameraPermissions } from "expo-camera";
import { QRContext } from "../components/QRProvider";
import { useContext } from "react";

export default function QRScanner() {
  const [scanned, setScanned] = useState(false);
  const { qrData, setQrData } = useContext(QRContext);
  const [permission, requestPermission] = useCameraPermissions();

  const handleBarCodeScanned = ({ data }: BarcodeScanningResult) => {
    setScanned(true);
    setQrData(data);
  };

  const scanAgain = () => {
    setQrData("");
    setScanned(false);
  };

  // Permiso aún cargando
  if (!permission) {
    return <View style={styles.container} />;
  }

  // Permiso denegado o no otorgado
  if (!permission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>
          Se necesita acceso a la cámara para escanear QR
        </Text>
        <TouchableOpacity style={styles.button} onPress={requestPermission}>
          <Text style={styles.buttonText}>Dar permiso</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      
      {/* Camara */}
      <CameraView
        style={StyleSheet.absoluteFillObject}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
      />

      {/* Marco de escaneo */}
      {!scanned && (
        <View style={styles.scanFrame}>
          <Text style={styles.scanText}>Escanea un QR</Text>
        </View>
      )}

      {/* Resultado */}
      {qrData !== "" && (
        <View style={styles.resultCard}>
          <Text style={styles.title}>QR Detectado</Text>
          <Text style={styles.label}>Contenido:</Text>
          <Text style={styles.data}>{qrData}</Text>
          <TouchableOpacity style={styles.button} onPress={scanAgain}>
            <Text style={styles.buttonText}>Escanear Otro</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "black"
  },

  // --- Nuevo ---
  permissionContainer: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },

  permissionText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20
  },
  // -------------

  scanFrame: {
    position: "absolute",
    top: "40%",
    alignSelf: "center",
    borderWidth: 3,
    borderColor: "#00FFAA",
    width: 250,
    height: 250,
    justifyContent: "center",
    alignItems: "center"
  },

  scanText: {
    color: "white",
    position: "absolute",
    top: -40,
    fontSize: 18,
    fontWeight: "bold"
  },

  resultCard: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    width: "85%",
    backgroundColor: "#111",
    padding: 20,
    borderRadius: 15,
    alignItems: "center"
  },

  title: {
    fontSize: 22,
    color: "#00FFAA",
    fontWeight: "bold",
    marginBottom: 10
  },

  label: {
    color: "#aaa",
    fontSize: 16
  },

  data: {
    color: "white",
    fontSize: 18,
    marginVertical: 10,
    textAlign: "center"
  },

  button: {
    backgroundColor: "#00FFAA",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10
  },

  buttonText: {
    color: "black",
    fontWeight: "bold"
  }

});