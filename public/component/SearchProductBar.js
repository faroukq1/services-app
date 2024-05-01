import { View, Text, TextInput, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useHomeContext } from "../contextapi/useHomeContext";
import debounce from "lodash/debounce";

const SearchProductBar = () => {
  const [inputValue, setInputValue] = useState("");
  const { setSearchRecommendedServices } = useHomeContext();

  const debounceInputValue = debounce((value) => {
    setSearchRecommendedServices(value);
  }, 500);
  const handleInputChange = (event) => {
    const value = event.nativeEvent.text;
    setInputValue(value);
    debounceInputValue(value);
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/search.png")} />
      <TextInput
        value={inputValue}
        style={styles.input}
        onChange={handleInputChange}
        placeholder="Search Recommended Product"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    position: "relative",
    flexDirection: "row",
  },
  image: {
    position: "absolute",
    zIndex: 10,
    left: 10,
    top: 19,
    width: 20,
    height: 20,
  },
  input: {
    flex: 1,
    padding: 15,
    paddingHorizontal: 40,
    backgroundColor: "#eee",
    borderRadius: 10,
  },
});

export default SearchProductBar;
