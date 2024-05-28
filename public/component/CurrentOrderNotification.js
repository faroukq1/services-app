import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import useFetchHook from "../util/useFetchHook";
import { useNavigation } from "@react-navigation/native";

const CurrentOrderNotification = ({
  service_name,
  order_date,
  order_time,
  total_price,
  orders_buyer_id,
}) => {
  const [buyerName, setBuyerName] = useState("Unknown");
  const navigation = useNavigation();
  useEffect(() => {
    const getUserName = async () => {
      try {
        const response = await useFetchHook.get(`api/user/${orders_buyer_id}`);
        setBuyerName(response.data.data[0].user_name);
      } catch (error) {
        console.log(error);
      }
    };

    getUserName();
  }, []);
  return (
    <View style={styles.notification}>
      <Text>
        <Text style={{ fontWeight: "bold" }}>{buyerName} </Text>
        has placed an order for
        <Text style={{ fontWeight: "bold" }}> {service_name} </Text>
        on
        <Text style={{ fontWeight: "bold" }}>
          {" "}
          {order_date.substring(0, 10)}{" "}
        </Text>
        at
        <Text style={{ fontWeight: "bold" }}>
          {" "}
          {order_time.substring(0, 5)}{" "}
        </Text>
        for
        <Text style={{ fontWeight: "bold" }}> {total_price}$ </Text>
      </Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("dashboard")}
      >
        <Text style={{ color: "white" }}>View Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  notification: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  btn: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#007BFF",
    width: "50%",
    alignItems: "center",
    borderRadius: 10,
  },
});

export default CurrentOrderNotification;
