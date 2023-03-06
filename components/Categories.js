import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Categories = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginBottom: 5,
          borderBottomColor: "#fc6e3c",
          borderBottomWidth: 1,
        }}
      >
        <Text style={styles.head}>Categories</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.box}>
          <Ionicons name="pizza-outline" size={24} />
          <Text style={styles.text}>Pizza</Text>
        </View>
        <View style={styles.box}>
          <Ionicons name="fast-food-outline" size={24} />
          <Text style={styles.text}>Pho</Text>
        </View>
        <View style={styles.box}>
          <Ionicons name="beer-outline" size={24} />
          <Text style={styles.text}>Banh My</Text>
        </View>
        <View style={styles.box}>
          <Ionicons name="nutrition-outline" size={24} />
          <Text style={styles.text}>Burger</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Categories;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    justifyContent: "center",
    alignItems: "center",
  },
  head: {
    color: "#fc6e3c",
    fontSize: 23,
    fontWeight: "500",
    margin: 10,
    marginBottom: 1,
    alignSelf: "center",
    paddingBottom: 5,
  },
  box: {
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    margin: 10,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  text: {
    fontWeight: 700,
  },
});
