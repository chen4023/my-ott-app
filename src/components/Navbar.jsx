import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useEffect, useState } from "react";
import { useMovieContext } from "./context/MovieDataContext";
import useDebounce from "../hooks/useDebounce";
import { onUserState } from "../api/firebase";
import Dropdown from "./Dropdown";

export default function Navbar() {
  const navigate = useNavigate();

  const { fetchSearchMovie } = useMovieContext();

  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({});
  const [isSearch, setIsSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const debounceValue = useDebounce(searchValue, 500);

  useEffect(() => {
    onUserState(setUser);
    setIsOpen(false);
  }, []);

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

  const handleOpen = () => {
    setIsOpen(!isOpen);
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
        <FaSearch
          color="#6F33FE"
          size="20px"
          onClick={() => setIsSearch(!isSearch)}
          className="mx-5 mt-[2px]"
        />

        {!user ? (
          <>
            <span
              onClick={() => navigate("/login")}
              className="border border-brand text-brand px-4 py-2 text-sm rounded-md mr-3"
            >
              로그인
            </span>
            <span
              className="bg-brand text-white px-3 py-[9px] text-sm rounded-md"
              onClick={() => navigate("/signup")}
            >
              회원가입
            </span>
          </>
        ) : (
          <div className="relative">
            <CgProfile
              size="30px"
              color="#6F33FE"
              onClick={handleOpen}
              className="ml-5"
            />
            {isOpen === true ? <Dropdown /> : <></>}
          </div>
        )}
      </div>
    </div>
  );
}
