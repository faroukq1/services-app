import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image } from "react-native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PaymentMethod from "../../component/PaymentMethod";
import { morePaymentOptions } from "../../util/DATA";
import ConfirmPaymentModal from "../../component/ConfirmPaymentModal";
import useFetchHook from "../../util/useFetchHook";
import { useWishListContext } from "../../contextapi/useWishListContext";
import Toast from "react-native-toast-message";

const BuyPage = () => {
  const navigation = useNavigation();
  const [confirmModal, setConfirmModal] = useState(false);
  const { orderInfo } = useWishListContext();
  const handlePayment = async () => {
    try {
      const response = await useFetchHook.post(
        "/api/order/postorder",
        orderInfo
      );
      if (response.status === 200) {
        [
          Toast.show({
            type: "success",
            text1: "order placed successful",
          }),
        ];
      }
      navigation.navigate("home");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("wishlist")}>
          <Image style={styles.img} source={require("../../assets/back.png")} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Payment Method</Text>
      </View>

      <View style={styles.paymentContainer}>
        <PaymentMethod
          paymentText="Cash"
          img={require("../../assets/cash.png")}
          canChoose={true}
        />
        <PaymentMethod
          paymentText="Wallet"
          img={require("../../assets/wallet.png")}
        />

        <PaymentMethod
          paymentText="Credit & Debit Card"
          img={require("../../assets/credit.png")}
        />

        <View style={styles.morePaymentOptions}>
          <Text style={{ fontWeight: "600", marginBottom: 10 }}>
            More Payment Options
          </Text>
          {morePaymentOptions.map(({ id, name, img }) => {
            return (
              <PaymentMethod
                key={id}
                paymentText={name}
                img={img}
                otherOptions={true}
              />
            );
          })}
        </View>
        <TouchableOpacity style={styles.confirmBtn} onPress={handlePayment}>
          <Text style={{ color: "white", fontWeight: "600", fontSize: 18 }}>
            Confirm Payment
          </Text>
        </TouchableOpacity>
      </View>
      <ConfirmPaymentModal
        visible={confirmModal}
        setConfirmModal={setConfirmModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  paymentContainer: {
    flex: 0.8,
    gap: 20,
  },
  morePaymentOptions: {
    gap: 5,
  },
  img: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: "#61677A",
    borderRadius: 100,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
  },
  header: {
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    width: "70%",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  confirmBtn: {
    backgroundColor: "#005b96",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
  },
});

export default BuyPage;
