import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const ServiceCard = ({ data }) => {
  const RenderStart = ({ value }) => {
    const starts = Array(5).fill();
    return starts.map((_, index) => {
      return (
        <Icon
          key={index}
          name="star"
          size={20}
          color={index < value ? "orange" : "grey"}
        />
      );
    });
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.recommendedProduct}
    >
      {data.map(
        ({
          service_id,
          service_category,
          service_name,
          service_price,
          service_description,
          service_rating,
        }) => {
          return (
            <View style={styles.recommendedservicesCard} key={service_id}>
              <Image
                style={styles.cardImg}
                source={require("../assets/defaultservicepic.jpg")}
              />
              <View style={styles.descriptionContainer}>
                <View style={styles.actions}>
                  <View style={{ gap: 5 }}>
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: "#004080",
                        fontSize: 15,
                      }}
                    >
                      {service_category}
                    </Text>
                    <View style={{ flexDirection: "row", gap: 5 }}>
                      <RenderStart value={service_rating} />
                    </View>
                  </View>
                  <View style={styles.price}>
                    <Text style={styles.priceText}>{service_price}/hour</Text>
                  </View>
                </View>

                <View style={styles.description}>
                  <Text style={styles.nameText}>{service_name}</Text>
                  <Text style={styles.descText}>{service_description}</Text>
                  <TouchableOpacity style={styles.viewBtn}>
                    <Text
                      style={{
                        color: "#007bff",
                        fontSize: 15,
                        textAlign: "center",
                      }}
                    >
                      View Details
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  recommendedservicesCard: {
    borderRadius: 10,
    marginBottom: 10,
    width: "100%",
    justifyContent: "space-evenly",
    backgroundColor: "#ffdab9",
    gap: 20,
  },
  descriptionContainer: {
    padding: 15,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  cardImg: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: "100%",
    height: 200,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    gap: 10,
  },
  viewBtn: {
    borderRadius: 5,
    borderColor: "#E8E8E6",
    backgroundColor: "white",
    padding: 10,
  },
  priceText: {
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#1976d2",
    padding: 10,
    borderRadius: 10,
  },
  description: {
    marginTop: 10,
    width: "100%",
    gap: 20,
    paddingVertical: 10,
  },
  nameText: {
    color: "#333333",
    fontWeight: "bold",
    fontSize: 16,
  },
  descText: {
    lineHeight: 20,
    color: "#666666",
  },
});

export default ServiceCard;
