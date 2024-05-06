import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import Reviews from "./Reviews";
import Toast from "react-native-toast-message";

const ServiceReview = () => {
  const toastError = () => {
    Toast.show({
      type: "error",
      position: "top",
      text1: "You can't make review before buying the service",
      visibilityTime: 2500,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>Reviews</Text>
        <TouchableOpacity onPress={toastError}>
          <Image source={require("../assets/edit.png")} style={styles.img} />
        </TouchableOpacity>
      </View>
      <Reviews />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 15,
  },
  img: {
    width: 30,
    height: 30,
  },
});

export default ServiceReview;
