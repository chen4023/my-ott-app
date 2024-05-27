import Button from "../components/ui/Button";

export default function LoginPage() {
  return (
    <div className="w-full h-[80vh] flex flex-col justify-center items-center">
      <p className="text-3xl mb-5">로그인</p>
      <p className="text-xl mb-5">
        로그인을 하시면 더욱 많은 서비스를 이용하실 수 있습니다.
      </p>
      <input
        className="border w-[400px] mb-4 h-12 text-lg px-3"
        placeholder="이메일을 입력하세요."
        type="email"
      />
      <input
        className="border w-[400px] mb-8 h-12 text-lg px-3"
        placeholder=" 비밀번호를 입력하세요."
        type="password"
      />

      <Button text="로그인 하기" />
    </div>
  );
}
