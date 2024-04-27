import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const EditProfileSettingItem = ({ text, value, readOnly }) => {
  const [edit, setEdit] = useState(readOnly);
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.text}>{text}</Text>
      <TextInput
        style={styles.input}
        placeholder={text}
        value={value}
        readOnly={edit}
      />
      <TouchableOpacity style={styles.editBtn} onPress={() => setEdit(!edit)}>
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
