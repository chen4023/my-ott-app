import { useNavigate } from "react-router-dom";
import { imageBasePath } from "../../constants";

export default function MovieCard({ movie }) {
  const { id, backdrop_path, title, vote_average } = movie;
  const navigate = useNavigate();
  return (
    <section
      onClick={() => navigate(`/${id}`)}
      className="w-full flex flex-col items-center justify-center cursor-pointer hover:scale-105 ease-in-out duration-300"
    >
      <img
        className="w-50 h-40 rounded-md mb-1"
        src={`${imageBasePath}${backdrop_path}`}
        alt={title}
      />
      <p>{title}</p>
      <p>평점: {vote_average.toFixed(1)}</p>
    </section>
  );
}
