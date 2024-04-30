import { View, Text, TextInput, Image, StyleSheet } from "react-native";
import React from "react";

const SearchProductBar = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/search.png")} />
      <TextInput style={styles.input} placeholder="Search Product" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    position: "relative",
    flexDirection: "row",
  },
  image: {
    position: "absolute",
    zIndex: 10,
    left: 10,
    top: 19,
    width: 20,
    height: 20,
  },
  input: {
    flex: 1,
    padding: 15,
    paddingHorizontal: 40,
    backgroundColor: "#eee",
    borderRadius: 10,
  },
});

export default SearchProductBar;
