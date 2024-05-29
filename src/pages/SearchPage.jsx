import { useMovieContext } from "../components/context/MovieDataContext";
import MovieCard from "../components/MovieCard";

export default function SearchPage() {
  const { searchResult } = useMovieContext();

  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5 p-4">
      {searchResult.length > 0 ? (
        searchResult.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))
      ) : (
        <div className="flex flex-col justify-center items-center w-[100vw]">
          <img
            className="w-[30%] mt-20"
            src="images/notfound.jpg"
            alt="notFound"
          />
          <span className="text-lg"> 검색결과를 찾을 수 없습니다. </span>
        </div>
      )}
    </ul>
  );
}
