import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { firebase } from "../Firebase/firebase-config";

const SignupScreen = ({ navigation }) => {
  const [email, setemail] = useState("");
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setpassword] = useState("");
  const [checkpassword, setcheckpassword] = useState("");
  const handleRegistration = () => {
    if (email.length === 0) {
      Alert.alert("", "Vui lòng nhập email");
      return;
    }

    if (name.length === 0) {
      Alert.alert("", "Nhập tên");
      return;
    }
    if (phonenumber.length < 10) {
      Alert.alert("", "Số điện thoại ít hơn 10");
      return;
    }

    if (password.length === 0) {
      Alert.alert("", "Vui lòng nhập mật khẩu");
      return;
    } else if (checkpassword.length < 6) {
      Alert.alert("", "Vui lòng nhập mật khẩu >6");
      return;
    }

    if (checkpassword.length === 0) {
      Alert.alert("", "Vui lòng nhập mật khẩu");
      return;
    } else if (checkpassword.length < 6) {
      Alert.alert("", "Vui lòng nhập mật khẩu >6");
      return;
    }
    if (password !== checkpassword) {
      console.log("Passwords don't match");
      Alert.alert("Cảnh báo", "Mật khẩu không giống nhau");
      return;
    }

    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          if (userCredentials.user.uid) {
            const user = firebase.firestore().collection("UserData");
            user.add({
              email: email,
              name: name,
              phonenumber: phonenumber,
              address: address,
              password: password,
              uid: userCredentials?.user.uid,
            });
            Alert.alert(
              "Thông báo",
              "Tạo tài khoản thành công vui lòng đănng nhập"
            );
            navigation.navigate("Login");
          }
        })
        .catch((err) => {
          Alert.alert("", "Có lỗi");
        });
    } catch (err) {
      Alert.alert("", "Có lỗi");
    }
  };
  return (
    <SafeAreaView
      style={{
        position: "relative",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("Welcome")}
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row-reverse",
          position: "absolute",
          flex: 1,
          top: 60,
          left: 20,
        }}
      >
        <Text style={{ fontSize: 20 }}>Go back</Text>
        <Ionicons name="arrow-back-outline" size={16} />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 26,
          marginBottom: 10,
          fontWeight: "bold",
          color: "#fc6e3c",
        }}
      >
        ĐĂNG KÍ
      </Text>
      <View style={styles.input}>
        <TextInput
          value={name}
          onChangeText={setName}
          style={{ fontSize: 20 }}
          placeholder="Nhập Tên"
        />
      </View>
      <View style={styles.input}>
        <TextInput
          value={phonenumber}
          onChangeText={setPhonenumber}
          style={{ fontSize: 20 }}
          keyboardType="number-pad"
          placeholder="Nhập Số Điện Thoại"
        />
      </View>
      <View style={styles.input}>
        <TextInput
          value={email}
          onChangeText={setemail}
          style={{ fontSize: 20 }}
          placeholder="Email"
        />
      </View>
      <View style={[styles.input]}>
        <TextInput
          value={password}
          onChangeText={setpassword}
          secureTextEntry
          style={{ fontSize: 20 }}
          placeholder="Mật khẩu"
        />
      </View>
      <View style={[styles.input, { marginBottom: 30 }]}>
        <TextInput
          value={checkpassword}
          onChangeText={setcheckpassword}
          secureTextEntry
          style={{ fontSize: 20 }}
          placeholder="Nhập lại mật khẩu"
        />
      </View>
      <Text style={{ fontSize: 15, fontWeight: 300 }}>
        {" "}
        Vui Lòng Nhập Địa Chỉ
      </Text>
      <View style={[styles.input, { marginBottom: 90 }]}>
        <TextInput
          value={address}
          onChangeText={setAddress}
          style={{ fontSize: 20 }}
          placeholder="Nhập địa chỉ"
        />
      </View>
      <TouchableOpacity
        onPress={handleRegistration}
        style={{
          marginVertical: 10,
          justifyContent: "center",
          width: 250,
          height: 50,
          backgroundColor: "#fc6e3c",
          borderRadius: 10,
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "white", fontSize: 19 }}>ĐĂNG KÍ</Text>
      </TouchableOpacity>
      <View style={{ paddingTop: 10, flexDirection: "row" }}>
        <Text style={{ fontSize: 15, fontWeight: 400 }}>Đã có tài khoản?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text
            style={{
              marginLeft: 5,
              fontSize: 15,
              fontWeight: "bold",
              color: "#fc6e3c",
            }}
          >
            Đăng nhập
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  input: {
    width: 300,
    margin: 7,
    padding: 15,
    borderColor: "gray",
    backgroundColor: "#edf0f5",
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
});
