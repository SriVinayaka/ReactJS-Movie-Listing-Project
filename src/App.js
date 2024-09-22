import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import FavoritesPage from "./pages/FavoritesPage";
import Navbar from "./components/Navbar";
import TopratedIndian from "./pages/TopratedIndian";
import TopratedMovies from "./pages/TopratedMovies";
import ComingSoon from "./pages/ComingSoon";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import movieData from "./data/data";

export const MovieContext = React.createContext();

const App = () => {
  return (
    <>
      <MovieContext.Provider value={movieData}>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/top-rated-indian" element={<TopratedIndian />} />
          <Route path="/top-rated-movies" element={<TopratedMovies />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </MovieContext.Provider>
    </>
  );
};

export default App;
