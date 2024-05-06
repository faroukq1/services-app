import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import React from "react";

const PictureContainer = () => {
  const { height } = useWindowDimensions();
  return (
    <View style={styles.pictureContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("discover")}>
          <Image style={styles.img} source={require("../assets/back.png")} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={styles.img} source={require("../assets/heart.png")} />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.mainImage}
        source={require("../assets/defaultservicepic.jpg")}
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.serviceImages}
      >
        {[1, 2, 3, 4, 5, 6, 7].map((_, i) => {
          return (
            <TouchableOpacity key={i}>
              <Image
                style={styles.previewImg}
                source={require("../assets/defaultservicepic.jpg")}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  pictureContainer: {
    flex: 0.7,
    borderWidth: 2,
    backgroundColor: "white",
  },
  header: {
    position: "relative",
    zIndex: 10,
    backgroundColor: "transparent",
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
    padding: 20,
    borderRadius: 100,
    width: 0,
    height: 0,
  },
  serviceImages: {
    position: "absolute",
    padding: 3,
    bottom: 15,
    left: 7,
    backgroundColor: "white",
    flexDirection: "row",
    gap: 3,
    height: 64,
    justifyContent: "space-between",
    overflow: "hidden",
  },
  previewImg: {
    borderRadius: 5,
    width: 100,
    height: "100%",
  },
});

export default PictureContainer;
