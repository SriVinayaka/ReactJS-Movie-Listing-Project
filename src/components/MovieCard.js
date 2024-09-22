import React from "react";
import { FaHeart } from "react-icons/fa6";
import "../styles/MovieCard.css";
import { toast } from "react-toastify";
import { useLocation } from "react-router";
import { AiOutlineCloseSquare } from "react-icons/ai";

const MovieCard = ({ movie }) => {
  const rPath = useLocation();

  const handleFavAdd = () => {
    try {
      const existingFavorites =
        JSON.parse(localStorage.getItem("favorites")) || [];

      // to avoid duplicate
      const isFavorite = existingFavorites.some(
        (favMovie) => favMovie.id === movie.id
      );

      if (!isFavorite) {
        const updatedFavorites = [...existingFavorites, movie];
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        toast.success("Movie added to favorites!");
      } else {
        toast.info("Movie is already in favorites.");
      }
    } catch (error) {
      toast.error(error.message || error);
    }
  };

  const handleFavRemove = () => {
    try {
      const existingFavorites =
        JSON.parse(localStorage.getItem("favorites")) || [];

      const updatedFavorites = existingFavorites.filter(
        (favMovie) => favMovie.id !== movie.id
      );

      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      window.location.reload();
      toast.success("Movie removed from favorites!");
    } catch (error) {
      toast.error(error.message || error);
    }
  };

  return (
    <div className="movieCard">
      <h4>{movie.title}</h4>
      <div className="fav">
        {rPath.pathname !== "/favorites" ? (
          <button onClick={handleFavAdd}>
            <p>Add to Favorites </p>
            <FaHeart className="heart" />
          </button>
        ) : (
          <button onClick={handleFavRemove}>
            <p>Remove from Favorites </p>
            <AiOutlineCloseSquare />
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
