import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useGlobalContext } from "../contextapi/useGlobalContext";
import Setting from "../component/Setting";
import EditProfile from "../component/EditProfile";
import ChangePassword from "../component/ChangePassword";

const ProfileSettingEdit = ({ setEditSetting }) => {
  const { setIsLogin, setUserInformation } = useGlobalContext();
  const [editProfile, setEditProfile] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const handleLogOut = () => {
    setUserInformation({});
    setIsLogin(false);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setEditSetting(false)}>
        <Image
          style={styles.backImage}
          source={require("../assets/back.png")}
        />
      </TouchableOpacity>
      <View style={styles.settingTextContainer}>
        <Text style={styles.settingText}>
          {editProfile ? "Edit profile" : "Setting"}
        </Text>
      </View>
      {editProfile ? (
        <EditProfile setEditProfile={setEditProfile} />
      ) : changePassword ? (
        <ChangePassword setChangePassword={setChangePassword} />
      ) : (
        <Setting
          setEditProfile={setEditProfile}
          setChangePassword={setChangePassword}
          handleLogOut={handleLogOut}
        />
      )}
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
    marginTop: 5,
    width: 50,
    height: 50,
  },
  settingTextContainer: {
    marginTop: 10,
    marginBottom: 10,
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
export default ProfileSettingEdit;
