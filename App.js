import Header from "./components/Header.js";
import { Outlet } from "react-router-dom";

import "./App.css";
import { useState } from "react";
import { ThemeContext, ThemePro } from "./contexts/ThemeContext.js";

export default function App() {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode"))
  );

  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
      <ThemePro />
      <Header />
      <Outlet />
    </ThemeContext.Provider>
  );
}
