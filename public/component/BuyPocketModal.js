import {
  View,
  Text,
  Modal,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useOrdersContext } from "../contextapi/useOrdersContext";
import { orderBy } from "lodash";
const BuyPocketModal = () => {
  const { pocketModal, setPocketModal, myOrders } = useOrdersContext();
  console.log(myOrders);
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
          <View style={styles.orderContainer}>
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
                  <Text>{serviceName}</Text>
                  <Text>{serviceCategory}</Text>
                  <Text>{order_date}</Text>
                  <Text>{order_time}</Text>
                  <Text>{total_price}</Text>
                  <Text>{payment_status}</Text>
                  <Text>{delivery_status}</Text>
                </View>
              );
            })}
          </View>
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
});

export default BuyPocketModal;
