import { View, Text, StyleSheet } from "react-native";
import React from "react";

const WishListServiceName = ({ service_name, user_adress }) => {
  return (
    <View style={styles.serviceName}>
      <Text style={styles.serviceNameText}>{service_name}</Text>
      <Text style={{ color: "#1976D2" }}>{user_adress}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  serviceName: {
    paddingHorizontal: 20,
    gap: 10,
  },
  serviceNameText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#3C3633",
  },
});

export default WishListServiceName;
