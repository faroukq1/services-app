import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useDiscoverContext } from "../contextapi/useDiscoverContext";

const SortFilterBar = () => {
  const { setModalVisible, setModalType } = useDiscoverContext();
  const handlePress = (type) => {
    setModalType(type);
    setModalVisible(true);
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
          onPress={() => handlePress("sort")}
        >
          <Text style={styles.btn}>Sort</Text>
          <Image
            style={styles.img}
            source={require("../assets/bottomarrow.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity onPress={() => handlePress("filter")}>
          <Text style={styles.btn}>Filter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    borderColor: "#eee",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    fontSize: 16,
  },
  img: {
    width: 10,
    height: 10,
  },
});
export default SortFilterBar;
