import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export type Plant = Record<string, string>;

type Props = {
  plant: Plant;
};

// Busca el valor de un campo ignorando mayúsculas
function getField(plant: Plant, keyword: string): string {
  const key = Object.keys(plant).find(k =>
    k.toLowerCase().includes(keyword.toLowerCase())
  );
  return key ? plant[key] : "N/A";
}

const BASE_IMAGE_URL = "https://pvz-2-api.vercel.app";

export default function RandomPlant({ plant }: Props) {
  return (
    <View style={styles.card}>
      {plant.image && (
        <Image
          source={{ uri: `${BASE_IMAGE_URL}${plant.image}` }}
          style={styles.image}
          resizeMode="contain"
        />
      )}
      <Text style={styles.name}>{plant.name}</Text>

      <View style={styles.row}>
        <Text style={styles.label}>☀️ Costo de sol:</Text>
        <Text style={styles.value}>{getField(plant, "cost")}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>⏱ Recarga:</Text>
        <Text style={styles.value}>{getField(plant, "recharge")}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>🌿 Familia:</Text>
        <Text style={styles.value}>{getField(plant, "family")}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    marginBottom: 12,
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
    minWidth: 110,
  },
  value: {
    color: "white",
    fontSize: 14,
    flex: 1,
  },
});