import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Modal, TextInput } from "react-native-paper";

const ReviewServiceModal = ({ openReview, setOpenReview }) => {
  return (
    <Modal visible={openReview} transparent animationType="fade">
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                marginBottom: 20,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Review Service
              </Text>
              <TouchableOpacity onPress={() => setOpenReview(false)}>
                <Image
                  source={require("../assets/close.png")}
                  style={styles.img}
                />
              </TouchableOpacity>
            </View>
            <TextInput
              placeholder="Leave Review"
              style={styles.input}
              multiline
              numberOfLines={4}
            />
          </View>
        </View>
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
    width: "90%",
    height: 300,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  img: {
    width: 30,
    height: 30,
  },
  header: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  input: {
    backgroundColor: "transparent",
    borderBottomWidth: 0,
    width: "100%",
  },
});

export default ReviewServiceModal;
