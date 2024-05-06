import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const WishListSectionButtons = ({ section, setSection }) => {
  const handlePress = (name) => {
    if (name === "About") {
      setSection({ about: true, gallery: false, reviews: false });
    } else if (name === "gallery") {
      setSection({ about: false, gallery: true, reviews: false });
    } else if (name === "Reviews") {
      setSection({ about: false, gallery: false, reviews: true });
    }
  };
  return (
    <View style={styles.section}>
      <TouchableOpacity onPress={() => handlePress("About")}>
        <Text
          style={[
            styles.sectionText,
            section.about && {
              borderBottomColor: "black",
              borderBottomWidth: 3,
            },
          ]}
        >
          About
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handlePress("gallery")}>
        <Text
          style={[
            styles.sectionText,
            section.gallery && {
              borderBottomColor: "black",
              borderBottomWidth: 3,
            },
          ]}
        >
          gallery
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handlePress("Reviews")}>
        <Text
          style={[
            styles.sectionText,
            section.reviews && {
              borderBottomColor: "black",
              borderBottomWidth: 3,
            },
          ]}
        >
          Reviews
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  sectionText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#3C3633",
    marginTop: 10,
    padding: 5,
    height: 35,
    width: 80,
    textAlign: "center",
  },
});

export default WishListSectionButtons;
