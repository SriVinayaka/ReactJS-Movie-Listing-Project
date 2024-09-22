import React from 'react';
import MovieCard from './MovieCard';

const Favorites = ({ favorites }) => {
  return (
    <div className="favorites">
      <h2>Favorites</h2>
      <ul>
        {favorites.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
