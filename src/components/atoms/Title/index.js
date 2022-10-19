import React from "react";
import { Text, StyleSheet } from "react-native";

export const Title = ({ name }) => {
  return <Text style={styles.Text}>{name}</Text>;
};

const styles = StyleSheet.create({
  Text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});