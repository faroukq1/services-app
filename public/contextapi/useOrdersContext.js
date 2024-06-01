import React, { createContext, useContext, useEffect, useState } from "react";
import useFetchHook from "../util/useFetchHook";
import { useGlobalContext } from "./useGlobalContext";
import { useDiscoverContext } from "./useDiscoverContext";

const ordersProvider = createContext();

export const OrdersProvider = ({ children }) => {
  const [myOrders, setMyOrders] = useState([]);
  const { userInformation } = useGlobalContext();
  const { allServices } = useDiscoverContext();
  const [pocketModal, setPocketModal] = useState(false);
  const [notificationModal, setNotificationModal] = useState(false);
  const [notifcationData, setNotificationData] = useState([]);
  const { user_id } = userInformation;
  useEffect(() => {
    const fetchMyOrders = async () => {
      try {
        const response = await useFetchHook(`/api/order/userorders/${user_id}`);
        const data = response.data;
        const orderList = [];
        for (let i = 0; i < data.length; i++) {
          const service_id = data[i].service_id;
          const item = data[i];

          for (let j = 0; j < allServices.length; j++) {
            if (service_id === allServices[j].service_id) {
              const serviceDetails = {
                serviceName: allServices[j].service_name,
                serviceCategory: allServices[j].service_category,
              };
              orderList.push({ ...item, serviceDetails, service_id });
            }
          }
        }

        setMyOrders(orderList);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchMyOrders();
  }, [pocketModal]);

  useEffect(() => {
    const getUserOrderAsNotification = async () => {
      try {
        const response = await useFetchHook(
          `/api/order/notification/${user_id}`
        );
        const data = response.data;
        setNotificationData(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getUserOrderAsNotification();
  }, [notificationModal]);

  return (
    <ordersProvider.Provider
      value={{
        myOrders,
        setMyOrders,
        pocketModal,
        setPocketModal,
        notificationModal,
        setNotificationModal,
        notifcationData,
      }}
    >
      {children}
    </ordersProvider.Provider>
  );
};

export const useOrdersContext = () => useContext(ordersProvider);
