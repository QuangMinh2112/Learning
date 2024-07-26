import { createContext, useEffect, useState } from "react";

export const AppContext = createContext({});

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const themeStyle = {
    day: {
      backgroundColor: "rgb(228, 228, 228)",
      color: "black",
    },
    night: {
      backgroundColor: "black",
      color: "white",
    },
  };

  useEffect(() => {
    fetch(`https://reqres.in/api/users/2`)
      .then((res) => res.json())
      .then((res) => {
        setUserData(res.data);
      });
  }, []);

  const value = {
    userData,
    isOpen,
    setIsOpen,
    darkMode,
    setDarkMode,
    themeStyle: themeStyle[darkMode ? "day" : "night"],
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
