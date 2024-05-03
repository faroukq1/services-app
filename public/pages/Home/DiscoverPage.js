import { View, StyleSheet } from "react-native";
import DiscoverHeader from "../../component/DiscoverHeader";
import { useDiscoverContext } from "../../contextapi/useDiscoverContext";
import ServiceCard from "../../component/ServiceCard";
import SortFilterBar from "../../component/SortFilterBar";
import FilterServicesModal from "../../component/FilterServicesModal";

const DiscoverPage = ({ navigation }) => {
  const { allServices, modalVisible, setModalVisible, modalType } =
    useDiscoverContext();
  return (
    <View style={styles.container}>
      <DiscoverHeader navigation={navigation} />
      <SortFilterBar />
      <View style={{ flex: 1 }}>
        <ServiceCard data={allServices} />
      </View>
      <FilterServicesModal
        modalType={modalType}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
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
});
export default DiscoverPage;
