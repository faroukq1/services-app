import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useGlobalContext } from "../contextapi/useGlobalContext";

const EditProfile = ({ setEditProfile }) => {
  const { userInformation } = useGlobalContext();
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>User name</Text>
        <TextInput
          style={styles.input}
          placeholder="User name"
          value={userInformation.user_name}
          readOnly
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Full name</Text>
        <TextInput
          style={styles.input}
          placeholder="Full name"
          value={userInformation.full_name}
          readOnly
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={userInformation.email}
          readOnly
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Adress</Text>
        <TextInput
          style={styles.input}
          placeholder="Adress"
          value={userInformation.user_adress}
          readOnly
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Phone number</Text>
        <TextInput
          style={styles.input}
          placeholder="Phone number"
          value={userInformation.phone_number}
          readOnly
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Credit card number</Text>
        <TextInput
          style={styles.input}
          placeholder="Credit card number"
          value={userInformation.credit_card_number}
          readOnly
        />
      </View>
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
