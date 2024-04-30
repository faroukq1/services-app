import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Categories = ({ selectedCategorie, setSelectedCategorie }) => {
  const categoriesList = [
    "All",
    "Plumber",
    "Bebe sitting",
    "Meal Preparing",
    "Home Automation",
  ];
  return (
    <View
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.container}
    >
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.categoryContainer}
      >
        {categoriesList.map((name, index) => {
          return (
            <TouchableOpacity
              onPress={() => setSelectedCategorie(name)}
              key={index}
              style={[
                styles.singleCategory,
                selectedCategorie === name && { backgroundColor: "#027C86" },
              ]}
            >
              <Text
                style={[
                  styles.categoryName,
                  selectedCategorie === name && {
                    color: "white",
                    fontWeight: "bold",
                  },
                ]}
              >
                {name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  categoryContainer: {
    flexDirection: "row",
    height: 45,
    gap: 30,
  },
  singleCategory: {
    marginRight: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ced4da",
    borderRadius: 10,
  },
  categoryName: {
    fontSize: 15,
    fontWeight: "600",
    color: "#999999",
  },
});
export default Categories;
