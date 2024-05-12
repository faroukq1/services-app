import { View, Text, Modal, StyleSheet } from "react-native";
import React from "react";

const BuyModal = () => {
  return (
    <Modal animationType="fade" transparent={true} visible={true}>
      <View style={styles.container}>
        <View style={styles.content}></View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "100%",
    height: 100,
  },
});

export default BuyModal;
