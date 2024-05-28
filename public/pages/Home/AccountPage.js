import React, { useEffect, useState } from "react";
import ProfileSettingEdit from "../../component/ProfileSettingEdit";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useGlobalContext } from "../../contextapi/useGlobalContext";
import useFetchHook from "../../util/useFetchHook";
import { useNavigation } from "@react-navigation/native";
import { useWishListContext } from "../../contextapi/useWishListContext";
const AccountPage = () => {
  const navigation = useNavigation();
  const [editSetting, setEditSetting] = useState(false);
  const { accountDetailsById, userInformation } = useGlobalContext();
  const [accountPageData, setAccountPageData] = useState([]);
  const [accountServices, setAccountServices] = useState([]);
  const { setServiceID } = useWishListContext();
  useEffect(() => {
    const getAccountDetailsById = async () => {
      try {
        const response = await useFetchHook.get(
          `api/user/${accountDetailsById}`
        );
        const data = response.data.data[0];
        setAccountPageData(data);
      } catch (error) {
        console.log(error);
      }
    };

    const getAccountServices = async () => {
      try {
        const response = await useFetchHook(
          `/api/services/user/${accountDetailsById}`
        );
        const data = response.data;
        setAccountServices(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAccountServices();
    getAccountDetailsById();
  }, [accountDetailsById]);

  const handleGetService = (id) => {
    setServiceID(id);
    navigation.navigate("wishlist");
  };

  if (!accountPageData)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );

  return (
    <>
      {editSetting ? (
        <ProfileSettingEdit setEditSetting={setEditSetting} />
      ) : (
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.header}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 20,
              }}
            >
              <TouchableOpacity onPress={() => navigation.navigate("home")}>
                <Image
                  source={require("../../assets/back.png")}
                  style={[
                    styles.img,
                    {
                      borderWidth: 1,
                      borderRadius: 100,
                      padding: 10,
                      borderColor: "black",
                    },
                  ]}
                />
              </TouchableOpacity>
              <Text style={styles.title}>Account</Text>
            </View>
            {accountPageData.user_id == userInformation.user_id && (
              <TouchableOpacity onPress={() => setEditSetting(true)}>
                <Image
                  source={require("../../assets/icon.png")}
                  style={styles.img}
                />
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.profileSection}>
            <Image
              style={styles.profileImg}
              source={require("../../assets/avatar.png")}
            />
            <View style={styles.profileDetails}>
              <Text style={{ color: "white", fontWeight: "600", fontSize: 20 }}>
                {accountPageData.user_name}
              </Text>
              <Text style={{ color: "white", fontWeight: "600" }}>
                {accountPageData.full_name}
              </Text>
              <Text style={{ color: "white" }}>
                {accountPageData.user_adress}
              </Text>
              <Text style={{ color: "white" }}>
                {accountPageData.phone_number}
              </Text>
            </View>
          </View>
          <Text style={{ fontSize: 20, fontWeight: "600" }}>
            {accountPageData.user_id === userInformation.user_id
              ? "My Services"
              : "Services"}
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {accountServices.map((item, index) => {
              const { service_name, service_image, service_category } = item;
              return (
                <View style={styles.service} key={index}>
                  <Image
                    style={styles.serviceImg}
                    source={require("../../assets/defaultservicepic.jpg")}
                  />
                  <View style={styles.serviceDetails}>
                    <View>
                      <Text style={{ fontSize: 17, fontWeight: "600" }}>
                        {service_category}
                      </Text>
                      <Text>{service_name}</Text>
                    </View>
                    <View>
                      <TouchableOpacity
                        onPress={() => handleGetService(item.service_id)}
                      >
                        <Text style={styles.serviceBtn}>View Details</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            })}
          </ScrollView>
          <Text style={{ fontSize: 20, fontWeight: "600" }}>Reviews</Text>
          <View style={styles.reviews}>
            <Text>No reviews</Text>
          </View>
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 20,
  },
  img: {
    width: 30,
    height: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 25,
    fontWeight: "600",
  },
  profileSection: {
    width: "100%",
    height: 300,
    backgroundColor: "#2C4E80",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 20,
  },
  profileImg: {
    marginTop: 10,
    resizeMode: "contain",
    borderColor: "red",
    width: "50%",
    height: "50%",
  },
  profileDetails: {
    marginTop: 20,
    alignItems: "center",
    gap: 5,
  },
  service: {
    padding: 10,
    gap: 20,
    width: 200,
    marginRight: 20,
    height: 300,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 20,
  },
  serviceImg: {
    height: 150,
    width: "100%",
    resizeMode: "stretch",
    borderRadius: 10,
  },
  serviceDetails: {
    justifyContent: "space-between",
    gap: 20,
  },
  serviceBtn: {
    color: "#1976D2",
    fontWeight: "bold",
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    textAlign: "center",
  },
});

export default AccountPage;
