import React from "react";
import { Title } from "./styles";

export const MyText = ({ title, size, color, bold }) => {
  return (
    <Title size={size} color={color} bold>
      {title}
    </Title>
  );
};
