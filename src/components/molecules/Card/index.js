import React from "react";
import { View } from "react-native";
import Avatar from "../../atoms/Avatar";
import Title from "../../atoms/Title";
import Email from "../../atoms/Email";

const Card = ({ name }) => {
  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginVertical: 10 }}
    >
      <Avatar />
      <View>
        <Title name={name} />
        <Email />
      </View>
    </View>
  );
};

export default Card;
