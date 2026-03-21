import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Perfil() {
  return (
    <View style={styles.container}>

      {/* FOTO DE PERFIL */}
      <Image
        source={{ uri: "https://i.imgur.com/6VBx3io.png" }}
        style={styles.avatar}
      />

      {/* NOMBRE */}
      <Text style={styles.name}>Usuario</Text>
      <Text style={styles.subtitle}>Explorador de Plantas</Text>

      {/* BOTONES */}
      <View style={styles.buttonContainer}>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Crear QR</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#101010",
    alignItems: "center",
    justifyContent: "center",
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15
  },

  name: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold"
  },

  subtitle: {
    color: "#aaa",
    marginBottom: 40
  },

  buttonContainer: {
    width: "80%"
  },

  button: {
    backgroundColor: "#00C896",
    padding: 15,
    borderRadius: 12,
    marginVertical: 10,
    alignItems: "center"
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  }

});