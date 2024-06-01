import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import useFetchHook from "../util/useFetchHook";

const PictureContainer = ({ navigation, service_id, service_image }) => {
  const mainPicture = `http://192.168.1.7:3000/picture/${service_image}`;
  const [allImages, setAllImages] = useState([]);
  useEffect(() => {
    const getAllImages = async () => {
      try {
        const response = await useFetchHook(
          `/api/services/allimages/${service_id}`
        );
        const data = response.data;
        setAllImages(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllImages();
  }, []);
  return (
    <View style={styles.pictureContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("discover")}>
          <Image style={styles.img} source={require("../assets/back.png")} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={styles.img} source={require("../assets/star.png")} />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.mainImage}
        source={{
          uri: mainPicture,
        }}
      />

      <View style={styles.serviceImages}>
        <View style={{ flexDirection: "row", gap: 3 }}>
          {allImages.map((item, i) => {
            const { image_url } = item;
            return (
              <TouchableOpacity key={i}>
                <Image
                  style={styles.previewImg}
                  source={{
                    uri: `http://192.168.1.7:3000/picture/${image_url}`,
                  }}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pictureContainer: {
    flex: 0.9,
    marginBottom: 10,
  },
  header: {
    position: "relative",
    zIndex: 10,
    height: 64,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  mainImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  img: {
    borderRadius: 100,
    width: 30,
    height: 30,
  },
  serviceImages: {
    width: "100%",
    borderRadius: 5,
    position: "absolute",
    padding: 3,
    bottom: 15,
    flexDirection: "row",
    justifyContent: "center",
    gap: 3,
    height: 60,
    overflow: "hidden",
  },
  previewImg: {
    borderWidth: 2,
    borderColor: "#1976D2",
    borderRadius: 5,
    width: 65,
    height: "100%",
  },
});

export default PictureContainer;
