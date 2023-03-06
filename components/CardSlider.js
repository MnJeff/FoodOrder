import { View, Text } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CardSlider = ({ title, data, onPress }) => {
  function itemHandler() {}
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.cardouthead}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.cardsout}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Detail", {
                data: item,
              })
            }
            style={styles.card}
          >
            <View style={styles.s1}>
              <Image
                style={styles.cardimgin}
                source={{ uri: item.FoodImage }}
              />
            </View>

            <View style={styles.s2}>
              <Text style={styles.txt1}>{item.FoodName}</Text>
              <View style={styles.s2in}>
                <Text style={styles.txt2}>{item.FoodPrice}VND</Text>
              </View>
            </View>

            <View style={styles.s3}>
              <View style={styles.buybtn}>
                <Text
                  style={{
                    backgroundColor: "#fc6e3c",
                    fontSize: 20,
                    borderRadius: 10,
                    width: "90%",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  Mua
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CardSlider;

const styles = StyleSheet.create({
  container: {
    marginVertical: 1,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
  cardouthead: {
    width: "90%",
    fontSize: 25,
    fontWeight: 300,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  cardsout: {
    width: "100%",
  },
  card: {
    width: 300,
    height: 300,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
  s1: {},
  s2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardimgin: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  txt1: {
    fontSize: 18,
    marginHorizontal: 10,
    width: 150,
  },
  s2in: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  txt2: {
    fontSize: 20,
    marginRight: 10,
  },
  s3: {
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    width: "100%",
  },
  buybtn: {
    backgroundColor: "#fc6e3c",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    width: "90%",
    textAlign: "center",
  },
});
