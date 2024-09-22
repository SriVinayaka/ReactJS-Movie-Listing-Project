import React from "react";

const MovieDetails = ({ movie }) => {
  return (
    <section className="movie-details">
      <h1>{movie.title}</h1>
      <img src={`img/{movie.poster}`} alt={movie.title} />
      <p>{movie.plot}</p>
    </section>
  );
};

export default MovieDetails;
