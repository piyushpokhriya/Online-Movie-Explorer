import React from "react";
import "../App.css";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search movie or genre..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)} 
      className="search-input"
    />
  );
}

export default SearchBar;
