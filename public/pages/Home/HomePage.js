import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import HomeHeader from "../../component/HomeHeader";
import SearchProductBar from "../../component/SearchProductBar";
import Categories from "../../component/Categories";

const HomePage = () => {
  const [selectedCategorie, setSelectedCategorie] = useState("All");
  return (
    <View style={styles.container}>
      <HomeHeader />
      <SearchProductBar />
      <Categories
        selectedCategorie={selectedCategorie}
        setSelectedCategorie={setSelectedCategorie}
      />
      <View style={styles.recommended}>
        <Text style={styles.recommendedText}>Recommended for You</Text>
        <TouchableOpacity style={styles.seeMore}>
          <Text style={styles.seeMoreText}>See More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  recommended: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  recommendedText: {
    fontSize: 17,
    fontWeight: "600",
  },
  seeMoreText: {
    color: "#027C86",
    fontWeight: "bold",
  },
});

export default HomePage;
