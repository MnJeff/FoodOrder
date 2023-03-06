import { View, Text, Button, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { firebase } from "../Firebase/firebase-config";
import { Image } from "react-native";
import { FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Goback from "../components/Goback";
import { TouchableOpacity } from "react-native";

const CartScreen = () => {
  const [cartData, setCartData] = useState({});
  const [totalPrice, setTotalPrice] = useState("0");
  const [docRef, setdocRef] = useState();

  function deleteItem(item) {
    docRef.update({
      cart: firebase.firestore.FieldValue.arrayRemove(item),
    });
    getData();
  }

  const getData = async () => {
    const docRef = firebase
      .firestore()
      .collection("UserCart")
      .doc(firebase.auth().currentUser.uid);

    await docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          setCartData(data);
          setdocRef(docRef);
        } else {
          console.log("no data");
        }
      })
      .catch((err) => {
        console.log("Err", err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 600,
            color: "#fc6e3c",
            margin: 10,
          }}
        >
          Giỏ hàng
        </Text>
      </View>
      <View>
        {!!cartData === false && (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: 600,
            }}
          >
            <Text style={{ fontSize: 25 }}>Giỏ hàng trống</Text>
          </View>
        )}
        <FlatList
          data={cartData.cart}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
                  backgroundColor: "white",
                  margin: 10,
                  borderRadius: 10,
                  shadowColor: "black",
                  shadowOffset: { width: 1, height: 2 },
                  shadowOpacity: 0.27,
                  shadowRadius: 4.65,
                }}
              >
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    margin: 5,
                    borderRadius: 10,
                  }}
                  source={{ uri: item.data.FoodImage }}
                />
                <View
                  style={{
                    justifyContent: "center",
                    minWidth: 200,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      marginVertical: 10,
                      marginHorizontal: 15,
                    }}
                  >
                    {item.FoodQuanity} {item.data.FoodName}
                  </Text>
                  <Text style={{ fontSize: 20, marginHorizontal: 15 }}>
                    Giá: {item.data.FoodPrice}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity onPress={() => deleteItem(item)}>
                    <Ionicons name="trash" size={30} color="#fc6e3c" />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: "black",
          top: -25,
          width: 400,
          left: 1,
          position: "absolute",
        }}
      >
        <Goback />
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
