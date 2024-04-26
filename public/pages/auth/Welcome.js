import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.WelcomeTextContainer}>
        <Text style={styles.primaryText}>Welcome to</Text>
        <Text style={styles.secondaryText}>Services App</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          style={styles.welcomeImage}
          source={require("../../assets/welcom1.png")}
        />
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          Welcome to services app where convenience meets reliability. Get ready
          to access top-notch services at your fingertips!.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.nextBtn}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignContent: "center",
  },
  WelcomeTextContainer: {
    width: "100%",
    alignItems: "center",
    gap: 10,
  },
  primaryText: {
    fontSize: 20,
  },
  secondaryText: {
    fontSize: 40,
    color: "#218D96",
    fontWeight: "400",
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
  },
  welcomeImage: {
    width: 300,
    height: 300,
  },
  descriptionContainer: {
    padding: 20,
  },
  descriptionText: {
    textAlign: "center",
    lineHeight: 20,
  },
  buttonContainer: {
    alignItems: "flex-end",
    padding: 20,
  },
  nextBtn: {
    backgroundColor: "#218D96",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    width: 100,
    justifyContent: "center",
    gap: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  nextText: {
    color: "white",
    fontWeight: "bold",
    shadowColor: "#000",
  },
});

export default Welcome;
