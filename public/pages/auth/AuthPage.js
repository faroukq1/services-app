import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

const AuthPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../assets/logo.jpg")} style={styles.image} />
        <Text style={styles.appName}>Name</Text>
      </View>
      <Image
        source={require("../../assets/auth.png")}
        style={styles.heroImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>Hello</Text>
        <Text style={styles.subText}>
          Best place to sell your skill , or buy one for yourself
        </Text>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("login")}
        >
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, { backgroundColor: "white" }]}
          onPress={() => navigation.navigate("register")}
        >
          <Text style={[styles.btnText, { color: "#3F00F7" }]}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  appName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  heroImage: {
    width: "100%",
    flex: 0.65,
  },
  textContainer: {
    justifyContent: "center",
    alignContent: "center",
  },
  mainText: {
    fontSize: 40,
    textAlign: "center",
  },
  subText: {
    fontSize: 18,
    textAlign: "center",
    color: "#A9A9A9",
  },
  btnContainer: {
    flex: 0.35,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  btn: {
    padding: 15,
    width: "70%",
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
export default AuthPage;
