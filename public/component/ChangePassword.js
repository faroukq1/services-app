import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useGlobalContext } from "../contextapi/useGlobalContext";
import Toast from "react-native-toast-message";
import axios from "axios";

const ChangePassword = ({ setChangePassword }) => {
  const { setUserInformation, userInformation } = useGlobalContext();
  const currentPassword = userInformation.user_password;
  const [newPassword, setNewPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const isValid = () => {
    return (
      currentPassword == newPassword.currentPassword &&
      newPassword.newPassword == newPassword.confirmNewPassword
    );
  };
  const isCurrentPassword = () => {
    return currentPassword == newPassword.currentPassword;
  };

  const isSamePassword = () => {
    return newPassword.newPassword == newPassword.confirmNewPassword;
  };
  const handlePatchPassword = async () => {
    if (isValid()) {
      const UPDATE_PASSWORD = `http://192.168.1.7:3000/api/user/update/${userInformation.user_id}`;
      try {
        await axios.patch(UPDATE_PASSWORD, {
          column: "user_password",
          newData: newPassword.newPassword,
        });
        Toast.show({
          type: "success",
          text1: "Password changed successfully",
        });
        setUserInformation({
          ...userInformation,
          user_password: newPassword.newPassword,
        });
        setChangePassword(false);
      } catch (error) {
        console.log(error);
        Toast.show({
          type: "error",
          text1: "Something went wrong",
        });
      }
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Current Password"
        secureTextEntry
        onChange={(e) =>
          setNewPassword({
            ...newPassword,
            currentPassword: e.nativeEvent.text,
          })
        }
      />
      <Text style={[styles.error, !isCurrentPassword() && { display: "flex" }]}>
        incorect current password
      </Text>
      <TextInput
        style={styles.input}
        placeholder="New Password"
        secureTextEntry
        onChange={(e) =>
          setNewPassword({ ...newPassword, newPassword: e.nativeEvent.text })
        }
      />
      <Text style={[styles.error, !isSamePassword() && { display: "flex" }]}>
        new password should be same
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Confirm New Password"
        secureTextEntry
        onChange={(e) =>
          setNewPassword({
            ...newPassword,
            confirmNewPassword: e.nativeEvent.text,
          })
        }
      />
      <Text style={[styles.error, !isSamePassword() && { display: "flex" }]}>
        new password should be same
      </Text>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity
          onPress={() => setChangePassword(false)}
          style={[styles.button, { backgroundColor: "#ff7400" }]}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePatchPassword()}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#999999",
    marginBottom: 20,
    paddingVertical: 20,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  errorMessage: {
    color: "red",
    marginBottom: 10,
  },
  error: {
    color: "red",
    display: "none",
    marginBottom: 10,
  },
});

export default ChangePassword;
