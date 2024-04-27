import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import SettingItem from "../../component/SettingItem";
import { useGlobalContext } from "../../contextapi/useGlobalContext";
import Setting from "../../component/Setting";

const AccountPage = ({ navigation }) => {
  const { setIsLogin, setUserInformation } = useGlobalContext();
  const handleLogOut = () => {
    setUserInformation({});
    setIsLogin(false);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("home")}>
        <Image
          style={styles.backImage}
          source={require("../../assets/back.png")}
        />
      </TouchableOpacity>
      <View style={styles.settingTextContainer}>
        <Text style={styles.settingText}>Setting</Text>
      </View>
      <Setting handleLogOut={handleLogOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  backImage: {
    marginTop: 15,
    marginBottom: 15,
    width: 50,
    height: 50,
  },
  settingTextContainer: {
    flex: 0.3,
    justifyContent: "center",
  },
  settingText: {
    fontSize: 40,
    fontWeight: "600",
    letterSpacing: 2,
  },
  image: {
    width: 25,
    height: 25,
    transform: [{ rotate: "180deg" }],
  },
  accountSettingBtn: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  btnText: {
    color: "#777777",
  },
  logoutContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  logout: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    height: 50,
    width: 100,
    borderRadius: 10,
  },
});
export default AccountPage;
