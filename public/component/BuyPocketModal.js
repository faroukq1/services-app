import {
  View,
  Text,
  Modal,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useHomeContext } from "../contextapi/useHomeContext";
import { useOrdersContext } from "../contextapi/useOrdersContext";

const BuyPocketModal = () => {
  const { openPocketModal, setOpenPocketModal } = useHomeContext();
  const { myOrders } = useOrdersContext();
  return (
    <Modal visible={openPocketModal} transparent={true} animationType="fade">
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={{ fontSize: 20, fontWeight: "500" }}>
              Shopping card
            </Text>
            <TouchableOpacity onPress={() => setOpenPocketModal(false)}>
              <Image
                style={styles.img}
                source={require("../assets/back.png")}
              />
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
