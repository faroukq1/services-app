import React, { createContext, useContext, useEffect, useState } from "react";
import useFetchHook from "../util/useFetchHook";

const appDiscoverContext = createContext();

export const AppDiscoverProvider = ({ children }) => {
  const [allServices, setAllServices] = useState([]);
  const [searchAllServices, setSearchAllServices] = useState("");

  useEffect(() => {
    const fetchAllProduct = async () => {
      try {
        const response = await useFetchHook.get("api/services/");
        const data = response.data;
        setAllServices(data);
        console.log(data.length);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllProduct();
  }, []);
  return (
    <appDiscoverContext.Provider
      value={{
        allServices,
        setAllServices,
        setSearchAllServices,
      }}
    >
      {children}
    </appDiscoverContext.Provider>
  );
};

export const useDiscoverContext = () => useContext(appDiscoverContext);
