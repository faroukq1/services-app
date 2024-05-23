import React, { createContext, useContext, useEffect, useState } from "react";
import useFetchHook from "../util/useFetchHook";

const appHomeContext = createContext();

export const AppHomeProvider = ({ children }) => {
  const [selectedCategorie, setSelectedCategorie] = useState("All");
  const [recommendedServices, setRecommendedServices] = useState([]);
  const [searchRecommendedServices, setSearchRecommendedServices] =
    useState("");
  const [openPocketModal, setOpenPocketModal] = useState(false);
  useEffect(() => {
    const getRecommendedServices = async () => {
      try {
        const response = await useFetchHook.get(
          "/api/services/recomend/highrating"
        );
        const data = response.data;

        if (selectedCategorie !== "All") {
          const filtredServicesList = data.filter(
            (item) => item.service_category === selectedCategorie
          );
          setRecommendedServices(filtredServicesList);
          return;
        }

        if (searchRecommendedServices.length !== "") {
          const filtredServicesList = data.filter((item) => {
            return item.service_name
              .toLowerCase()
              .includes(searchRecommendedServices.toLowerCase());
          });
          setRecommendedServices(filtredServicesList);
          return;
        }
      } catch (error) {
        console.log(error);
      }
    };

    getRecommendedServices();
  }, [selectedCategorie, searchRecommendedServices]);
  return (
    <appHomeContext.Provider
      value={{
        selectedCategorie,
        setSelectedCategorie,
        recommendedServices,
        setRecommendedServices,
        searchRecommendedServices,
        setSearchRecommendedServices,
        openPocketModal,
        setOpenPocketModal,
      }}
    >
      {children}
    </appHomeContext.Provider>
  );
};

export const useHomeContext = () => useContext(appHomeContext);
