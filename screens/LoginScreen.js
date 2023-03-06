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

const LoginScreen = ({ navigation }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handleRegistration = () => {
    if (email.length === 0) {
      Alert.alert("", "Vui lòng nhập email");
      return;
    }

    if (password.length === 0) {
      Alert.alert("", "Vui lòng nhập mật khẩu");
      return;
    }
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          Alert.alert("", "Đăng nhập thành công");
          navigation.navigate("Home");
        })
        .catch((err) => {
          Alert.alert("Cảnh báo", "Tài khoản hoặc mật khẩu không chính xác");
        });
    } catch {
      Alert.alert("Cảnh báo", "Đã xảy ra lỗi vui lòng thử lại");
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
        ĐĂNG NHẬP
      </Text>
      <View style={styles.input}>
        <TextInput
          value={email}
          onChangeText={setemail}
          style={{ fontSize: 20 }}
          placeholder="Email"
          autoCapitalize="none"
        />
      </View>
      <View style={[styles.input, { marginBottom: 50 }]}>
        <TextInput
          value={password}
          onChangeText={setpassword}
          secureTextEntry
          style={{ fontSize: 20 }}
          placeholder="Mật khẩu"
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
        <Text style={{ color: "white", fontSize: 19 }}>ĐĂNG NHẬP</Text>
      </TouchableOpacity>
      <View style={{ paddingTop: 10, flexDirection: "row" }}>
        <Text style={{ fontSize: 15, fontWeight: 400 }}>
          Chưa có tài khoản?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text
            style={{
              marginLeft: 5,
              fontSize: 15,
              fontWeight: "bold",
              color: "#fc6e3c",
            }}
          >
            Đăng kí
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

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
