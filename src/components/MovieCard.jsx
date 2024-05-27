import { useNavigate } from "react-router-dom";
import { imageBasePath } from "../../constants";

export default function MovieCard({ movie }) {
  const { poster_path, title, vote_average } = movie;
  const navigate = useNavigate();
  return (
    <section
      onClick={() => navigate(`/details`)}
      className="w-full flex flex-col items-center justify-center cursor-pointer"
    >
      <img
        className="w-42 h-60 rounded-sm"
        src={`${imageBasePath}${poster_path}`}
        alt={title}
      />
      <p>{title}</p>
      <p>평점: {vote_average}</p>
    </section>
  );
}
