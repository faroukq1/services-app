import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import WelcomePageItem from "../../component/WelcomePageItem";

welcomeSlider = [
  {
    id: 1,
    title: "Welcome to",
    subtitle: "Services App",
    description: `Welcome to services where convenience meets reliability. Get ready to access top-notch services at your fingertips!`,
    image: require("../../assets/welcome.png"),
  },
  {
    id: 2,
    title: "share your",
    subtitle: "services here",
    description: `Welcome to services where convenience meets reliability. Get ready to access top-notch services at your fingertips!`,
    image: require("../../assets/share.png"),
  },
  {
    id: 3,
    title: "Easy ordering",
    subtitle: "delivery",
    description: `Welcome to services where convenience meets reliability. Get ready to access top-notch services at your fingertips!`,
    image: require("../../assets/order.png"),
  },
  {
    id: 4,
    title: "services",
    subtitle: "",
    description: `Welcome to services where convenience meets reliability. Get ready to access top-notch services at your fingertips!`,
    image: require("../../assets/working.png"),
  },
];
const Welcome = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const onPageChange = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const page = Math.floor(offsetX / welcomeSlider.length) / 90;
    setCurrentPage(page);
  };
  console.log(currentPage);
  return (
    <View>
      <FlatList
        data={welcomeSlider}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <WelcomePageItem item={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onPageChange}
      />

      <View style={styles.footer}>
        <View style={styles.dotsContainer}>
          {welcomeSlider.map((_, index) => {
            return (
              <View
                key={index.toString()}
                style={[
                  styles.dots,
                  Math.floor(currentPage) === index ? styles.activeDot : {},
                ]}
              ></View>
            );
          })}
        </View>
        <TouchableOpacity
          style={styles.nextBtn}
          onPress={() => setCurrentPage(currentPage >= 3 ? 0 : currentPage + 1)}
        >
          <Text style={styles.nextBtnText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: 20,
    width: "100%",
    height: 64,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
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
  dotsContainer: {
    flexDirection: "row",
    gap: 5,
  },
  dots: {
    borderWidth: 2,
    borderColor: "#218D96",
    width: 15,
    height: 15,
    borderRadius: 100,
  },
  activeDot: {
    backgroundColor: "#218D96",
  },
});

export default Welcome;
