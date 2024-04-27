import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const SettingItem = ({ image, text }) => {
  return (
    <View style={styles.accountSettingItem}>
      <Image style={styles.image} source={image} />
      <Text style={styles.settingText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 25,
    height: 25,
  },
  accountSettingItem: {
    paddingVertical: 20,
    flexDirection: "row",
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  settingText: {
    fontSize: 16,
    fontWeight: "400",
  },
});
export default SettingItem;
