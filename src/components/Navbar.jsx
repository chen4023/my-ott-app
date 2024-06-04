import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useEffect, useRef, useState } from "react";
import { useMovieContext } from "./context/MovieDataContext";
import useDebounce from "../hooks/useDebounce";
import { onUserState } from "../api/firebase";
import Dropdown from "./Dropdown";
import DarkModeButton from "./DarkModeButton";

export default function Navbar() {
  const navigate = useNavigate();

  const { fetchSearchMovie } = useMovieContext();

  const [isOpen, setIsOpen] = useState(false);
  const dropMenuRef = useRef(null);
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
  }, [debounceValue, fetchSearchMovie]);

  useEffect(() => {
    const handleOutsideClose = (e) => {
      // useRef current에 담긴 엘리먼트 바깥을 클릭 시 드롭메뉴 닫힘
      if (isOpen && !dropMenuRef.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("click", handleOutsideClose);

    return () => document.removeEventListener("click", handleOutsideClose);
  }, [isOpen]);

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
    <div className="w-full flex justify-between items-center max-w-screen-2xl mb-5">
      <div
        onClick={handleClickLogo}
        className="text-3xl font-bold cursor-pointer text-brand"
      >
        🎬 FlickHive
      </div>
      <div ref={dropMenuRef} className="flex items-center cursor-pointer">
        {isSearch && (
          <input
            type="text"
            placeholder="제목을 입력해 주세요."
            value={searchValue}
            onChange={handleChange}
            className="rounded-sm w-[300px] h-8 ml-10 mr-2 border px-3 py-1 border-lightgrey dark:bg-transparent dark:text-white"
          />
        )}
        <FaSearch
          color="#FF1758"
          size="20px"
          onClick={() => setIsSearch(!isSearch)}
          className="mx-5 mt-[2px] "
        />
        <DarkModeButton />

        {!user ? (
          <>
            <span
              onClick={() => navigate("/login")}
              className="border border-brand text-brand px-4 py-2 text-sm rounded-md mx-4 hover:bg-brand hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-grey"
            >
              로그인
            </span>
            <span
              className="border border-brand text-brand px-3 py-2 text-sm rounded-md  hover:bg-brand hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-grey"
              onClick={() => navigate("/signup")}
            >
              회원가입
            </span>
          </>
        ) : (
          <div className="relative">
            <CgProfile
              size="30px"
              color="#FF1758"
              onClick={handleOpen}
              className="ml-5 dark:border-white"
            />
            {isOpen === true ? <Dropdown /> : <></>}
          </div>
        )}
      </div>
    </div>
  );
}
