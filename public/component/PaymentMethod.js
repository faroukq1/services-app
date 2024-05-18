import { View, Text, StyleSheet, Image } from "react-native";
import { RadioButton } from "react-native-paper";
import React from "react";

const PaymentMethod = ({ paymentText, img, otherOptions }) => {
  return (
    <View style={styles.paymentChoise}>
      {!otherOptions && (
        <View style={styles.textContainer}>
          <Text style={{ fontWeight: "600" }}>{paymentText}</Text>
        </View>
      )}
      <View style={styles.payment}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Image style={styles.img} source={img} />
          <Text style={styles.paymentText}>{paymentText}</Text>
        </View>
        <RadioButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  payment: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#B6BBC4",
    padding: 5,
    borderRadius: 10,
  },
  textContainer: {
    marginBottom: 20,
    width: "100%",
    paddingLeft: 5,
  },
  paymentChoise: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  img: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
});

export default PaymentMethod;
