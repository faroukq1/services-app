import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useGlobalContext } from "../contextapi/useGlobalContext";
import EditProfileSettingItem from "./EditProfileSettingItem";

const EditProfile = ({ setEditProfile }) => {
  const { userInformation } = useGlobalContext();
  const [edit, setEdit] = useState(false);
  const inputList = [
    {
      id: 1,
      text: "User name",
      value: userInformation.user_name,
    },
    {
      id: 2,
      text: "Full name",
      value: userInformation.full_name,
    },
    {
      id: 3,
      text: "Email",
      value: userInformation.email,
    },
    {
      id: 4,
      text: "Phone number",
      value: userInformation.phone,
    },
    {
      id: 5,
      text: "Adress",
      value: userInformation.adress,
    },
    {
      id: 6,
      text: "Credit card number",
      value: userInformation.credit_card_number,
    },
  ];
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {inputList.map(({ id, text, value }) => {
        return (
          <EditProfileSettingItem key={id} text={text} value={value} readOnly />
        );
      })}
      <View>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => setEditProfile(false)}
        >
          <Text style={styles.backBtnText}>Back</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backBtnText: {
    fontSize: 16,
    fontWeight: "500",
    backgroundColor: "#ffc100",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    width: 100,
    textAlign: "center",
    color: "white",
  },
});

export default EditProfile;
