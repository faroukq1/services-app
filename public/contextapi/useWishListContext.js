import React, { createContext, useContext, useEffect, useState } from "react";
import useFetchHook from "../util/useFetchHook";

const appWishListContext = createContext();
export const AppWishListProvider = ({ children }) => {
  const [serviceID, setServiceID] = useState(null);
  const [serviceData, setServiceData] = useState({});
  const [orderData, setOrderData] = useState({});
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
      }}
    >
      {children}
    </appWishListContext.Provider>
  );
};

export const useWishListContext = () => useContext(appWishListContext);
