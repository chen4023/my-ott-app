import { useEffect } from "react";
import { imageBasePath } from "../../constants";
import { useMovieContext } from "../components/context/MovieDataContext";

export default function MovieDetail() {
  const { movieDetails, fetchMovieDetails } = useMovieContext();
  console.log(movieDetails);

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const { poster_path, overview, title, vote_average, genres } = movieDetails;
  console.log(genres);
  return (
    <div className="w-full flex justify-center p-4">
      <img
        className="w-[50%] mr-10"
        src={`${imageBasePath}${poster_path}`}
        alt={title}
      />
      <div className="flex flex-col items-center">
        <div className="flex items-center mb-3">
          <p className="text-4xl font-bold mr-5">{title}</p>
          <p className="text-lg font-medium">평균 {vote_average}</p>
        </div>
        <div>
          {genres &&
            genres.map((genre) => (
              <span
                className="bg-lightgrey text-white px-3 py-1 rounded-md mr-1"
                key={genre.id}
              >
                {genre.name}
              </span>
            ))}
        </div>
        <div className="mt-5 text-lg">{overview}</div>
      </div>
    </div>
  );
}