import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col item-center justify-between min-h-screen p-6">
      <div className="my-auto flex flex-col items-center *:font-medium">
        <h2 className="text-7xl">GOOGLE</h2>
        <h2 className="text-2xl">안녕하세요!</h2>
      </div>
      <div className="flex flex-col items-center gap-3 w-full">
        <Link href="/create-account" className="primary-btn py-2.5 text-lg">
          시작하기
        </Link>
        <div className="flex gap-2">
          <span>이미 계정이 있나요?</span>
          <Link href="/login" className="hover:underline underline-offset-4">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
