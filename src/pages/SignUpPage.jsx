import { useNavigate } from "react-router-dom";
import { handleEmailSignUp } from "../api/firebase";
import Button from "../components/ui/Button";
import useFormInput from "../hooks/useFormInput";

export default function SignUpPage() {
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/.test(
      email
    )
      ? ""
      : "올바른 이메일을 입력해주세요";
  };

  const validatePassword = (password) => {
    return /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]{8,20}$/.test(password)
      ? ""
      : "영소문자와 숫자를 포함하여 8자이상이어야 합니다.";
  };

  const validatePasswordConfirm = (password1, password2) => {
    return password1 === password2 ? "" : "비밀번호가 일치하지 않습니다.";
  };

  const name = useFormInput("");
  const email = useFormInput("", validateEmail);
  const password = useFormInput("", validatePassword);
  const passwordConfirm = useFormInput("", (value) =>
    validatePasswordConfirm(password.value, value)
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.error || password.error) {
      return;
    }
    try {
      await handleEmailSignUp(email.value, password.value);
      alert("회원가입 성공");
      navigate("/login");
    } catch {
      alert("오류발생");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-[80vh] flex flex-col justify-center items-center"
    >
      <p className="text-3xl mb-5">회원가입</p>
      <div className="w-[400px] mb-4">
        <input
          required
          {...name}
          type="text"
          className="border w-full h-12 text-lg px-3"
          placeholder="이름을 입력하세요."
        />
      </div>
      <div className="w-[400px] text-left mb-4">
        <input
          required
          {...email}
          type="email"
          className="border w-full h-12 text-lg px-3"
          placeholder="이메일을 입력하세요."
        />
        {email.error && (
          <span className="text-red-500 pl-1 text-sm mt-2 block">
            {email.error}
          </span>
        )}
      </div>
      <div className="w-[400px] text-left mb-4">
        <input
          required
          {...password}
          type="password"
          className="border w-full h-12 text-lg px-3"
          placeholder="비밀번호를 입력하세요."
        />
        {password.error && (
          <span className="text-red-500 pl-1 text-sm mt-2 block">
            {password.error}
          </span>
        )}
      </div>
      <div className="w-[400px] text-left mb-8">
        <input
          {...passwordConfirm}
          required
          type="password"
          className="border w-full h-12 text-lg px-3"
          placeholder="비밀번호를 확인하세요."
        />
        {passwordConfirm.error && (
          <span className="text-red-500 pl-1 text-sm mt-2 block">
            {passwordConfirm.error}
          </span>
        )}
      </div>
      <Button text="회원가입 하기" />
    </form>
  );
}
