import { useNavigate } from "react-router-dom";
import { imageBasePath } from "../../constants";

export default function BannerCard({ movie }) {
  const navigate = useNavigate();
  const { id, poster_path, title } = movie;

  return (
    <>
      <img
        onClick={() => navigate(`/${id}`)}
        src={`${imageBasePath}${poster_path}`}
        alt={title}
        className="poster"
      />
    </>
  );
}
