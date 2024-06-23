"use client";
import React, { createContext, useState, useEffect } from "react";
import "../globals.css";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const switchDark = () => {
    setTheme("dark");
  };

  const switchLight = () => {
    setTheme("light");
  };

  return (
    <ThemeContext.Provider value={{ theme, switchDark, switchLight }}>
      <div className={`${theme} theme-animation`}>{children}</div>
    </ThemeContext.Provider>
  );
}
