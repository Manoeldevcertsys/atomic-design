import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Card from "./src/components/molecules/Card";

export default function App() {
  const people = [
    {
      name: "Iris Pessoa",
      email: "iris@mail.com",
      avatar: "https://via.placeholder.com/150/000000/FFFFFF/?text=IP",
    },
    {
      name: "Andreza Pessoa",
      email: "andreza@mail.com",
      avatar: "https://via.placeholder.com/150/0000FF/FFFFFF/?text=AP",
    },
  ];
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {people.map((person, index) => (
        <Card
          key={index}
          name={person.name}
          email={person.email}
          avatar={person.avatar}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 28,
  },
});
