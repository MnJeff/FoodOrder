import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";

const Goback = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{
        justifyContent: "center",
        position: "absolute",
        marginTop: 40,
        zIndex: 20,
        backgroundColor: "#fc6e3c",
        borderRadius: 5,
        padding: 8,
        right: 3,
      }}
    >
      <Ionicons name="close-outline" color={"white"} size={25} />
    </TouchableOpacity>
  );
};

export default Goback;
