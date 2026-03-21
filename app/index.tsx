import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import axios from "axios";
import RandomPlant, { Plant } from "../components/ConsultaDePlantas"; // 👈 importa el tipo

const BASE_URL = "https://pvz-2-api.vercel.app/api";

export default function Perfil() {
  const [plant, setPlant] = useState<Plant | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchRandomPlant = async () => {
    setLoading(true);
    setPlant(null);
    try {
      const listRes = await axios.get<string[]>(`${BASE_URL}/plants`);
      const names = listRes.data;
      const randomName = names[Math.floor(Math.random() * names.length)];
      const plantRes = await axios.get<Plant>(
        `${BASE_URL}/plants/${randomName.toLowerCase()}` // 👈 minúsculas
      );
      setPlant(plantRes.data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>

      <Image
        source={{ uri: "https://i.imgur.com/6VBx3io.png" }}
        style={styles.avatar}
      />

      <Text style={styles.name}>Usuario</Text>
      <Text style={styles.subtitle}>Explorador de Plantas</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={fetchRandomPlant} disabled={loading}>
          <Text style={styles.buttonText}>
            {loading ? "Buscando..." : "Buscar"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Crear QR</Text>
        </TouchableOpacity>
      </View>

      {loading && <ActivityIndicator color="#00C896" size="large" style={{ marginTop: 20 }} />}
      {plant && <RandomPlant plant={plant} />}

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