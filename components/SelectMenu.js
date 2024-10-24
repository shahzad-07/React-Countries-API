import React from "react";

export default function SelectMenu({ setRegion }) {
  return (
    <select
      className="filter-by-region"
      onChange={(e) => setRegion(e.target.value.toLowerCase())}
    >
      {/* Empty value means no filtering by region */}
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}
