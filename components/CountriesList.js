import React, { useState, useEffect } from "react";
import CountryCard from "../components/CountryCard.js";
import CountriesListShimmer from "./CountriesListShimmer.js";

export default function CountriesList({ query, region }) {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);

  if (countriesData.length === 0) {
    return <CountriesListShimmer />;
  }

  const filteredCountries = countriesData
    .filter(
      (country) =>
        // Search by country name
        country.name.common.toLowerCase().includes(query.toLowerCase()) &&
        // If a region is selected, filter by region, otherwise show all
        (region === "" || country.region.toLowerCase() === region.toLowerCase())
    )
    .filter((country) => country.name.common !== "Israel");

  return (
    <div className="countries-container">
      {filteredCountries.map((country) => (
        <CountryCard
          key={country.name.common}
          name={country.name.common}
          flag={country.flags.svg}
          population={country.population}
          region={country.region}
          capital={country.capital?.[0]}
          data={country}
        />
      ))}
    </div>
  );
}
