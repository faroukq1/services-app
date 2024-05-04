import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import FilterModal from "./FilterModal";
import { useDiscoverContext } from "../contextapi/useDiscoverContext";

const FilterServicesModal = ({ modalType, setModalVisible, modalVisible }) => {
  const { setServiceFilter } = useDiscoverContext();
  const handleCleanFilter = () => {
    setServiceFilter({
      Location: "",
      Category: "",
    });
    setModalVisible(false);
  };
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={setModalVisible}
    >
      <View style={styles.container}>
        <View
          style={[
            styles.modal,
            modalType === "sort" ? { height: 170 } : { height: 320 },
          ]}
        >
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.closeBtn}
              onPress={handleCleanFilter}
            >
              <Image
                style={styles.img}
                source={require("../assets/trash.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => setModalVisible(false)}
            >
              <Image
                style={styles.img}
                source={require("../assets/close.png")}
              />
            </TouchableOpacity>
          </View>
          <FilterModal type={modalType} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "end",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modal: {
    padding: 20,
    width: "100%",
    backgroundColor: "#eee",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    gap: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  closeBtn: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  img: {
    width: 20,
    height: 20,
  },
});

export default FilterServicesModal;
