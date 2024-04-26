import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const WelcomePageItem = ({ item }) => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={[styles.container, { height: height, width }]}>
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>{item.title}</Text>
        <Text style={styles.subText}>{item.subtitle}</Text>
      </View>

      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />

      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 0.7,
  },
  textContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  mainText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#218D96",
  },
  subText: {
    fontSize: 20,
    marginTop: 10,
  },
  descriptionContainer: {
    padding: 20,
  },
  descriptionText: {
    textAlign: "center",
    lineHeight: 20,
    fontSize: 14,
    color: "#A9A9A9",
    fontWeight: "400",
  },
  footer: {
    padding: 20,
    width: "100%",
    height: 64,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  nextBtn: {
    height: 40,
    width: 75,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#218D96",
    borderRadius: 10,
  },
  nextBtnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default WelcomePageItem;
