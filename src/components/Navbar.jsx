import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useMovieContext } from "./context/MovieDataContext";
import useDebounce from "../hooks/useDebounce";

export default function Navbar() {
  const navigate = useNavigate();
  const { fetchSearchMovie } = useMovieContext();

  const [isSearch, setIsSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const debounceValue = useDebounce(searchValue, 500);

  useEffect(() => {
    if (debounceValue) {
      fetchSearchMovie(debounceValue);
    }
  }, [debounceValue]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    navigate(`/search?q=${value}`);
  };

  const handleClickLogo = () => {
    navigate("/");
    setSearchValue("");
    setIsSearch(false);
  };

  return (
    <div className="w-full flex justify-between items-center max-w-screen-2xl mb-3">
      <div
        onClick={handleClickLogo}
        className="text-3xl font-bold cursor-pointer"
      >
        OzTV
      </div>
      <div className="flex items-center cursor-pointer">
        {isSearch && (
          <input
            type="text"
            placeholder="제목을 입력해 주세요."
            value={searchValue}
            onChange={handleChange}
            className="rounded-sm w-[300px] h-8 ml-10 border px-3 py-1 border-lightgrey"
          />
        )}
        <FaSearch onClick={() => setIsSearch(!isSearch)} className="mx-5" />

        <span onClick={() => navigate("/login")} className="mr-3">
          로그인
        </span>
        <span onClick={() => navigate("/signup")}>회원가입</span>
      </div>
    </div>
  );
}
