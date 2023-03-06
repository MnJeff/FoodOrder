import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const Button = ({ width, name, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#fc6e3c",
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        textAlign: "center",
        width: width,
        margin: 5,
      }}
    >
      <Text
        style={{
          backgroundColor: "#fc6e3c",
          fontSize: 20,
          borderRadius: 10,
          textAlign: "center",
          color: "white",
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
