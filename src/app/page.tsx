import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-white bg-black">
      {/* 배경 이미지 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url('/space.jpg')",
        }}
      ></div>

      {/* 내용 */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* 제목 */}
        <h1 className="text-5xl font-extrabold text-blue-400 drop-shadow-lg">
          Welcome to NASA APOD
        </h1>
        <p className="mt-4 text-gray-300 text-lg">
          Explore the universe, one picture at a time.
        </p>

        {/* 버튼 */}
        <Link
          href="/apod"
          className="mt-10 px-8 py-3 bg-blue-600 text-white font-semibold text-lg rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-200"
        >
          View Today's Picture
        </Link>
      </div>
    </div>
  );
}
