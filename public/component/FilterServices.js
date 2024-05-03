import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { categoriesList } from "../util/DATA";

const FilterServices = () => {
  const [filterOptions, setFilterOptions] = useState([
    {
      id: 1,
      text: "Location",
      options: ["1km", "2km", "5km", "10km"],
    },
    {
      id: 2,
      text: "Categories",
      options: categoriesList,
    },
  ]);
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
              {options.map((text, index) => {
                return (
                  <TouchableOpacity style={styles.btn} key={index}>
                    <Text style={{ color: "#8C8C8C" }}>{text}</Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
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
    gap: 25,
  },
  btn: {
    padding: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#EDEDED",
    borderRadius: 10,
    marginRight: 10,
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default FilterServices;
