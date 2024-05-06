import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React from "react";

const ServiceGallery = () => {
  // picture will be passed as a props
  return (
    <View style={styles.gallery}>
      <View style={styles.header}>
        <Text style={{ fontWeight: "bold" }}>
          Gallery
          <Text style={{ fontWeight: "normal" }}> ({25})</Text>
        </Text>
        <TouchableOpacity>
          <Text style={{ color: "#1976D2", fontWeight: "bold" }}>View All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.imageContainer}>
        {[1, 2, 3, 4, 5, 6].map((_, i) => {
          return (
            <Image
              style={styles.image}
              source={require("../assets/defaultservicepic.jpg")}
              key={i}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  gallery: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  imageContainer: {
    padding: 20,
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 10,
  },
  image: {
    borderRadius: 10,
    width: "48%",
    height: 150,
  },
});

export default ServiceGallery;
