import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import useFetchHook from "../util/useFetchHook";
const RenderSale = ({
  order_id,
  service_provider,
  service_id,
  orders_buyer_id,
  order_date,
  order_time,
  total_price,
  payment_status,
  quantity,
  delivery_status,
  service_name,
}) => {
  const [saleCardInfo, setSaleCardInfo] = useState({
    service_provider: "",
    order_buyer_id: "",
  });
  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const response = await useFetchHook(`/api/services/${service_id}`);
        const data = response.data.service_name;
        setSaleCardInfo({ ...saleCardInfo, service_provider: data });
      } catch (error) {
        console.log(error);
      }
    };

    const buyerName = async () => {
      try {
        const response = await useFetchHook.get(`api/user/${orders_buyer_id}`);
        const data = response.data.data[0].full_name;
        setSaleCardInfo({ ...saleCardInfo, order_buyer_id: data });
      } catch (error) {
        console.log(error);
      }
    };
    buyerName();
    fetchServiceData();
  }, []);
  return (
    <View style={styles.card}>
      <Text style={styles.text}>Order ID: {order_id}</Text>
      <Text style={styles.text}>
        Service Provider: {saleCardInfo.service_provider}
      </Text>
      <Text style={styles.text}>
        Order Buyer: {saleCardInfo.order_buyer_id}
      </Text>
      <Text style={styles.text}>Order Date: {order_date.substring(0, 10)}</Text>
      <Text style={styles.text}>Order Time: {order_time.substring(0, 5)}</Text>
      <Text style={styles.text}>Total Price: {total_price}</Text>
      <Text style={styles.text}>Payment Status: {payment_status}</Text>
      <Text style={styles.text}>Quantity: {quantity}</Text>
      <Text style={styles.text}>Delivery Status: {delivery_status}</Text>
      <Text style={styles.text}>Service Name: {service_name}</Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Decline</Text>
        </TouchableOpacity>
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
});

export default RenderSale;
