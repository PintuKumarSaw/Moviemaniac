// src/components/MovieList/MovieCard.jsx
import React from "react";
import { FaHeart } from "react-icons/fa";
import { useFavorites } from "../../context/FavoriteContext";
import "./MovieCard.css";
import Star from "../../assets/star.png";

const MovieCard = ({ movie }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.some((m) => m.id === movie.id);

  return (
    <div className="movie_card_wrapper">
      <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank" rel="noreferrer" className="movie_card">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie poster" className="movie_poster" />

        <div className="movie_details">
          <h3 className="movie_details_heading">{movie.original_title}</h3>
          <div className="align_center movie_date_rate">
            <p>{movie.release_date}</p>
            <p className="align_center">
              {movie.vote_average}
              <img src={Star} alt="rating icon" className="card_emoji" />
            </p>
          </div>
          <p className="movie_description">{movie.overview.slice(0, 100) + "..."}</p>
        </div>
      </a>

      {/* Heart Button */}
      <button className={`fav_btn ${isFavorite ? "active" : ""}`} onClick={() => toggleFavorite(movie)}>
        <FaHeart />
      </button>
    </div>
  );
};

export default MovieCard;
