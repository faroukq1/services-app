import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../contextapi/useGlobalContext";
import useFetchHook from "../../util/useFetchHook";
import RenderSale from "../../component/RenderSale";
const Dashboard = () => {
  const [mySales, setMysales] = useState([]);
  const { userInformation } = useGlobalContext();
  const userId = userInformation.user_id;
  useEffect(() => {
    const getMySales = async () => {
      try {
        const response = await useFetchHook.get(
          `/api/order/notification/${userId}`
        );
        const data = response.data;
        setMysales(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getMySales();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Dashboard</Text>
      <View style={styles.sales}>
        <Text style={styles.salesText}>You have {mySales.length} sales</Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          {mySales.length == 0 ? (
            <Text>You have no sales</Text>
          ) : (
            mySales.map((sale) => {
              return <RenderSale key={sale.order_id} {...sale} />;
            })
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
    gap: 20,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "500",
  },
  sales: {
    flex: 1,
    borderRadius: 5,
    gap: 20,
  },
  salesText: {
    fontSize: 20,
    fontWeight: "500",
    backgroundColor: "black",
    color: "white",
    width: "60%",
    padding: 10,
    textAlign: "center",
    borderRadius: 10,
  },
  scrollContainer: {
    gap: 20,
  },
});

export default Dashboard;
