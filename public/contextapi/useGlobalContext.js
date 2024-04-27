import React, { createContext, useContext, useState } from "react";

const appContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [userInformation, setUserInformation] = useState({});
  return (
    <appContext.Provider
      value={{
        isLogin,
        setIsLogin,
        userInformation,
        setUserInformation,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export const useGlobalContext = () => useContext(appContext);
