import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

export function MovieContextProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    fetch("data/movieListData.json")
      .then((res) => res.json())
      .then((result) => setMovies(result.results));
  }, []);

  const fetchMovieDetails = () => {
    fetch(`data/movieDetailData.json`)
      .then((res) => res.json())
      .then((result) => setMovieDetails(result));
  };

  return (
    <MovieContext.Provider value={{ movies, movieDetails, fetchMovieDetails }}>
      {children}
    </MovieContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useMovieContext() {
  return useContext(MovieContext);
}
