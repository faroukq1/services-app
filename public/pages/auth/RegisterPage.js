import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import BackButton from "../../component/BackButton";
import AuthHeader from "../../component/AuthHeader";

const RegisterPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <BackButton navigation={navigation} />
      </View>
      <AuthHeader mainText="Hi!" subText="Create a new account" />
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="User name" />
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Adress" />
        <TextInput style={styles.input} placeholder="Full name" />
        <TextInput style={styles.input} placeholder="Phone number" />
        <TextInput style={styles.input} placeholder="Password" />
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center", gap: 5 }}>
        <Text style={{ color: "#8886C2" }}>You have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Text style={{ color: "#0018FF" }}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 15,
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

export default RegisterPage;
