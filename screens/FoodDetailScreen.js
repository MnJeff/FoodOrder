import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import Goback from "../components/Goback";
import Button from "../components/Button";
import { firebase } from "../Firebase/firebase-config";
import { TouchableOpacity } from "react-native";

const FoodDetailScreen = ({ route }) => {
  const data = route?.params.data;

  const [quanity, setQuanity] = useState("1");
  const [totalPrice, setTotalPrice] = useState(data.FoodPrice);
  const [addquanity, setaddquanity] = useState("0");

  function minus() {
    if (quanity !== "1") {
      setQuanity((parseInt(quanity) - 1).toString());
      setTotalPrice(
        (parseInt(quanity) - 1).toString() * parseInt(data.FoodPrice)
      );
    }
  }
  function plus() {
    setQuanity((parseInt(quanity) + 1).toString());
    setTotalPrice(
      (parseInt(quanity) + 1).toString() * parseInt(data.FoodPrice)
    );
  }

  const allData = {
    data,
    AddQuanity: totalPrice,
    FoodQuanity: quanity,
  };

  function addToCart() {
    const docRef = firebase
      .firestore()
      .collection("UserCart")
      .doc(firebase.auth().currentUser.uid);
    docRef.get().then((doc) => {
      if (doc.exists) {
        docRef.update({
          cart: firebase.firestore.FieldValue.arrayUnion(allData),
        });
        alert("Added to cart");
      } else {
        docRef.set({
          cart: [allData],
        });
        alert("Added to cart");
      }
    });
  }

  return (
    <View style={{ flex: 1 }}>
      <Goback />
      <Image
        style={{ width: "100%", height: 300, marginTop: 40 }}
        source={{ uri: data?.FoodImage }}
      />
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: 600, color: "#fc6e3c" }}>
          {data?.FoodName}
        </Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text>Số lượng</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={plus}
            style={{
              padding: 20,
              margin: 10,
              backgroundColor: "#fc6e3c",
              borderRadius: 5,
            }}
          >
            <Text style={{ fontSize: 20, color: "white" }}>+</Text>
          </TouchableOpacity>
          <View
            style={{
              padding: 20,
              margin: 10,
              borderRadius: 5,
            }}
          >
            <Text style={{ fontSize: 20 }}>{quanity}</Text>
          </View>
          <TouchableOpacity
            onPress={minus}
            style={{
              padding: 20,
              margin: 10,
              backgroundColor: "#fc6e3c",
              borderRadius: 5,
            }}
          >
            <Text style={{ fontSize: 20, color: "white" }}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View>
          <Text style={{ fontSize: 20, marginTop: 20, fontWeight: 500 }}>
            Tổng giá
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 20, marginVertical: 20, fontWeight: 500 }}>
            {totalPrice}
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Button width={"45%"} name="BUY" />
        <Button width={"45%"} name="ADD TO CART" onPress={addToCart} />
      </View>
    </View>
  );
};

export default FoodDetailScreen;
