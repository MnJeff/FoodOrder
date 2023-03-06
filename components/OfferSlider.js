import { View, Text, Image } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import { StyleSheet } from "react-native";

const OfferSlider = () => {
  return (
    <View>
      <View style={styles.offerSlider}>
        <Swiper
          autoplay
          dotColor={"gray"}
          activeDotColor={"#fc6e3c"}
          autoplayTimeout={2}
          showsButtons={true}
        >
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require("../assets/Foodoffer3.jpg")}
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require("../assets/Foodorrer4.jpg")}
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require("../assets/FoodPic1.jpg")}
            />
          </View>
        </Swiper>
      </View>
    </View>
  );
};

export default OfferSlider;

const styles = StyleSheet.create({
  offerSlider: {
    width: "100%",
    height: 200,
    backgroundColor: "white",
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
    alignSelf: "center",
  },
  slide: {
    width: "100%",
    height: 200,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "105%",
    borderRadius: 20,
    resizeMode: "stretch",
  },
});
