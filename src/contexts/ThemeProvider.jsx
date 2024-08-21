/* eslint-disable react/prop-types */

import { useState } from "react";
import ThemeContext from "./ThemeContext";
import { useLocation } from "react-router-dom";

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
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
