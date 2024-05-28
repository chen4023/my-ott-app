import { createContext, useContext, useEffect, useState } from "react";
import axios from "../../api/axios";
import requests from "../../api/request";

const MovieContext = createContext();

export function MovieContextProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [searchResult, setSearchResults] = useState([]);

  useEffect(() => {
    fetchMovieLists();
  }, []);

  const fetchMovieLists = async () => {
    const res = await axios.get(requests.fetchPopularMovies);
    setMovies(res.data.results);
  };

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const res = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      setSearchResults(res.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MovieContext.Provider
      value={{ movies, fetchMovieLists, fetchSearchMovie, searchResult }}
    >
      {children}
    </MovieContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useMovieContext() {
  return useContext(MovieContext);
}
