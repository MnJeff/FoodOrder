import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { firebase } from "../Firebase/firebase-config";
import { Ionicons } from "@expo/vector-icons";

const UserProfile = ({ navigation }) => {
  const [userLogged, setuserLogged] = useState();
  const [userdata, setuserdata] = useState();

  useEffect(() => {
    const checkLogin = () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setuserLogged(user.uid);
        }
      });
    };
    checkLogin();
  }, []);

  useEffect(() => {
    const getuserData = async () => {
      const docRef = firebase
        .firestore()
        .collection("UserData")
        .where("uid", "==", userLogged || "");
      const doc = await docRef.get();
      if (!doc.empty) {
        doc.forEach((doc) => {
          setuserdata(doc.data());
        });
      } else {
        console.log("no document");
      }
    };
    getuserData();
  }, [userLogged]);

  return (
    <SafeAreaView style={styles.containerout}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row-reverse",
          position: "absolute",
          flex: 1,
          top: 50,
          left: 20,
        }}
      >
        <Text style={{ fontSize: 20 }}>Go back</Text>
        <Ionicons name="arrow-back-outline" size={16} />
      </TouchableOpacity>
      <View style={{ marginTop: 100 }}>
        <Text style={{ fontSize: 25, fontWeight: 700, color: "#fc6e3c" }}>
          Profile
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          margin: 50,
          width: "80%",
          borderWidth: 1,
          paddingVertical: 20,
          borderColor: "#fc6e3c",
          borderRadius: 15,
        }}
      >
        <Text style={styles.text}>Tên:{userdata?.name}</Text>
        <Text style={styles.text}>Email:{userdata?.email}</Text>
        <Text style={styles.text}>SDT:{userdata?.phonenumber}</Text>
        <Text style={styles.text}>Địa chỉ:{userdata?.address}</Text>
      </View>
    </SafeAreaView>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  containerout: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    marginVertical: 10,
    fontSize: 18,
  },
});
