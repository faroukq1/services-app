import React, { createContext, useContext, useEffect, useState } from "react";
import useFetchHook from "../util/useFetchHook";

const appWishListContext = createContext();
export const AppWishListProvider = ({ children }) => {
  const [serviceID, setServiceID] = useState(null);
  const [serviceData, setServiceData] = useState({});
  const [orderInfo, setOrderInfo] = useState({
    user_id: "",
    service_id: "",
    order_date: "",
    order_time: "",
    total_price: 0,
    payment_status: false,
    quantity: 1,
    delivery_status: false,
  });
  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        if (serviceID !== null) {
          const response = await useFetchHook(`/api/services/${serviceID}`);
          setServiceData(response.data);
          return;
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchServiceData();
  }, [serviceID]);

  return (
    <appWishListContext.Provider
      value={{
        serviceData,
        setServiceData,
        serviceID,
        setServiceID,
        orderInfo,
        setOrderInfo,
      }}
    >
      {children}
    </appWishListContext.Provider>
  );
};

export const useWishListContext = () => useContext(appWishListContext);
