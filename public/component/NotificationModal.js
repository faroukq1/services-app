import {
  View,
  Text,
  Modal,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useOrdersContext } from "../contextapi/useOrdersContext";
import CurrentOrderNotification from "./CurrentOrderNotification";

const NotificationModal = () => {
  const { notificationModal, setNotificationModal, notifcationData } =
    useOrdersContext();
  return (
    <Modal visible={notificationModal} transparent={true} animationType="fade">
      <View style={styles.container}>
        <View style={styles.content}>
          <View
            style={{
              flexDirection: "row-reverse",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontWeight: 600, fontSize: 18 }}>Notification</Text>
            <TouchableOpacity onPress={() => setNotificationModal(false)}>
              <Image
                style={styles.img}
                source={require("../assets/back.png")}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.contentContainer}>
            {notifcationData.map((item, index) => {
              return <CurrentOrderNotification {...item} key={index} />;
            })}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  content: {
    flex: 0.9,
    width: "90%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  img: {
    width: 30,
    height: 30,
  },
  contentContainer: {
    flex: 1,
    marginTop: 10,
    borderRadius: 5,
  },
});
export default NotificationModal;
