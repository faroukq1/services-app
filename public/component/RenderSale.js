import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import useFetchHook from "../util/useFetchHook";
import Toast from "react-native-toast-message";
const RenderSale = ({
  order_id,
  orders_buyer_id,
  order_date,
  order_time,
  total_price,
  payment_status,
  delivery_status,
  service_name,
}) => {
  const [saleCardInfo, setSaleCardInfo] = useState("");
  const [accepteOrder, setAcceptedOrder] = useState(false);
  const [declineOrder, setDeclineOrder] = useState(false);
  useEffect(() => {
    const buyerName = async () => {
      try {
        const response = await useFetchHook.get(`api/user/${orders_buyer_id}`);
        const data = response.data.data[0].full_name;
        setSaleCardInfo(data);
      } catch (error) {
        console.log(error);
      }
    };
    buyerName();
  }, []);
  const handleAccepteOrder = async () => {
    try {
      const response = await useFetchHook.patch(
        `/api/order/accept/${order_id}`
      );
      if (response.status === 200) {
        Toast.show({
          type: "success",
          text1: "Order Accepted",
        });
      }
      setAcceptedOrder(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDecline = async () => {
    try {
      const response = await useFetchHook.patch(
        `/api/order/decline/${order_id}`
      );

      if (response.status === 200) {
        Toast.show({
          type: "success",
          text1: "Order Declined",
        });
      }
      setDeclineOrder(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.card}>
      <Text style={styles.text}>Order ID: {order_id}</Text>
      <Text style={styles.text}>Service : {saleCardInfo}</Text>
      <Text style={styles.text}>Order Buyer: {saleCardInfo}</Text>
      <Text style={styles.text}>Order Date: {order_date.substring(0, 10)}</Text>
      <Text style={styles.text}>Order Time: {order_time.substring(0, 5)}</Text>
      <Text style={styles.text}>Total Price: {total_price}</Text>
      <Text style={styles.text}>
        Payment Status: {payment_status === 0 ? "Pending" : "Paid"}
      </Text>
      <Text style={styles.text}>
        Delivery Status: {delivery_status === 0 ? "Pending" : "Delivered"}
      </Text>
      <Text style={styles.text}>Service Name: {service_name}</Text>
      <View style={styles.btnContainer}>
        {delivery_status === 0 && (!accepteOrder || !declineOrder) && (
          <>
            <TouchableOpacity style={styles.btn} onPress={handleAccepteOrder}>
              <Text style={styles.btnText}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, { backgroundColor: "red" }]}
              onPress={handleDecline}
            >
              <Text style={styles.btnText}>Decline</Text>
            </TouchableOpacity>
          </>
        )}
        {(delivery_status === 1 || accepteOrder) && (
          <>
            <Text style={styles.accepted}>
              Offer aceepted. We will notify the client as soon as possible
            </Text>
          </>
        )}
        {(delivery_status === 2 || declineOrder) && (
          <>
            <Text style={[styles.accepted, { backgroundColor: "red" }]}>
              Offer declined. We will notify the client as soon as possible
            </Text>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#eee",
    borderRadius: 5,
    padding: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: "300",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  btn: {
    backgroundColor: "#007BFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  btnText: {
    color: "white",
  },
  accepted: {
    backgroundColor: "green",
    color: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});

export default RenderSale;
