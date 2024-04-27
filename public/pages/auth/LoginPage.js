import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import BackButton from "../../component/BackButton";
import AuthHeader from "../../component/AuthHeader";
import axios from "axios";
import { useGlobalContext } from "../../contextapi/useGlobalContext";

const LoginPage = ({ navigation }) => {
  const { setIsLogin, setUserInformation } = useGlobalContext();
  const [loginResult, setLoginResult] = useState({
    email: "",
    user_password: "",
  });

  const getUserInformation = async (id) => {
    const ACCOUNT_DETAILS_URL = `http://192.168.1.7:3000/api/user/${id}`;
    try {
      const response = await axios.get(ACCOUNT_DETAILS_URL);
      const data = response.data.data[0];
      setUserInformation(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async () => {
    const LOGIN_URL = "http://192.168.1.7:3000/api/auth/login";
    try {
      const response = await axios.post(LOGIN_URL, loginResult);
      const data = response.data;
      getUserInformation(data.user_id);
      setIsLogin(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <BackButton navigation={navigation} />
      </View>

      <AuthHeader mainText="Welcome!" subText="sing in to continue" />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="email"
          value={loginResult.email}
          onChange={(e) =>
            setLoginResult({
              ...loginResult,
              email: e.nativeEvent.text,
            })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          value={loginResult.user_password}
          onChange={(e) =>
            setLoginResult({
              ...loginResult,
              user_password: e.nativeEvent.text,
            })
          }
        />
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={() => handleLogin()}>
          <Text style={styles.btnText}>Login</Text>
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
