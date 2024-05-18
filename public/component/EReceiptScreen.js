import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useWishListContext } from "../contextapi/useWishListContext";
import { useGlobalContext } from "../contextapi/useGlobalContext";
import { useNavigation } from "@react-navigation/native";

const EReceiptType = ({ type, typeContent }) => {
  return (
    <View style={styles.itemDetails}>
      <Text style={styles.type}>{type}</Text>
      <Text style={styles.typeContent}>{typeContent}</Text>
    </View>
  );
};
const EReceiptScreen = () => {
  const navigation = useNavigation();
  const { serviceData, orderInfo } = useWishListContext();
  const { userInformation } = useGlobalContext();
  const { user_name, phone_number } = userInformation;
  const { service_category, service_name } = serviceData;
  const { total_price } = orderInfo;
  const providerInfo = [
    {
      id: 1,
      name: "Service Name",
      content: service_name,
    },
    {
      id: 2,
      name: "Booking Date",
      content: new Date().toISOString().substring(0, 10),
    },
  ];

  const amountAndTax = [
    {
      id: 4,
      name: "Amount",
      content: `${total_price ? total_price : 20} $`,
    },
    {
      id: 5,
      name: "Tax",
      content: 15,
    },
    {
      id: 6,
      name: "Total",
      content: `${total_price ? total_price + 15 : 35} $`,
    },
  ];
  const buyerInfo = [
    {
      id: 10,
      name: "Name",
      content: user_name,
    },
    {
      id: 11,
      name: "Phone number",
      content: phone_number,
    },
    {
      id: 12,
      name: "Transaction ID",
      content: "#random-id-RE234H54X",
    },
  ];

  const handleConfirm = () => {
    navigation.navigate("home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/back.png")} style={styles.img} />
        <Text style={styles.headerText}>E-Receipt</Text>
      </View>
      <View style={styles.details}>
        <Image
          source={require("../assets/barCode.png")}
          style={styles.barCode}
        />
        <View style={styles.item}>
          <EReceiptType type="Service" typeContent={service_category} />
        </View>

        <View style={styles.item}>
          {providerInfo.map(({ id, name, content }) => {
            return <EReceiptType key={id} type={name} typeContent={content} />;
          })}
        </View>
        <View style={styles.item}>
          {amountAndTax.map(({ id, name, content }) => {
            return <EReceiptType key={id} type={name} typeContent={content} />;
          })}
        </View>
        <View style={styles.item}>
          {buyerInfo.map(({ id, name, content }) => {
            return <EReceiptType key={id} type={name} typeContent={content} />;
          })}
        </View>
      </View>

      <TouchableOpacity style={styles.confirmBtn} onPress={handleConfirm}>
        <Text style={styles.confirmText}>Confirm and download E-Receipt</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: "#61677A",
    borderRadius: 100,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "60%",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "400",
  },
  barCode: {
    marginTop: 20,
    width: "120%",
    height: 70,
    resizeMode: "stretch",
  },
  details: {
    flex: 1,
    alignItems: "center",
  },
  item: {
    paddingVertical: 20,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    gap: 20,
  },
  itemDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  type: {
    fontSize: 15,
    fontWeight: "400",
    color: "#888888",
  },
  typeContent: {
    fontSize: 15,
    fontWeight: "500",
  },
  confirmBtn: {
    backgroundColor: "#888888",
    padding: 10,
    borderRadius: 10,
  },
  confirmText: {
    color: "white",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
  },
});

export default EReceiptScreen;
