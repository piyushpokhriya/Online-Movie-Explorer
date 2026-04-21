import React, { useState, useEffect } from "react";
import moviesData from "../utilities/moviesData";
import MovieCard from "./MovieCard";
import MovieModal from "./MovieModal";
import SearchBar from "./SearchBar";
import "../App.css";

function MovieSection({ filter }) {
  const [sortBy, setSortBy] = useState("Rating");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [genreFilter, setGenreFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Favorites (localStorage)
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Filter movies logic
  let filteredMovies = moviesData;

  if (filter === "topRated") {
    filteredMovies = filteredMovies.filter((m) => m.Rating > 8); 
  }
  if (filter === "latest") {
    filteredMovies = filteredMovies.filter((m) => m.Year >= 2023);
  }
  if (filter === "favorites") {
    filteredMovies = filteredMovies.filter((m) => favorites.includes(m.Movie));
  }

  // Genre filter
  if (genreFilter !== "All") {
    filteredMovies = filteredMovies.filter((m) =>
      m.Genre.toLowerCase().includes(genreFilter.toLowerCase())
    );
  }

  // Search filter
  if (searchTerm.trim() !== "") {
    filteredMovies = filteredMovies.filter(
      (m) =>
        m.Movie.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.Genre.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // Remove duplicate movies
  filteredMovies = filteredMovies.filter(
    (v, i, a) =>
      a.findIndex(
        (t) => t.Movie === v.Movie && t.Year === v.Year
      ) === i
  );

  // Sorting logic
  const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (sortBy === "Rating") return b.Rating - a.Rating;
    if (sortBy === "Year") return b.Year - a.Year;
    if (sortBy === "Movie") return a.Movie.localeCompare(b.Movie);
    return 0;
  });

  return (
    <section className="movie-section">
      <div className="fixed-header-wrapper">
        <div className="section-header">
          <h2>
            {filter === "home"
              ? "All Movies"
              : filter === "topRated"
              ? "Top Rated"
              : filter === "latest"
              ? "Latest Releases"
              : "Your Favorites"}
          </h2>

          <div className="filter-controls">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="Rating">Sort by Rating</option>
              <option value="Year">Sort by Year</option>
              <option value="Movie">Sort by Title</option>
            </select>

            <select
              value={genreFilter}
              onChange={(e) => setGenreFilter(e.target.value)}
            >
              <option value="All">All Genres</option>
              <option value="Action">Action</option>
              <option value="Drama">Drama</option>
              <option value="Horror">Horror</option>
              <option value="Thriller">Thriller</option>
              <option value="Crime">Crime</option>
              <option value="Adventure">Adventure</option>
              <option value="Animation">Anime</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Comedy">Comedy</option>
              <option value="Family">Family</option>
            </select>
          </div>
        </div>
      </div>

      {/* 2. SCROLLABLE MOVIE GRID SECTION */}
      <div className="movie-grid-container">
        <div className="movie-grid">
          {sortedMovies.length === 0 && (
            <div className="no-movie">
              <p>No movie found &#x1F622;</p> 
            </div>
          )}

          {sortedMovies.map((movie, index) => (
            <MovieCard
              key={`${movie.Movie}-${movie.Year}-${index}`}
              movie={movie}
              favorites={favorites}
              setFavorites={setFavorites}
              onClick={() => setSelectedMovie(movie)}
            />
          ))}
        </div>
      </div>

      {/* 3. MODAL SECTION */}
      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </section>
  );
}

export default MovieSection;