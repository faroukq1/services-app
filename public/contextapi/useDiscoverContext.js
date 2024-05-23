import React, { createContext, useContext, useEffect, useState } from "react";
import useFetchHook from "../util/useFetchHook";
import { filterOptionList, sortingOptionsList } from "../util/DATA";
const appDiscoverContext = createContext();

export const AppDiscoverProvider = ({ children }) => {
  const [allServices, setAllServices] = useState([]);
  const [searchAllServices, setSearchAllServices] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState("");
  const [sortingOptions, setSortingOption] = useState(sortingOptionsList);
  const [selectedSortingOption, setselectedSortingOption] = useState("");
  const [filterOptions, setFilterOptions] = useState(filterOptionList);
  const [serviceFilter, setServiceFilter] = useState({
    Location: "",
    Category: "",
  });
  useEffect(() => {
    const fetchAllProduct = async () => {
      try {
        // filter services based on category
        if (serviceFilter.Category !== "" && serviceFilter.Category !== "All") {
          const response = await useFetchHook.get(
            `api/services/category/${serviceFilter.Category}`
          );
          const data = response.data;
          setAllServices(data);
          return;
        }

        // setAllServices(data);
        const response = await useFetchHook.get("api/services/");
        const data = response.data;
        // filter services based on search bar
        if (searchAllServices.length !== "") {
          const filtredServicesList = data.filter((item) => {
            return item.service_name
              .toLowerCase()
              .includes(searchAllServices.toLowerCase());
          });
          setAllServices(filtredServicesList);
          return;
        }

        // set all services in case of no search or category filter
        setAllServices(data);
      } catch (error) {
        console.log("error from here " + error);
      }
    };

    fetchAllProduct();
  }, [searchAllServices, serviceFilter]);
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
        filterOptions,
        setFilterOptions,
        serviceFilter,
        setServiceFilter,
      }}
    >
      {children}
    </appDiscoverContext.Provider>
  );
};

export const useDiscoverContext = () => useContext(appDiscoverContext);
