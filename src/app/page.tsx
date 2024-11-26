import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-800">
        Welcome to NASA APOD App
      </h1>
      <p className="mt-4 text-gray-600">
        Explore the universe one picture at a time.
      </p>
      <Link
        href="/apod"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        View Today's Picture
      </Link>
    </div>
  );
}
