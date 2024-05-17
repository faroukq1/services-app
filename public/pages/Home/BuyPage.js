import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image } from "react-native";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { RadioButton } from "react-native-paper";

const BuyPage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("wishlist")}>
          <Image style={styles.img} source={require("../../assets/back.png")} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Payment Method</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  img: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: "#61677A",
    borderRadius: 100,
    padding: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
  },
  header: {
    paddingHorizontal: 20,
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    width: "70%",
    justifyContent: "space-between",
  },
});

export default BuyPage;
