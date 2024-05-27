import { useMovieContext } from "../components/context/MovieDataContext";
import MovieCard from "../components/MovieCard";

export default function MainPage() {
  const { movies } = useMovieContext();
  console.log(movies);
  return (
    <ul className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
}
