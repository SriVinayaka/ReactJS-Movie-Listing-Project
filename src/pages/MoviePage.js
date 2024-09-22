import React from "react";
import "../styles/MovieDetails.css";
import { NavLink, useLocation } from "react-router-dom";

const MoviePage = () => {
  const location = useLocation();
  const movie = location.state?.movie;

  return (
    <section className="movieDetails">
      <NavLink to="/">Back to home</NavLink>
      <hr style={{ marginTop: "1rem" }} />
      {movie ? (
        <div className="container">
          <div className="left">
            <img src={`${movie.posterurl}`} alt={`${movie.poster}`} />
          </div>
          <div className="right">
            <h1>
              {movie.title} ({movie.year})
            </h1>
            <table className="movie-table">
              <tbody>
                <tr>
                  <td>Imdb Rating</td>
                  <td>
                    {movie.imdbRating ? movie.imdbRating : "Not available"}
                  </td>
                </tr>
                <tr>
                  <td>Content Rating</td>
                  <td>
                    {movie.contentRating
                      ? movie.contentRating
                      : "Not available"}
                  </td>
                </tr>
                <tr>
                  <td>Average Rating</td>
                  <td>
                    {movie.averageRating
                      ? movie.averageRating
                      : "Not available"}
                  </td>
                </tr>
                <tr>
                  <td>Duration</td>
                  <td>{movie.duration ? movie.duration : "Not available"}</td>
                </tr>
                <tr>
                  <td>Genres</td>
                  <td>
                    {movie.genres && movie.genres.length > 0
                      ? movie.genres.join(", ")
                      : "Not available"}
                  </td>
                </tr>
                <tr>
                  <td>Actors</td>
                  <td>
                    {movie.actors && movie.actors.length > 0
                      ? movie.actors.join(", ")
                      : "Not available"}
                  </td>
                </tr>
                <tr>
                  <td>Release Date</td>
                  <td>
                    {movie.releaseDate ? movie.releaseDate : "Not available"}
                  </td>
                </tr>
                <tr>
                  <td>Story Line</td>
                  <td>{movie.storyline ? movie.storyline : "Not available"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <span>Movie not found</span>
      )}
      <hr style={{ marginTop: "2rem" }} />
    </section>
  );
};

export default MoviePage;
