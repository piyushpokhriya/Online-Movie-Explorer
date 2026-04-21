import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MovieSection from "./components/MovieSection";
import "./App.css";

function App() {
  const [filter, setFilter] = useState("home");

  return (
    <div className="app-container">
      <Sidebar onFilterChange={setFilter} />

      <main className="content">
        <header className="navbar">
          <div className="logo-container">
            <h1>Online Movie Explorer</h1>
          </div>
        </header>

        <MovieSection filter={filter} />
      </main>
    </div>
  );
}

export default App;
