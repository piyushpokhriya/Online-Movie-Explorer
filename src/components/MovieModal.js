import React from "react";
import { X, Star, Calendar, Film } from "lucide-react"; 
import "../App.css";

function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modern Close Icon */}
        <button className="close-btn" onClick={onClose}>
          <X size={24} />
        </button>

        <img
          src={movie.Image}
          alt={movie.Movie}
          className="modal-image"
        />

        <h2>{movie.Movie}</h2>
        
        {/* Info with Icons instead of emojis */}
        <div className="modal-info">
          <p><Star size={16} color="#fbbf24" fill="#fbbf24" /> <strong>Rating:</strong> {movie.Rating}</p>
          <p><Calendar size={16} /> <strong>Year:</strong> {movie.Year}</p>
          <p><Film size={16} /> <strong>Genre:</strong> {movie.Genre}</p>
        </div>
        
        <p className="modal-plot">{movie.Plot}</p>
      </div>
    </div>
  );
}

export default MovieModal;

