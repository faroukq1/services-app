import { View, StyleSheet, Text } from "react-native";
import React from "react";
import DiscoverHeader from "../../component/DiscoverHeader";
import { useDiscoverContext } from "../../contextapi/useDiscoverContext";
import ServiceCard from "../../component/ServiceCard";
import SortFilterBar from "../../component/SortFilterBar";

const DiscoverPage = ({ navigation }) => {
  const { allServices } = useDiscoverContext();
  return (
    <View style={styles.container}>
      <DiscoverHeader navigation={navigation} />
      <SortFilterBar />
      <View style={{ flex: 1 }}>
        <ServiceCard data={allServices} />
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
});
export default DiscoverPage;
