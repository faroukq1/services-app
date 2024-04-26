import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  useWindowDimensions,
} from "react-native";
import React, { useRef, useState } from "react";
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
  {
    id: 5,
    title: "Let's get started",
    subtitle: "",
    description:
      "Let's get started! Dive into a world of convenience and seamless service solutions right from your fingertips.",
    image: require("../../assets/start.png"),
  },
];
const Welcome = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const [currentPage, setCurrentPage] = useState(0);
  const flatListRef = useRef(null);

  const onPageChange = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const newPage = Math.floor(offsetX / width);

    if (newPage === currentPage) {
      setCurrentPage(newPage);
      return;
    }
  };

  const scrollToPage = (pageNumber) => {
    flatListRef.current.scrollToIndex({
      index: pageNumber,
      Animated: true,
    });
  };

  const handlePress = () => {
    const nextPage =
      currentPage > welcomeSlider.length - 2 ? 0 : currentPage + 1;
    setCurrentPage(nextPage);
    scrollToPage(nextPage);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={welcomeSlider}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <WelcomePageItem item={item} />}
        horizontal
        scrollEnabled={false}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onPageChange}
      />

      <View style={styles.footer}>
        {currentPage !== welcomeSlider.length - 1 ? (
          <>
            <View style={styles.dotsContainer}>
              {welcomeSlider.map((_, index) => {
                return (
                  <View
                    key={index.toString()}
                    style={[
                      styles.dots,
                      currentPage === index ? styles.activeDot : {},
                    ]}
                  ></View>
                );
              })}
            </View>
            <TouchableOpacity style={styles.nextBtn} onPress={handlePress}>
              <Text style={styles.nextBtnText}>Next</Text>
            </TouchableOpacity>
          </>
        ) : (
          <View style={[styles.footer, { justifyContent: "center" }]}>
            <TouchableOpacity
              style={styles.start}
              onPress={() => navigation.navigate("auth")}
            >
              <Text style={styles.nextBtnText}>Let's get started</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
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
  start: {
    height: 60,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#218D96",
    borderRadius: 10,
  },
});

export default Welcome;
