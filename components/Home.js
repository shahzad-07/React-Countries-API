import React, { useContext, useState } from "react";
import SearchBar from "./SearchBar.js";
import SelectMenu from "./SelectMenu.js";
import CountriesList from "./CountriesList.js";
import "../App.css";
import { ThemeContext } from "../contexts/ThemeContext.js";

export default function Home() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");
  const [isDark] = useContext(ThemeContext);

  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setRegion={setRegion} />
      </div>
      {/* Pass both query and region to CountriesList */}
      <CountriesList query={query} region={region} />
    </main>
  );
}
