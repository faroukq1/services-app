import React, { createContext, useContext, useState } from "react";

const appContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [userInformation, setUserInformation] = useState({});
  const [accountDetailsById, setAccountDetailsById] = useState(-1);
  return (
    <appContext.Provider
      value={{
        isLogin,
        setIsLogin,
        userInformation,
        setUserInformation,
        accountDetailsById,
        setAccountDetailsById,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export const useGlobalContext = () => useContext(appContext);
