import React from "react";
import { Home, TrendingUp, Clock, Star } from "lucide-react"; 
import "../App.css";

function Sidebar({ onFilterChange }) {
  return (
    <aside className="sidebar">
      <h2>Explorer</h2>
      <ul>
        <li onClick={() => onFilterChange("home")}>
          <Home size={18} /> <span>Home</span>
        </li>
        <li onClick={() => onFilterChange("topRated")}>
          <TrendingUp size={18} /> <span>Top Rated</span>
        </li>
        <li onClick={() => onFilterChange("latest")}>
          <Clock size={18} /> <span>Latest</span>
        </li>
        <li onClick={() => onFilterChange("favorites")}>
          <Star size={18} /> <span>Favorites</span>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;