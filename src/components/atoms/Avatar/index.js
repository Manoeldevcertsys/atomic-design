import React from "react";
import { Image } from "react-native";

const Avatar = () => {
  return (
    <Image
      style={{ width: 60, height: 60 }}
      source={{ uri: "https://via.placeholder.com/150/771796" }}
    />
  );
};

export default Avatar;
