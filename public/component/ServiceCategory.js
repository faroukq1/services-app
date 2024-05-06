import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const ServiceCategory = ({ service_category, service_rating }) => {
  return (
    <View style={styles.category}>
      <Text style={styles.categoryText}>{service_category}</Text>
      <Text style={{ color: "#1976D2" }}>
        <Icon
          name="star"
          size={15}
          color={service_rating > 0 ? "orange" : "grey"}
        />
        {"  " + service_rating}
        {` (10 reviews) `}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    flex: 0.15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  categoryText: {
    fontSize: 12,
    color: "white",
    padding: 7,
    backgroundColor: "#1976D2",
    borderRadius: 10,
  },
});

export default ServiceCategory;
