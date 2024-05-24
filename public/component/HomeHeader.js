import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import BuyPocketModal from "./BuyPocketModal";
import { useOrdersContext } from "../contextapi/useOrdersContext";

const HomeHeader = () => {
  const { setPocketModal } = useOrdersContext();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity>
        <Image
          style={styles.img}
          source={require("../assets/notification.png")}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>Home</Text>
      <TouchableOpacity onPress={() => setPocketModal(true)}>
        <Image style={styles.img} source={require("../assets/basket.png")} />
      </TouchableOpacity>
      <BuyPocketModal />
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
