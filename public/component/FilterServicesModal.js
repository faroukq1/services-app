import { View, Text, Modal, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import SortServices from "./SortServices";
import FilterServices from "./FilterServices";

const FilterModal = ({ type }) => {
  if (type === "sort") return <SortServices />;
  if (type === "filter") return <FilterServices />;
  return null;
};

const FilterServicesModal = ({ modalType, setModalVisible, modalVisible }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={setModalVisible}
    >
      <View style={styles.container}>
        <View
          style={[
            styles.modal,
            modalType === "sort" ? { height: 170 } : { height: 270 },
          ]}
        >
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => setModalVisible(false)}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>close</Text>
            </TouchableOpacity>
          </View>
          <FilterModal type={modalType} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "end",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modal: {
    padding: 20,
    width: "100%",
    backgroundColor: "#eee",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    gap: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  closeBtn: {
    backgroundColor: "#00215E",
    padding: 10,
    borderRadius: 10,
  },
});

export default FilterServicesModal;
