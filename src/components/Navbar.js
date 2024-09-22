import React, { useContext, useState } from "react";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MovieContext } from "../App";
import SearchPopup from "./SearchPopup";

const Navbar = () => {
  const movieD = useContext(MovieContext);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const filterMovies = (searchCriteria, movieData) => {
    const filteredMovies = [];
    for (const category in movieData) {
      if (
        movieData.hasOwnProperty(category) &&
        movieData[category].length > 0
      ) {
        filteredMovies.push(
          ...movieData[category].filter((movie) => {
            const searchText = searchCriteria.toLowerCase();
            return (
              movie.title.toLowerCase().includes(searchText) ||
              movie.genres.some((genre) =>
                genre.toLowerCase().includes(searchText)
              )
            );
          })
        );
      }
    }

    return filteredMovies;
  };

  const handleSearch = (e) => {
    const searchText = e.target.value;
    if (searchText.trim() !== "") {
      const filteredData = filterMovies(searchText, movieD);
      setFilteredMovies(filteredData);
      setIsPopupVisible(true);
    } else {
      setFilteredMovies([]);
      setIsPopupVisible(false);
    }
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <ul className="nav-links">
            <li>
              <NavLink to="/">Movies in theatres</NavLink>
            </li>
            <li>
              <NavLink to="/coming-soon">Coming soon</NavLink>
            </li>
            <li>
              <NavLink to="/top-rated-indian">Top rated Indian</NavLink>
            </li>
            <li>
              <NavLink to="/top-rated-movies">Top rated movies</NavLink>
            </li>
            <li>
              <NavLink to="/favorites">Favorites</NavLink>
            </li>
          </ul>
          <form className="search-form">
            <input
              type="text"
              placeholder="Search movie"
              aria-label="Search"
              onChange={handleSearch}
            />
            <button type="submit" onSubmit={handleSearch}>
              <FaSearch />
            </button>
          </form>
        </div>
      </nav>
      <span className="line"></span>
      {isPopupVisible && (
        <SearchPopup
          movies={filteredMovies}
          handleClosePopup={handleClosePopup}
        />
      )}
    </>
  );
};

export default Navbar;
