import { useNavigate } from "react-router-dom";
import { handleEmailSignIn, handleGoogleSignIn } from "../api/firebase";
import Button from "../components/ui/Button";
import useFormInput from "../hooks/useFormInput";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const navigate = useNavigate();
  const email = useFormInput("");
  const password = useFormInput("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleEmailSignIn(email.value, password.value);
      alert("✅ 로그인 성공");
      navigate("/");
    } catch {
      alert("오류가 발생했습니다.");
    }
  };

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    try {
      await handleGoogleSignIn();
      navigate("/");
    } catch {
      alert("오류가 발생했습니다.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-[80vh] flex flex-col justify-center items-center"
    >
      <p className="text-3xl mb-5">로그인</p>
      <p className="text-xl mb-5">
        로그인을 하시면 더욱 많은 서비스를 이용하실 수 있습니다.
      </p>
      <input
        required
        {...email}
        type="email"
        className="border w-[400px] mb-4 h-12 text-lg px-3"
        placeholder="이메일을 입력하세요."
      />
      <input
        required
        {...password}
        type="password"
        className="border w-[400px] mb-8 h-12 text-lg px-3"
        placeholder=" 비밀번호를 입력하세요."
      />

      <Button text="로그인 하기" />

      <button className="border mt-3 w-[400px] px-6 py-3 rounded-md text-lg">
        <div className="flex justify-center items-center">
          <FcGoogle size="25px" />
          <span onClick={handleGoogleLogin} className="ml-2">
            Google 로그인
          </span>
        </div>
      </button>
    </form>
  );
}
