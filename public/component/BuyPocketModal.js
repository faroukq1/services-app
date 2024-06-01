import {
  View,
  Text,
  Modal,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useOrdersContext } from "../contextapi/useOrdersContext";
import useFetchHook from "../util/useFetchHook";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import { useWishListContext } from "../contextapi/useWishListContext";
const BuyPocketModal = () => {
  const navigation = useNavigation();
  const { setServiceID, setWriteReview } = useWishListContext();
  const { pocketModal, setPocketModal, myOrders, setMyOrders } =
    useOrdersContext();

  const handleDeleteOrder = async (id) => {
    const newOrderList = myOrders.filter((item) => item.order_id !== id);
    setMyOrders(newOrderList);
    try {
      const response = await useFetchHook.delete(`api/order/${id}`);
      if (response.status === 200) {
        Toast.show({
          type: "success",
          text1: "order deleted",
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleReview = (service_id) => {
    setServiceID(service_id);
    setWriteReview(true);
    navigation.navigate("wishlist");
  };
  return (
    <Modal visible={pocketModal} transparent={true} animationType="fade">
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={{ fontSize: 20, fontWeight: "500" }}>
              Shopping card
            </Text>
            <TouchableOpacity onPress={() => setPocketModal(false)}>
              <Image
                style={styles.img}
                source={require("../assets/back.png")}
              />
            </TouchableOpacity>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.orderContainer}
          >
            {myOrders.map((order, index) => {
              const {
                order_date,
                order_time,
                total_price,
                payment_status,
                delivery_status,
                serviceDetails,
              } = order;
              const { serviceName, serviceCategory } = serviceDetails;
              return (
                <View key={index} style={styles.order}>
                  <Text>
                    <Text style={{ fontWeight: "bold" }}>
                      Service category :{" "}
                    </Text>
                    {serviceCategory}
                  </Text>
                  <Text>
                    <Text style={{ fontWeight: "bold" }}>Service name : </Text>
                    {serviceName}
                  </Text>
                  <Text>
                    <Text style={{ fontWeight: "bold" }}>Order date : </Text>
                    {order_date.substring(0, 10)}
                  </Text>
                  <Text>
                    <Text style={{ fontWeight: "bold" }}>Order time : </Text>
                    {order_time}
                  </Text>
                  <Text>
                    <Text style={{ fontWeight: "bold" }}>Total price : </Text>
                    {total_price}
                  </Text>
                  <View style={styles.btnContainer}>
                    <View style={[styles.btn, { backgroundColor: "blue" }]}>
                      <Text style={{ color: "white" }}>
                        {payment_status === 1 ? "Paid" : "Unpaid"}
                      </Text>
                    </View>
                    <View style={[styles.btn, { backgroundColor: "green" }]}>
                      <Text style={{ color: "white" }}>
                        {delivery_status === 1 && "Delivered"}
                        {delivery_status === 0 && "Pending"}
                        {delivery_status === 2 && "Rejected"}
                      </Text>
                    </View>
                    {delivery_status !== 1 && (
                      <TouchableOpacity
                        onPress={() => handleDeleteOrder(order.order_id)}
                        style={[styles.btn, { backgroundColor: "red" }]}
                      >
                        <Text style={{ color: "white" }}>delete</Text>
                      </TouchableOpacity>
                    )}
                    {delivery_status === 1 && (
                      <TouchableOpacity
                        onPress={() => handleReview(order.service_id)}
                        style={[styles.btn, { backgroundColor: "#B5C0D0" }]}
                      >
                        <Text style={{ color: "white" }}>Review</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  content: {
    flex: 0.98,
    marginTop: 60,
    backgroundColor: "#eee",
    width: "92%",
    borderRadius: 10,
    padding: 20,
  },
  img: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: "#61677A",
    borderRadius: 100,
  },
  header: {
    width: "100%",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
  },
  order: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    gap: 5,
  },
  btnContainer: {
    marginTop: 10,
    flexDirection: "row",
    gap: 5,
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
});

export default BuyPocketModal;
