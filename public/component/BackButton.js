import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const BackButton = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require("../assets/back.png")}
          style={{ width: 50, height: 50 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
