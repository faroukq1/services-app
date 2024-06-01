import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import useFetchHook from "../util/useFetchHook";

const ServiceGallery = ({ service_id }) => {
  const [allPicture, setAllPicture] = useState([]);
  useEffect(() => {
    const getAllPicture = async () => {
      try {
        const response = await useFetchHook(
          `/api/services/allimages/${service_id}`
        );
        const data = response.data;
        setAllPicture(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllPicture();
  }, []);
  console.log(allPicture);
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

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.imageContainer}
      >
        {allPicture.map((item, i) => {
          const { image_url } = item;
          return (
            <Image
              style={styles.image}
              source={{
                uri: `http://192.168.1.7:3000/picture/${image_url}`,
              }}
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
    paddingBottom: 90,
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
