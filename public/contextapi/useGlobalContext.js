import React, { createContext, useContext, useState } from "react";

const appContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <appContext.Provider
      value={{
        isLogin,
        setIsLogin,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export const useGlobalContext = () => useContext(appContext);
