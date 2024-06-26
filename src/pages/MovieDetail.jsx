import { useEffect, useState } from "react";
import { imageBasePath } from "../../constants";
import { useParams } from "react-router-dom";

import axios from "../api/axios";

export default function MovieDetail() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  const fetchMovieDetails = async () => {
    const res = await axios.get(`movie/${movieId}`);
    setMovieDetails(res.data);
  };

  useEffect(() => {
    if (movieId) {
      fetchMovieDetails();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  const { poster_path, overview, title, vote_average, genres } = movieDetails;
  return (
    <div className="w-[90%] flex flex-col justify-center items-center p-10 lg:flex-row lg:items-start bg-gray-50 dark:bg-[#1d1d1d] rounded-md">
      <img
        className="rounded-md mb-3 h-[60vh] lg:h-[80vh]"
        src={`${imageBasePath}${poster_path}`}
        alt={title}
      />
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center mb-3">
          <p className="text-4xl font-bold mr-5">{title}</p>
          <p className="text-lg font-medium">
            평점 {vote_average && vote_average.toFixed(1)}
          </p>
        </div>
        <div className="grid grid-flow-col">
          {genres &&
            genres.map((genre) => (
              <span
                className="bg-brand text-white mb-2 px-3 py-1 rounded-md mr-1"
                key={genre.id}
              >
                {genre.name}
              </span>
            ))}
        </div>
        <div className="mt-5 text-lg lg:px-28">{overview}</div>
      </div>
    </div>
  );
}
