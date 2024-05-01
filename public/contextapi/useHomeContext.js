import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const appHomeContext = createContext();

export const AppHomeProvider = ({ children }) => {
  const [selectedCategorie, setSelectedCategorie] = useState("All");
  const [recommendedServices, setRecommendedServices] = useState([]);
  useEffect(() => {
    const getRecommendedServices = async () => {
      try {
        const RECOMMENDED_SERVICES_URL =
          "http://192.168.1.7:3000/api/services/recomend/highrating";
        const response = await axios.get(RECOMMENDED_SERVICES_URL);
        const data = response.data;
        if (selectedCategorie === "All") {
          setRecommendedServices(data);
          return;
        }
        const filtredServicesList = data.filter(
          (item) => item.service_category === selectedCategorie
        );
        setRecommendedServices(filtredServicesList);
      } catch (error) {
        console.log(error);
      }
    };

    getRecommendedServices();
  }, [selectedCategorie]);
  return (
    <appHomeContext.Provider
      value={{
        selectedCategorie,
        setSelectedCategorie,
        recommendedServices,
        setRecommendedServices,
      }}
    >
      {children}
    </appHomeContext.Provider>
  );
};

export const useHomeContext = () => useContext(appHomeContext);
