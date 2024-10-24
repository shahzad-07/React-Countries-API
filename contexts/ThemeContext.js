import { createContext, useState } from "react";

export const ThemeContext = createContext("Theme");

export function ThemePro() {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode"))
  );
}
