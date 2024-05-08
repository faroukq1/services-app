import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import HomeHeader from "../../component/HomeHeader";
import SearchProductBar from "../../component/SearchProductBar";
import Categories from "../../component/Categories";
import { useHomeContext } from "../../contextapi/useHomeContext";
import ServiceCard from "../../component/ServiceCard";

const HomePage = ({ navigation }) => {
  const { recommendedServices, setSearchRecommendedServices } =
    useHomeContext();

  return (
    <View style={styles.container}>
      <HomeHeader />
      <SearchProductBar setSearchFunction={setSearchRecommendedServices} />
      <Categories />
      <View style={styles.recommended}>
        <Text style={styles.recommendedText}>Recommended for You</Text>
        <TouchableOpacity
          style={styles.seeMore}
          onPress={() => navigation.navigate("discover")}
        >
          <Text style={styles.seeMoreText}>See More</Text>
        </TouchableOpacity>
      </View>

      <ServiceCard navigation={navigation} data={recommendedServices} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  recommended: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20,
  },
  recommendedText: {
    fontSize: 17,
    fontWeight: "600",
  },
  seeMoreText: {
    color: "#1976d2",
    fontWeight: "bold",
  },
});

export default HomePage;
