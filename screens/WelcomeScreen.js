import {
  View,
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { firebase } from "../Firebase/firebase-config";

const WelcomeScreen = ({ navigation, route }) => {
  const [userLogged, setuserLogged] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        setuserLogged(true);
      }
      if (userLogged) {
        navigation.navigate("Home");
      }
    });
  }, [navigation, route, userLogged]);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
        source={require("../assets/welcome3.jpg")}
      />
      <SafeAreaView
        style={{
          marginHorizontal: 20,
          flex: 1,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text
            style={[
              styles.text,
              {
                marginTop: 130,
                paddingTop: 10,
                color: "gray",
                fontWeight: 900,
              },
            ]}
          >
            CHÀO MỪNG TỚI
          </Text>
          <Text style={styles.text}>FOOD ORDER</Text>
          <Text style={{ fontSize: 18, fontWeight: 400 }}>
            Bạn đặt, chúng tôi giao
          </Text>
          <View
            style={{
              flexDirection: "column",
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={{
                marginVertical: 10,
                justifyContent: "center",
                width: 250,
                height: 50,
                backgroundColor: "#fc6e3c",
                borderRadius: 10,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 19 }}>ĐĂNG NHẬP</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUp")}
              style={{
                marginBottom: 50,
                marginVertical: 10,
                justifyContent: "center",
                width: 250,
                height: 50,
                backgroundColor: "#fc6e3c",
                borderRadius: 10,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 19 }}>ĐĂNG KÍ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#fc6e3c",
    marginBottom: 5,
    fontWeight: 900,
  },
});
