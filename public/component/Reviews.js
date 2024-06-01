import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import useFetchHook from "../util/useFetchHook";
const Review = ({ user_id, review_text }) => {
  console.log(review_text);
  const [userInfo, setUserInfo] = useState("");
  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await useFetchHook.get(`api/user/${user_id}`);
        const data = response.data.data[0];
        const { full_name } = data;
        setUserInfo(full_name);
      } catch (error) {
        console.log(error);
      }
    };
    getUserInfo();
  }, []);
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.reviewerDetails}>
        <Image style={styles.img} source={require("../assets/avatar.png")} />
        <Text style={{ fontWeight: "bold" }}>{userInfo}</Text>
      </View>
      <View>
        <Text style={{ color: "#B4B4B8" }}>{review_text}</Text>
      </View>
    </View>
  );
};
const Reviews = ({ allServiceReview }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {allServiceReview.map((item, i) => {
        return <Review key={i} {...item} />;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 90,
    gap: 10,
  },
  reviewContainer: {
    width: "100%",
    flex: 1,
    height: 140,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: "#B4B4B8",
    gap: 10,
  },
  img: {
    width: 30,
    height: 30,
  },
  reviewerDetails: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});

export default Reviews;
