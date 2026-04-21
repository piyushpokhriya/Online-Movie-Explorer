import React from "react";
import { Heart, Star } from "lucide-react";
import "../App.css";

function MovieCard({ movie, favorites, setFavorites, onClick }) {
  const isFavorite = favorites.includes(movie.Movie);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    if (isFavorite) {
      setFavorites(favorites.filter((m) => m !== movie.Movie));
    } else {
      setFavorites([...favorites, movie.Movie]);
    }
  };

  return (
    <div className="movie-card" onClick={onClick}>
      <img src={movie.Image} alt={movie.Movie} />

      <button className="fav-btn" onClick={toggleFavorite} aria-label="Favorite">
        {/* Heart icon will be red and filled when favorite, otherwise outlined */}
        <Heart 
          size={20} 
          color={isFavorite ? "#ef4444" : "#fff"} 
          fill={isFavorite ? "#ef4444" : "transparent"} 
          style={{ transition: "all 0.3s ease" }}
        />
      </button>

      <h3>{movie.Movie}</h3>
      <p className="rating-text">
        <Star size={14} fill="#fbbf24" color="#fbbf24" /> {movie.Rating}
      </p>
    </div>
  );
}

export default MovieCard;