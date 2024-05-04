import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useDiscoverContext } from "../contextapi/useDiscoverContext";

const SortServices = () => {
  const {
    selectedSortingOption,
    setselectedSortingOption,
    sortingOptions,
    setModalVisible,
  } = useDiscoverContext();
  const handleSelectPress = (text) => {
    setselectedSortingOption(text);
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      {sortingOptions.map((text, index) => {
        return (
          <TouchableOpacity
            onPress={() => handleSelectPress(text)}
            style={[
              styles.btn,
              selectedSortingOption === text && { backgroundColor: "#1976d2" },
            ]}
            key={index}
          >
            <Text
              style={[
                { color: "#8C8C8C" },
                selectedSortingOption === text && { color: "white" },
              ]}
            >
              {text}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
  btn: {
    padding: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#EDEDED",
    borderRadius: 10,
  },
});

export default SortServices;
