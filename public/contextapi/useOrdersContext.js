import React, { createContext, useContext, useEffect, useState } from "react";
import useFetchHook from "../util/useFetchHook";
import { useGlobalContext } from "./useGlobalContext";
import { useDiscoverContext } from "./useDiscoverContext";

const ordersProvider = createContext();

export const OrdersProvider = ({ children }) => {
  const [myOrders, setMyOrders] = useState([]);
  const { userInformation } = useGlobalContext();
  const { allServices } = useDiscoverContext();
  const { user_id } = userInformation;
  useEffect(() => {
    const fetchMyOrders = async () => {
      try {
        const response = await useFetchHook(`/api/order/userorders/${user_id}`);
        const data = response.data;
        let services = data.map(({ service_id }) => service_id);
        services = Array.from(new Set(allServices));
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchMyOrders();
  }, []);

  return (
    <ordersProvider.Provider value={{ myOrders, setMyOrders }}>
      {children}
    </ordersProvider.Provider>
  );
};

export const useOrdersContext = () => useContext(ordersProvider);
