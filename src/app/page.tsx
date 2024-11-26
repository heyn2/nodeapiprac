import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* 제목 */}
      <h1 className="text-5xl font-extrabold text-blue-400 drop-shadow-lg">
        Welcome to NASA APOD
      </h1>
      <p className="mt-4 text-gray-400 text-lg">
        Explore the universe, one picture at a time.
      </p>

      {/* 메인 이미지 */}
      <div className="mt-8">
        <img
          src="/space-hero.jpg" // 배경에 어울리는 우주 이미지를 추가 (public 폴더에 저장)
          alt="Space hero"
          className="w-96 max-w-full rounded-lg shadow-lg border border-blue-500"
        />
      </div>

      {/* 버튼 */}
      <Link
        href="/apod"
        className="mt-10 px-8 py-3 bg-blue-600 text-white font-semibold text-lg rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-200"
      >
        View Today's Picture
      </Link>

      {/* 푸터 */}
      <footer className="mt-10 text-sm text-gray-500">
        <p>
          Powered by NASA's{" "}
          <a
            href="https://apod.nasa.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 underline"
          >
            Astronomy Picture of the Day (APOD)
          </a>
        </p>
      </footer>
    </div>
  );
}
