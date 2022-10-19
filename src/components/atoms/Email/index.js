import React from "react";
import { Text, StyleSheet } from "react-native";

export const Email = ({ email }) => {
  return <Text style={styles.Text}>{email}</Text>;
};

const styles = StyleSheet.create({
  Text: {
    fontSize: 14,
    color: "gray",
  },
});