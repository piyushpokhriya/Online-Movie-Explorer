
export const getFavorites = () => {
  const favs = localStorage.getItem("favorites");
  return favs ? JSON.parse(favs) : [];
};

export const addFavorite = (movieName) => {
  const favs = getFavorites();
  if (!favs.includes(movieName)) {
    const updated = [...favs, movieName];
    localStorage.setItem("favorites", JSON.stringify(updated));
    return updated;
  }
  return favs;
};

export const removeFavorite = (movieName) => {
  const updated = getFavorites().filter((m) => m !== movieName);
  localStorage.setItem("favorites", JSON.stringify(updated));
  return updated;
};

export const isFavorite = (movieName) => {
  return getFavorites().includes(movieName);
};
