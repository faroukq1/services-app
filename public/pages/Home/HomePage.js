import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import HomeHeader from "../../component/HomeHeader";
import SearchProductBar from "../../component/SearchProductBar";
import Categories from "../../component/Categories";
import { useHomeContext } from "../../contextapi/useHomeContext";

const HomePage = ({ navigation }) => {
  const { recommendedServices } = useHomeContext();

  return (
    <View style={styles.container}>
      <HomeHeader />
      <SearchProductBar />
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

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.recommendedProduct}
      >
        {recommendedServices.map(
          ({ service_id, service_category, service_name, service_price }) => {
            return (
              <View style={styles.recommendedservicesCard} key={service_id}>
                <Image
                  style={styles.cardImg}
                  source={require("../../assets/defaultservicepic.png")}
                />
                <View>
                  <Text
                    style={{
                      color: "#027C86",
                      fontWeight: "bold",
                    }}
                  >
                    {service_category}
                  </Text>
                  <Text style={{ fontSize: 15, fontWeight: 500 }}>
                    {service_name}
                  </Text>
                  <Text style={{ fontWeight: "bold", marginTop: 10 }}>
                    ${service_price}
                  </Text>
                </View>
              </View>
            );
          }
        )}
      </ScrollView>
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
    marginBottom: 20,
  },
  recommendedText: {
    fontSize: 17,
    fontWeight: "600",
  },
  seeMoreText: {
    color: "#027C86",
    fontWeight: "bold",
  },
  recommendedservicesCard: {
    padding: 10,
    marginBottom: 10,
    width: "100%",
    justifyContent: "space-evenly",
    backgroundColor: "#F0ECE5",
    borderRadius: 10,
    gap: 20,
  },
  cardImg: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
});

export default HomePage;
