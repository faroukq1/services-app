import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useWishListContext } from "../../contextapi/useWishListContext";
import PictureContainer from "../../component/PictureContainer";
import ServiceCategory from "../../component/ServiceCategory";
import WishListSectionButtons from "../../component/WishListSectionButtons";
import WishListServiceName from "../../component/WishListServiceName";
import AboutService from "../../component/AboutService";

const WishListPage = ({ navigation }) => {
  const { serviceData } = useWishListContext();
  const [section, setSection] = useState({
    about: true,
    gallery: false,
    reviews: false,
  });
  const {
    service_id,
    user_id,
    service_name,
    service_description,
    service_category,
    service_price,
    service_image,
    service_rating,
    profile_image,
    user_name,
    user_adress,
  } = serviceData;
  return (
    <View style={styles.container}>
      <PictureContainer />
      <ServiceCategory
        service_category={service_category}
        service_rating={service_rating}
      />
      <WishListServiceName
        service_name={service_name}
        user_adress={user_adress}
      />
      <WishListSectionButtons section={section} setSection={setSection} />
      {section.about && (
        <AboutService
          service_name={service_name}
          service_description={service_description}
          user_name={user_name}
        />
      )}
      <View style={styles.buy}>
        <View style={styles.price}>
          <Text style={styles.priceTitle}>Total Price</Text>
          <Text style={{ fontWeight: 600, fontSize: 18 }}>
            ${service_price} /h
          </Text>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  buy: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    height: 64,
    elevation: 6,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  price: {
    flex: 0.4,
    width: "100%",
    gap: 5,
  },
  priceTitle: {
    fontSize: 18,
    color: "#B4B4B8",
  },
  btn: {
    flex: 0.6,
    backgroundColor: "#1976D2",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 18,
    color: "white",
  },
});

export default WishListPage;
