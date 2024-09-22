const getFavorites = async () => {
  const my_movies = await localStorage.getItem("favorites");
  return my_movies ? JSON.parse(my_movies) : [];
};

export { getFavorites };
