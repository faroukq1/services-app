import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { renderCurrentWeek } from "../util/helperFunctions";
import { dayTimes } from "../util/DATA";
import { useNavigation } from "@react-navigation/native";
import { useWishListContext } from "../contextapi/useWishListContext";
import { useGlobalContext } from "../contextapi/useGlobalContext";
const BuyModal = ({ buyModalVisible, setBuyModalVisible }) => {
  const week = renderCurrentWeek();
  const navigation = useNavigation();
  const [buyOptions, setBuyOptions] = useState({
    day: week[0],
    time: dayTimes[0],
  });
  const { serviceData, orderInfo, setOrderInfo } = useWishListContext();
  const { userInformation } = useGlobalContext();
  const handleSubmitOrder = () => {
    setBuyModalVisible(false);
    navigation.navigate("buy");
    setOrderInfo({
      ...orderInfo,
      user_id: userInformation.user_id,
      service_id: serviceData.service_id,
      order_date: buyOptions.day.date,
      order_time: buyOptions.time,
      total_price: serviceData.service_price,
      payment_status: 0,
      quantity: 1,
      delivery_status: 0,
    });
  };

  return (
    <Modal animationType="fade" transparent={true} visible={buyModalVisible}>
      <View style={styles.container}>
        <View style={styles.content}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.week}
          >
            {week.map(({ id, name, month, number }) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.day,
                    buyOptions.day.id === id && styles.selected,
                  ]}
                  key={id}
                  onPress={() =>
                    setBuyOptions({ ...buyOptions, day: week[id] })
                  }
                >
                  <Text style={buyOptions.day.id === id && { color: "white" }}>
                    {name}
                  </Text>
                  <Text
                    style={[
                      { fontWeight: "bold" },
                      buyOptions.day.id === id && { color: "white" },
                    ]}
                  >
                    {month + " "}
                    {number}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 10 }}
          >
            {dayTimes.map((item, index) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.time,
                    buyOptions.time === item && styles.selected,
                  ]}
                  key={index}
                  onPress={() => setBuyOptions({ ...buyOptions, time: item })}
                >
                  <Text
                    style={[
                      { fontWeight: "bold" },
                      buyOptions.time === item && { color: "white" },
                    ]}
                  >
                    {item.substring(0, 5)}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={() => setBuyModalVisible(false)}
              style={[styles.btn, { backgroundColor: "red" }]}
            >
              <Text style={{ color: "white" }}>close</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.btn, { backgroundColor: "#1976D2" }]}
              onPress={handleSubmitOrder}
            >
              <Text style={{ color: "white" }}>Buy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.15)",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  content: {
    backgroundColor: "white",
    paddingVertical: 20,
    paddingLeft: 20,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: "100%",
    height: 220,
  },
  week: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  day: {
    height: 50,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 30,
  },
  time: {
    height: 50,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 30,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 20,
  },
  btn: {
    height: 36,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  selected: {
    backgroundColor: "#1976D2",
    color: "white",
  },
});

export default BuyModal;
