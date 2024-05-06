import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";

const Review = ({ value }) => {
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.reviewerDetails}>
        <Image style={styles.img} source={require("../assets/avatar.png")} />
        <Text style={{ fontWeight: "bold" }}>John Doe</Text>
      </View>
      <View>
        <Text style={{ color: "#B4B4B8" }}>
          Exceptional service! Five-star experience from start to finish. Highly
          recommended. Professional, efficient, and reliable. Will definitely
          use again. Thank you!
        </Text>
      </View>
    </View>
  );
};
const Reviews = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {[1, 2, 3, 4, 5].map((_, i) => {
        return <Review key={i} />;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    gap: 10,
  },
  reviewContainer: {
    flex: 1,
    height: 140,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: "#B4B4B8",
    gap: 10,
  },
  img: {
    width: 30,
    height: 30,
  },
  reviewerDetails: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});

export default Reviews;
