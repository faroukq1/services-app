import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";

const AddService = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const getPermissionAsync = async () => {
    if (Constants.platform.ios || Constants.platform.android) {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  const pickImage = async () => {
    await getPermissionAsync();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>AddService</Text>
      <View style={styles.imagePicker}></View>
      <View style={styles.content}>
        <TextInput style={styles.input} placeholder="service name" />
        <TextInput style={styles.input} placeholder="Description" />
        <TextInput style={styles.input} placeholder="Category" />
        <TextInput style={styles.input} placeholder="Price" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    gap: 10,
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
    flex: 0.5,
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default AddService;
