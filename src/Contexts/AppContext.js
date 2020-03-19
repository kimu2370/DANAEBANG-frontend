import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [loginStep, setLoginStep] = useState(0);

  const [user, setUser] = useState({
    id: 0,
    name: "",
    password: ""
  });

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        isLoggedIn,
        setIsLoggedIn,
        loginStep,
        setLoginStep,
        user,
        setUser
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
