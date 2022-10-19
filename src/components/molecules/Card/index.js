import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Avatar, Title, MyText, Email } from "../../atoms";

const Card = ({ name, email, avatar }) => {
  return (
    <TouchableOpacity
      style={{
        width: "100%",
        height: 80,
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
        paddingHorizontal: 8,
        backgroundColor: "rgba(128,128,128, 0.2)",
        borderRadius: 4,
      }}
    >
      <Avatar uri={avatar} />
      <View
        style={{
          marginHorizontal: 10,
        }}
      >
        <MyText size={18} color="black" bold="bold" title={name} />
        <MyText size={12} color="gray" title={email} />
      </View>
    </TouchableOpacity>
  );
};

export default Card;
