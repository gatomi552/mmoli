import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  StyleSheet,
} from "react-native";
import axios from "axios";

const BASE_URL = "https://pvz-2-api.vercel.app/api";

type Plant = {
  name: string;
  description: string;
  image: string;
  cost: string;
  special: string;
  weakness: string;
  range: string;
};

export default function RandomPlant() {
  const [plant, setPlant] = useState<Plant | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchRandomPlant = async () => {
    setLoading(true);
    setError("");
    setPlant(null);

    try {
      // 1. Obtener lista de nombres
      const listRes = await axios.get<string[]>(`${BASE_URL}/plants`);
      const names = listRes.data;

      // 2. Elegir uno al azar
      const randomName = names[Math.floor(Math.random() * names.length)];

      // 3. Obtener detalle de esa planta
      const plantRes = await axios.get<Plant>(`${BASE_URL}/plants/${randomName}`);
      setPlant(plantRes.data);

    } catch (e) {
      setError("No se pudo cargar la planta. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={fetchRandomPlant} disabled={loading}>
        <Text style={styles.buttonText}>
          {loading ? "Cargando..." : "🌱 Planta Aleatoria"}
        </Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator color="#00FFAA" size="large" style={{ marginTop: 20 }} />}

      {error !== "" && <Text style={styles.error}>{error}</Text>}

      {plant && (
        <View style={styles.card}>
          {plant.image && (
            <Image source={{ uri: plant.image }} style={styles.image} resizeMode="contain" />
          )}
          <Text style={styles.name}>{plant.name}</Text>
          <Text style={styles.description}>{plant.description}</Text>

          <View style={styles.row}>
            <Text style={styles.label}>💰 Costo:</Text>
            <Text style={styles.value}>{plant.cost}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>⚡ Especial:</Text>
            <Text style={styles.value}>{plant.special}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>🎯 Rango:</Text>
            <Text style={styles.value}>{plant.range}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>💀 Debilidad:</Text>
            <Text style={styles.value}>{plant.weakness}</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#0a0a0a",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#00FFAA",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 12,
    marginTop: 20,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
  error: {
    color: "#ff4444",
    marginTop: 20,
    textAlign: "center",
  },
  card: {
    marginTop: 24,
    backgroundColor: "#111",
    borderRadius: 16,
    padding: 20,
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 12,
  },
  name: {
    fontSize: 22,
    color: "#00FFAA",
    fontWeight: "bold",
    textTransform: "capitalize",
    marginBottom: 8,
  },
  description: {
    color: "#ccc",
    textAlign: "center",
    marginBottom: 16,
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 6,
    width: "100%",
  },
  label: {
    color: "#aaa",
    fontSize: 14,
    fontWeight: "bold",
    minWidth: 90,
  },
  value: {
    color: "white",
    fontSize: 14,
    flex: 1,
  },
});