// src/App.jsx
import React, { useState } from "react";
import "./App.css";

import Fire from "./assets/fire.png";
import Star from "./assets/glowing-star.png";
import Party from "./assets/partying-face.png";

import Navbar from "./components/Navbar/Navbar";
import MovieList from "./components/MoveList/MovieList"; // fixed folder name
import MovieCard from "./components/MoveList/MovieCard"; // fixed folder name

import { useFavorites } from "./context/FavoriteContext";

const App = () => {
  const { favorites } = useFavorites();

  // State for hamburger menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      {/* Navbar with menu toggle props */}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className={`main_content ${menuOpen ? "shifted" : ""}`}>
        {/* Movie sections */}
        <MovieList type="popular" title="Popular" emoji={Fire} />
        <MovieList type="top_rated" title="Top Rated" emoji={Star} />
        <MovieList type="upcoming" title="Upcoming" emoji={Party} />

        {/* Favorites Section */}
        <section id="favorites" className="movie_list">
          <h2>❤️ Favorites</h2>
          <div className="movie_cards">
            {favorites.length > 0
              ? favorites.map((movie) => <MovieCard key={movie.id} movie={movie} />)
              : <p>No favorites yet.</p>}
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
