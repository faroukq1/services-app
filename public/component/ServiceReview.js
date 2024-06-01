import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import Reviews from "./Reviews";
import Toast from "react-native-toast-message";
import { useWishListContext } from "../contextapi/useWishListContext";
import useFetchHook from "../util/useFetchHook";
import { useGlobalContext } from "../contextapi/useGlobalContext";
const ServiceReview = () => {
  const { serviceID, setWriteReview, writeReview } = useWishListContext();
  const { userInformation } = useGlobalContext();
  const id = userInformation.user_id;
  const [reviewData, setReviewData] = useState({
    user_id: id,
    service_id: serviceID,
    review_text: "",
  });
  const [allServiceReview, setAllServiceReview] = useState([]);
  useEffect(() => {
    const getAllServiceReview = async () => {
      try {
        const response = await useFetchHook.get(
          `/api/order/review/${serviceID}`
        );
        const data = response.data;
        setAllServiceReview(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getAllServiceReview();
  }, [writeReview]);
  const handleSubmitReview = async () => {
    try {
      const response = await useFetchHook.post("/api/order/review", reviewData);
      if (response.status === 200) {
        setWriteReview(false);
        Toast.show({
          type: "success",
          text1: "Review submitted successfully",
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.reviewContainer}>
        {writeReview && (
          <View style={styles.reviews}>
            <Text style={{ fontWeight: "bold" }}>Your Review</Text>
            <TextInput
              onChange={(e) => {
                setReviewData({
                  ...reviewData,
                  review_text: e.nativeEvent.text,
                });
              }}
              placeholder="Write your review here..."
            />
            <TouchableOpacity style={styles.btn} onPress={handleSubmitReview}>
              <Text style={{ color: "white", fontWeight: "bold" }}>Submit</Text>
            </TouchableOpacity>
          </View>
        )}
        {!writeReview && <Reviews allServiceReview={allServiceReview} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 15,
  },
  img: {
    width: 30,
    height: 30,
  },
  reviews: {
    gap: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: "#B4B4B8",
    borderRadius: 5,
  },
  btn: {
    padding: 10,
    backgroundColor: "#B4B4B8",
    borderRadius: 5,
    alignItems: "center",
  },
  reviewContainer: {
    gap: 10,
    paddingTop: 10,
  },
});

export default ServiceReview;
