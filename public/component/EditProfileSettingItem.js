import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../contextapi/useGlobalContext";
import Toast from "react-native-toast-message";

const EditProfileSettingItem = ({ text, value, readOnly, attribute }) => {
  const [edit, setEdit] = useState(readOnly);
  const [inputValue, setInputValue] = useState(value);
  const { userInformation } = useGlobalContext();
  const user_id = userInformation.user_id;

  const handlePress = () => {
    if (!edit) {
      setEdit(true);
      handleSave();
      return;
    }
    setEdit(false);
  };
  const handleSave = async () => {
    const UPDATE_URL = `http://192.168.1.7:3000/api/user/update/${user_id}`;
    try {
      const response = await axios.patch(UPDATE_URL, {
        column: attribute,
        newData: inputValue,
      });
      Toast.show({
        type: "success",
        text1: "Profile updated successfully",
        visibilityTime: 1000,
      });
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "sorry something went wrong",
        visibilityTime: 1000,
      });
    }
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.text}>{text}</Text>
      <TextInput
        style={styles.input}
        placeholder={text}
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
        readOnly={edit}
      />
      <TouchableOpacity style={styles.editBtn} onPress={handlePress}>
        <Text style={[styles.btnText, edit ? null : { color: "blue" }]}>
          {edit ? "Edit" : "Save"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 30,
  },
  input: {
    borderBottomWidth: 1,
    padding: 15,
    borderColor: "#eee",
  },
  text: {
    position: "absolute",
    left: 5,
    top: -10,
    zIndex: 10,

    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  editBtn: {
    position: "absolute",
    right: 10,
    top: 20,
  },
  btnText: {
    color: "#777777",
  },
});

export default EditProfileSettingItem;
