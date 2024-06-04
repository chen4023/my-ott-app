import Banner from "../components/Banner";
import { useMovieContext } from "../components/context/MovieDataContext";
import MovieCard from "../components/MovieCard";

export default function MainPage() {
  const { movies } = useMovieContext();
  return (
    <>
      <Banner type={`type`} />
      <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 p-4">
        {movies.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </>
  );
}
