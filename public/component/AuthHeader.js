import { View, Text } from "react-native";
import React from "react";

const AuthHeader = ({ mainText, subText }) => {
  return (
    <View
      style={{
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 40,
          fontWeight: "bold",
          color: "#00004C",
        }}
      >
        {mainText}
      </Text>
      <Text style={{ fontSize: 20, color: "#7C7ABB" }}>{subText}</Text>
    </View>
  );
};

export default AuthHeader;
