import { useMovieContext } from "../components/context/MovieDataContext";
import MovieCard from "../components/MovieCard";
import { MdOutlineSearchOff } from "react-icons/md";

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
        <li className="col-span-full flex items-center justify-center">
          <div className="flex flex-col items-center">
            <MdOutlineSearchOff size={200} className="mt-[100%]" />
            <span className="text-lg">검색 결과를 찾을 수 없습니다.</span>
          </div>
        </li>
      )}
    </ul>
  );
}
