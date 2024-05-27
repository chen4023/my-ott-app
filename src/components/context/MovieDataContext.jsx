import { createContext, useContext, useEffect, useState } from "react";
import axios from "../../api/axios";
import requests from "../../api/request";

const MovieContext = createContext();

export function MovieContextProvider({ children }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovieLists();
  }, []);

  const fetchMovieLists = async () => {
    const res = await axios.get(requests.fetchPopularMovies);
    setMovies(res.data.results);
  };

  return (
    <MovieContext.Provider value={{ movies, fetchMovieLists }}>
      {children}
    </MovieContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useMovieContext() {
  return useContext(MovieContext);
}
