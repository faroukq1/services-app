// RadioButton.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useWishListContext } from "../contextapi/useWishListContext";

const RadioButton = ({ selected, setSelected }) => {
  const { orderInfo, setOrderInfo } = useWishListContext();
  const handlePress = () => {
    setSelected(true);
    setOrderInfo({ ...orderInfo, payment_status: 0 });
  };
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={[styles.radio, selected && styles.selected]}>
        {selected && <View style={styles.innerCircle} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  radio: {
    height: 20,
    width: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  selected: {
    borderColor: "#6200ea",
  },
  innerCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "#6200ea",
  },
  label: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default RadioButton;
