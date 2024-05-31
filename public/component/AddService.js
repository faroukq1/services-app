import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Touchable,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import useFetchHook from "../util/useFetchHook";
import { useGlobalContext } from "../contextapi/useGlobalContext";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import { useDiscoverContext } from "../contextapi/useDiscoverContext";

const AddService = () => {
  const { userInformation } = useGlobalContext();
  const userId = userInformation.user_id;
  const navigation = useNavigation();
  const [serviceData, setServiceData] = useState({
    user_id: userId,
    service_name: "",
    service_description: "",
    service_category: "",
    service_price: 0,
    service_image: "",
    service_rating: 0,
    service_creation_date: new Date().toISOString().substring(0, 10),
  });
  const { addServiceIndicator, setAddServiceIndicator } = useDiscoverContext();
  const handlePostService = async () => {
    try {
      const response = await useFetchHook.post("/api/services/", serviceData);
      if (response.status === 200) {
        Toast.show({
          type: "success",
          text1: "Service added successful",
        });
      }
      setAddServiceIndicator(!addServiceIndicator);
      navigation.navigate("home");
    } catch (error) {
      console.log(error.message);
      Toast.show({
        type: "error",
        text1: "something went wrong",
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>AddService</Text>
      <TouchableOpacity style={styles.imagePicker}>
        <Image
          style={styles.image}
          source={require("../assets/addservice.png")}
        />
      </TouchableOpacity>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="service name"
          onChange={(e) => {
            setServiceData({
              ...serviceData,
              service_name: e.nativeEvent.text,
            });
          }}
        />
        <TextInput
          onChange={(e) => {
            setServiceData({
              ...serviceData,
              service_description: e.nativeEvent.text,
            });
          }}
          style={styles.input}
          placeholder="Description"
        />
        <TextInput
          onChange={(e) => {
            setServiceData({
              ...serviceData,
              service_category: e.nativeEvent.text,
            });
          }}
          style={styles.input}
          placeholder="Category"
        />
        <TextInput
          onChange={(e) => {
            setServiceData({
              ...serviceData,
              service_price: e.nativeEvent.text,
            });
          }}
          style={styles.input}
          placeholder="Price"
        />
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => handlePostService()}>
        <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
          Add Service
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "white",
    padding: 20,
    gap: 5,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "500",
    letterSpacing: 2,
  },
  input: {
    backgroundColor: "white",
    marginTop: 10,
  },
  imagePicker: {
    flex: 1,
    borderColor: "#888888",
    borderWidth: 1,
    borderRadius: 5,
  },
  btn: {
    padding: 10,
    backgroundColor: "red",
    borderWidth: 1,
    borderColor: "#EDEDED",
    borderRadius: 10,
    marginTop: 20,
    justifyContent: "center",
    alignContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default AddService;
