import { View, Text, Modal, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import EReceiptScreen from "./EReceiptScreen";

const ConfirmPaymentModal = ({ visible, setConfirmModal }) => {
  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <View style={styles.container}>
        <View style={styles.content}>
          <EReceiptScreen />
        </View>
      </View>
      <View>
        <TouchableOpacity>
          <Text
            onPress={() => setConfirmModal(false)}
            style={{ textAlign: "center", marginTop: 10 }}
          >
            Close
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  content: {
    flex: 0.95,
    backgroundColor: "white",
    width: "100%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 20,
  },
});

export default ConfirmPaymentModal;
