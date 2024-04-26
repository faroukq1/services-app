import { View, Text, StatusBar, StyleSheet } from "react-native";
import React from "react";
import BackButton from "../../component/BackButton";
import AuthHeader from "../../component/AuthHeader";

const LoginPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <BackButton navigation={navigation} />
      </View>

      <AuthHeader mainText="Welcome" subText="Sing in to continue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LoginPage;
