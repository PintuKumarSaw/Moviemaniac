// src/components/Navbar/Navbar.jsx
import React, { useState } from "react";
import "./Navbar.css";
import DarkMode from "../DarkMode/DarkMode";
import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";
import { useFavorites } from "../../context/FavoriteContext";

const Navbar = () => {
  const { favorites } = useFavorites();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <h1>MovieManiac</h1>

      {/* Hamburger Button */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className={menuOpen ? "bar rotate1" : "bar"}></span>
        <span className={menuOpen ? "bar fade" : "bar"}></span>
        <span className={menuOpen ? "bar rotate2" : "bar"}></span>
      </div>

      <div className={`navbar_links ${menuOpen ? "active" : ""}`}>
        <DarkMode />

        <a href="#popular">
          Popular <img src={Fire} alt="fire emoji" className="navbar_emoji" />
        </a>
        <a href="#top_rated">
          Top Rated <img src={Star} alt="star emoji" className="navbar_emoji" />
        </a>
        <a href="#upcoming">
          Upcoming <img src={Party} alt="party emoji" className="navbar_emoji" />
        </a>

        <a href="#favorites" className="favorites_link">
          ❤️ Favorites ({favorites.length})
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
