import { handleLogout } from "../api/firebase";

export default function Dropdown() {
  return (
    <ul className="w-20 z-20 absolute right-2 top-9 bg-brand text-white py-2hover:brightness-110 px-3 py-2 text-sm rounded-sm transition-all duration-300 ease-out">
      <li className=" hover:brightness-75" onClick={handleLogout}>
        로그아웃
      </li>
      <li className=" hover:brightness-75 pt-2 mt-2 border-t">내정보</li>
    </ul>
  );
}
