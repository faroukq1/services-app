import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useGlobalContext } from "../contextapi/useGlobalContext";

const AboutService = ({
  profile_image,
  user_name,
  service_description,
  user_id,
}) => {
  const navigation = useNavigation();
  const { setAccountDetailsById } = useGlobalContext();
  const handleOpenProfile = () => {
    setAccountDetailsById(user_id);
    navigation.navigate("account");
  };
  return (
    <View style={styles.about}>
      <View style={styles.serviceDescription}>
        <Text style={{ fontWeight: 600, fontSize: 18 }}>About service</Text>
        <Text style={{ color: "#B4B4B8" }}>{service_description}</Text>
      </View>

      <View style={styles.provider}>
        <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
          <TouchableOpacity onPress={() => handleOpenProfile()}>
            <Image
              style={styles.img}
              source={require("../assets/avatar.png")}
            />
          </TouchableOpacity>
          <View style={styles.providerName}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              {user_name}
            </Text>
            <Text style={{ fontWeight: 600, color: "#B4B4B8" }}>
              Service provider
            </Text>
          </View>
        </View>
        <View style={styles.contact}>
          <TouchableOpacity>
            <Image source={require("../assets/chat.png")} style={styles.img} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  about: {
    flex: 1,
  },
  img: {
    width: 35,
    height: 35,
  },
  provider: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  providerName: {
    justifyContent: "center",
  },

  serviceDescription: {
    marginVertical: 15,
    paddingHorizontal: 20,
    gap: 5,
  },
});
export default AboutService;
