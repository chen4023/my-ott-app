import Button from "../components/ui/Button";

export default function SignUpPage() {
  return (
    <div className="w-full h-[80vh] flex flex-col justify-center items-center">
      <p className="text-3xl mb-5">회원가입</p>
      <input
        className="border w-[400px] mb-4 h-12 text-lg px-3"
        placeholder="이름을 입력하세요."
        type="text"
      />
      <input
        className="border w-[400px] mb-4 h-12 text-lg px-3"
        placeholder="이메일을 입력하세요."
        type="email"
      />
      <input
        className="border w-[400px] mb-4 h-12 text-lg px-3"
        placeholder=" 비밀번호를 입력하세요."
        type="password"
      />
      <input
        className="border w-[400px] mb-8 h-12 text-lg px-3"
        placeholder="비밀번호를 확인하세요."
        type="password"
      />
      <Button text="회원가입 하기" />
    </div>
  );
}
