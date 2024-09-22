import React, { useContext } from "react";
import "../styles/HomePage.css";
import MovieCard from "../components/MovieCard";
import { NavLink } from "react-router-dom";
import { MovieContext } from "../App";

const TopratedMovies = () => {
  const movieD = useContext(MovieContext);
  const movies = movieD["top-rated-movies"];

  return (
    <section className="homePage">
      <h3>Movies</h3>
      <ul>
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <li key={movie.id}>
              <NavLink to={`/movies/${movie.id}`} state={{ movie }}>
                <img src={`img/${movie.poster}`} alt={`${movie.poster}`} />
              </NavLink>
              <MovieCard movie={movie} />
            </li>
          ))
        ) : (
          <h4 className="notFound">No movies found</h4>
        )}
      </ul>
    </section>
  );
};

export default TopratedMovies;
