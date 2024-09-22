import React from "react";
import { NavLink } from "react-router-dom";
import MovieCard from "./MovieCard";
import { IoIosCloseCircle } from "react-icons/io";

const SearchPopup = ({ movies, handleClosePopup }) => {
  return (
    <section className="homePage">
      <h3>Search Results</h3>
      <div className="filteredMovie">
        <ul>
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <li key={movie.id}>
                <NavLink
                  to={`/movies/${movie.id}`}
                  state={{ movie }}
                  onClick={handleClosePopup}
                >
                  <img src={`img/${movie.poster}`} alt={`${movie.poster}`} />
                </NavLink>
                <MovieCard movie={movie} />
              </li>
            ))
          ) : (
            <h4 className="notFound">No movies found</h4>
          )}
        </ul>
        <span>
          <IoIosCloseCircle onClick={handleClosePopup} />
        </span>
      </div>
    </section>
  );
};

export default SearchPopup;
