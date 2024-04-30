import React, { createContext, useContext, useState } from "react";

const appContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [userInformation, setUserInformation] = useState({});
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  return (
    <appContext.Provider
      value={{
        isLogin,
        setIsLogin,
        userInformation,
        setUserInformation,
        isDarkTheme,
        setIsDarkTheme,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export const useGlobalContext = () => useContext(appContext);
