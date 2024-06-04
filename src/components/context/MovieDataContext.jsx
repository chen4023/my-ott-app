import { createContext, useContext, useEffect, useState } from "react";
import axios from "../../api/axios";
import requests from "../../api/request";

const MovieContext = createContext();

export function MovieContextProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [nowMovies, setNowMovies] = useState([]);
  const [searchResult, setSearchResults] = useState([]);

  useEffect(() => {
    fetchMovieLists();
    fetchNowPlayingList();
  }, []);

  const fetchMovieLists = async () => {
    const res = await axios.get(requests.fetchPopularMovies);
    setMovies(res.data.results);
  };

  const fetchNowPlayingList = async () => {
    const res = await axios.get(requests.fetchNowPlayingMovies);
    setNowMovies(res.data.results);
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
      value={{
        movies,
        nowMovies,
        fetchMovieLists,
        fetchSearchMovie,
        fetchNowPlayingList,
        searchResult,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useMovieContext() {
  return useContext(MovieContext);
}
