import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import BuyPocketModal from "./BuyPocketModal";
import { useOrdersContext } from "../contextapi/useOrdersContext";
import NotificationModal from "./NotificationModal";

const HomeHeader = () => {
  const { setPocketModal, setNotificationModal } = useOrdersContext();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => setNotificationModal(true)}>
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
      <NotificationModal />
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
