import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import BackButton from "../../component/BackButton";
import AuthHeader from "../../component/AuthHeader";

const LoginPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <BackButton navigation={navigation} />
      </View>

      <AuthHeader mainText="Welcome!" subText="sing in to continue" />
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="email" />
        <TextInput style={styles.input} placeholder="password" />
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center", gap: 5 }}>
        <Text style={{ color: "#8886C2" }}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("register")}>
          <Text style={{ color: "#0018FF" }}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    justifyContent: "space-between",
  },
  inputContainer: {
    width: "90%",
    justifyContent: "center",
    marginLeft: 15,
  },
  input: {
    padding: 15,
    borderBottomWidth: 1.5,
    borderBottomColor: "#AEAEAE",
    color: "#3900EE",
  },
  btnContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    padding: 15,
    width: "50%",
    borderRadius: 10,
    backgroundColor: "#3F00F7",
    borderWidth: 2,
    borderColor: "#3F00F7",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "white",
    fontWeight: "500",
  },
});

export default LoginPage;
