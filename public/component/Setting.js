import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import SettingItem from "./SettingItem";

const Setting = ({ handleLogOut }) => {
  return (
    <>
      <View>
        <SettingItem text="Account" image={require("../assets/account.png")} />

        <View style={styles.accountSettingItem}>
          <TouchableOpacity style={styles.accountSettingBtn}>
            <Text style={styles.btnText}>Edit Profile</Text>
            <Image
              style={styles.image}
              source={require("../assets/back.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.accountSettingBtn}>
            <Text style={styles.btnText}>Change Password</Text>
            <Image
              style={styles.image}
              source={require("../assets/back.png")}
            />
          </TouchableOpacity>
        </View>

        <SettingItem text="More" image={require("../assets/more.png")} />

        <View style={styles.accountSettingItem}>
          <TouchableOpacity style={styles.accountSettingBtn}>
            <Text style={styles.btnText}>Language</Text>
            <Image
              style={styles.image}
              source={require("../assets/back.png")}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.logoutContainer}>
        <TouchableOpacity style={styles.logout} onPress={handleLogOut}>
          <Image
            style={styles.image}
            source={require("../assets/logout.png")}
          />
          <Text style={{ fontWeight: "bold" }}>Logout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  accountSettingBtn: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  image: {
    width: 25,
    height: 25,
    transform: [{ rotate: "180deg" }],
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

export default Setting;
