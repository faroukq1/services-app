import React, { createContext, useContext, useEffect, useState } from "react";
import useFetchHook from "../util/useFetchHook";

const appDiscoverContext = createContext();

export const AppDiscoverProvider = ({ children }) => {
  const [allServices, setAllServices] = useState([]);
  const [searchAllServices, setSearchAllServices] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState("");
  const [sortingOptions, setSortingOption] = useState([
    "Most recent",
    "Most popular",
    "Highest price",
    "Lowest price",
    "Alphabetically",
  ]);
  const [selectedSortingOption, setselectedSortingOption] = useState("");
  useEffect(() => {
    const fetchAllProduct = async () => {
      try {
        const response = await useFetchHook.get("api/services/");
        const data = response.data;
        setAllServices(data);
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
        modalVisible,
        setModalVisible,
        modalType,
        setModalType,
        selectedSortingOption,
        setselectedSortingOption,
        sortingOptions,
        setSortingOption,
      }}
    >
      {children}
    </appDiscoverContext.Provider>
  );
};

export const useDiscoverContext = () => useContext(appDiscoverContext);
