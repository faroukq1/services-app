import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useDiscoverContext } from "../contextapi/useDiscoverContext";
import FilterButton from "./FilterButton";

const FilterServices = () => {
  const { setModalVisible, filterOptions, setServiceFilter } =
    useDiscoverContext();

  const handleFilter = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      {filterOptions.map(({ id, text, options }) => {
        return (
          <View key={id}>
            <Text style={styles.text}>{text}</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.filterContainer}
            >
              <FilterButton data={options} category={text} />
            </ScrollView>
          </View>
        );
      })}
      <TouchableOpacity style={styles.filterBtn} onPress={() => handleFilter()}>
        <Text>Filter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 25,
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 10,
  },
  filterBtn: {
    backgroundColor: "#1976d2",
    padding: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
    textAlign: "center",
    color: "white",
  },
});

export default FilterServices;
