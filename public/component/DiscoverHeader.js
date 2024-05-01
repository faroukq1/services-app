import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import SearchProductBar from "./SearchProductBar";
import { useDiscoverContext } from "../contextapi/useDiscoverContext";

const DiscoverHeader = ({ navigation }) => {
  const { setSearchAllServices } = useDiscoverContext();
  return (
    <View style={styles.DiscoverHeader}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("home")}>
          <Image style={styles.img} source={require("../assets/back.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.search}>
        <SearchProductBar setSearchFunction={setSearchAllServices} />
      </View>
      <Image source={require("../assets/basket.png")} style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  DiscoverHeader: {
    width: "100%",
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  img: {
    width: 25,
    height: 25,
  },
  search: {
    flex: 1,
    marginBottom: 20,
    height: 100,
  },
});

export default DiscoverHeader;
