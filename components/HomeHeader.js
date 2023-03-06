import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";

const HomeHeader = ({ onPress }) => {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigate.navigate("Cart")}>
        <Ionicons
          name="cart-outline"
          style={{ color: "#fc6e3c" }}
          size={27}
          onPress={onPress}
        />
      </TouchableOpacity>
      <View style={styles.containerin}>
        <Text style={{ fontWeight: 700, color: "#fc6e3c" }}>FOOD ORDER</Text>
        <Ionicons
          style={{ color: "#fc6e3c" }}
          name="fast-food-outline"
          size={27}
        />
      </View>

      <TouchableOpacity onPress={() => navigate.navigate("User")}>
        <Ionicons
          style={{ color: "#fc6e3c" }}
          name="person-circle-outline"
          size={27}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 13,
    alignItems: "center",
    backgroundColor: "white",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    marginTop: 5,
    zIndex: 20,
  },
  containerin: {
    flexDirection: "row",
    alignItems: "center",
  },
});
