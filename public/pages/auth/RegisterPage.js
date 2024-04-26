import { View, Text } from "react-native";
import React from "react";
import BackButton from "../../component/BackButton";

const RegisterPage = ({ navigation }) => {
  return (
    <View>
      <BackButton navigation={navigation} />
    </View>
  );
};

export default RegisterPage;
