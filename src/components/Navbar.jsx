import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-between items-center max-w-screen-2xl mb-3">
      <div
        onClick={() => navigate("/")}
        className="text-3xl font-bold cursor-pointer"
      >
        OzTV
      </div>
      <div className="text-lg cursor-pointer">
        <span onClick={() => navigate("/login")} className="mr-3">
          로그인
        </span>
        <span onClick={() => navigate("/signup")}>회원가입</span>
      </div>
    </div>
  );
}
