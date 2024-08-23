/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";
import { useLocation } from "react-router-dom";

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Get the user from localStorage if it exists
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });
  // Use useEffect to update localStorage whenever the theme changes
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    console.log(localStorage.getItem("darkMode"));
  }, [darkMode]);

  const location = useLocation();
  const { pathname } = location;

  console.log(location);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, pathname }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
