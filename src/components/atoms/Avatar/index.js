import React from "react";
import { Image } from "react-native";

export const Avatar = ({ uri }) => {
  return (
    <Image
      style={{ width: 60, height: 60, borderRadius: 50 }}
      source={{ uri }}
    />
  );
};

