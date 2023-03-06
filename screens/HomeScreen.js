import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import HomeHeader from "../components/HomeHeader";
import Categories from "../components/Categories";
import OfferSlider from "../components/OfferSlider";
import { Ionicons } from "@expo/vector-icons";
import { firebase } from "../Firebase/firebase-config";
import CardSlider from "../components/CardSlider";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const fooddata = firebase.firestore().collection("FoodData");
  const fooddata2 = firebase.firestore().collection("FoodData2");
  const [foodData, setFoodData] = useState([]);
  const [foodData2, setFoodData2] = useState([]);
  const [modal, setmodal] = useState(false);

  useEffect(() => {
    async function fetchData() {
      fooddata2.onSnapshot((querySnapShot) => {
        setFoodData2(querySnapShot.docs.map((doc) => doc.data()));
      });
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      fooddata.onSnapshot((querySnapShot) => {
        setFoodData(querySnapShot.docs.map((doc) => doc.data()));
      });
    }
    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white", marginTop: 30 }}>
      <HomeHeader />
      <ScrollView style={styles.container}>
        <View style={styles.searchbox}>
          <Ionicons name="search-outline" size={24} />
          <TextInput
            style={styles.input}
            placeholder="Tìm kiếm"
            onChangeText={(text) => {
              setSearch(text);
            }}
          />
        </View>
        {search && (
          <View style={styles.searchresultrouter}>
            <FlatList
              style={styles.searchresultiner}
              data={foodData}
              renderItem={({ item }) => {
                if (
                  item.FoodName.toLowerCase().includes(search.toLowerCase())
                ) {
                  return (
                    <View style={styles.searchresult}>
                      <Ionicons name="arrow-forward" size={24} />
                      <Text style={styles.searchText}>{item.FoodName}</Text>
                    </View>
                  );
                }
              }}
            />
          </View>
        )}
        <Categories />
        <OfferSlider />
        <CardSlider data={foodData} title={"Đặc biệt"} />
        <CardSlider data={foodData2} title={"Món Mới"} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    position: "relative",
  },
  searchbox: {
    flexDirection: "row",
    width: "90%",
    backgroundColor: "white",
    borderRadius: 30,
    alignItems: "center",
    padding: 10,
    margin: 20,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
  input: {
    marginLeft: 10,
    width: "90%",
    fontSize: 16,
  },
  searchresultrouter: {
    width: "85%",
    marginHorizontal: 30,
    backgroundColor: "#f5f5f5",
    position: "absolute",
    zIndex: 20,
    marginTop: 70,
  },
  searchresultiner: {
    width: "100%",
  },
  searchresult: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  searchText: {
    marginLeft: 10,
    fontSize: 18,
  },
});
