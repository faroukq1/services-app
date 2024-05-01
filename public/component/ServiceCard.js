import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";

const ServiceCard = ({ data }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.recommendedProduct}
    >
      {data.map(
        ({ service_id, service_category, service_name, service_price }) => {
          return (
            <View style={styles.recommendedservicesCard} key={service_id}>
              <Image
                style={styles.cardImg}
                source={require("../assets/defaultservicepic.png")}
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
  );
};

const styles = StyleSheet.create({
  recommendedProduct: {},
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

export default ServiceCard;
