import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const HomeHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity>
        <Image
          style={styles.img}
          source={require("../assets/notification.png")}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>Home</Text>
      <TouchableOpacity>
        <Image style={styles.img} source={require("../assets/basket.png")} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 17,
    fontWeight: "600",
  },
  img: {
    width: 25,
    height: 25,
  },
});
export default HomeHeader;
