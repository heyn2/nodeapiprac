"use client";

import { useEffect, useState } from "react";

interface APODData {
  title: string;
  date: string;
  explanation: string;
  url: string;
}

export default function APODPage() {
  const [data, setData] = useState<APODData | null>(null);
  const [translatedText, setTranslatedText] = useState<string | null>(null);

  useEffect(() => {
    const fetchAPOD = async () => {
      try {
        const response = await fetch("/api/apod"); // NASA APOD 데이터를 가져옵니다
        const apodData = await response.json();
        setData(apodData);
      } catch (error) {
        console.error("Error fetching APOD data:", error);
      }
    };

    fetchAPOD();
  }, []);

  const translateText = async () => {
    if (!data?.explanation) return;

    try {
      const response = await fetch("/api/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: data.explanation }), // 영어 설명 전달
      });

      const result = await response.json();
      setTranslatedText(result.translation); // 번역 결과 저장
    } catch (error) {
      console.error("Error translating text:", error);
    }
  };

  if (!data) {
    return <p className="text-center mt-20 text-white">Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white font-sans">
      {/* 제목 */}
      <h1 className="text-4xl font-extrabold text-blue-300 drop-shadow-lg mb-2">
        {data.title}
      </h1>
      <p className="text-gray-400 text-sm">{data.date}</p>

      {/* 이미지 */}
      <img
        src={data.url}
        alt={data.title}
        className="mt-6 max-w-lg rounded-lg shadow-lg border border-blue-500"
      />

      {/* 설명 */}
      <p className="mt-6 text-center px-4 sm:px-10 leading-relaxed text-lg">
        {translatedText || data.explanation}
      </p>

      {/* 번역 버튼 */}
      {!translatedText && (
        <button
          onClick={translateText}
          className="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-200"
        >
          번역하기
        </button>
      )}

      {/* 푸터 */}
      <footer className="mt-10 text-sm text-gray-500">
        <p>
          Data provided by NASA's{" "}
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
