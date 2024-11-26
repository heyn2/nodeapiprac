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
    return <p className="text-center mt-20">Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-800">{data.title}</h1>
      <p className="text-gray-600">{data.date}</p>
      <img
        src={data.url}
        alt={data.title}
        className="mt-4 max-w-md rounded shadow"
      />
      <p className="mt-4 text-gray-800">{translatedText || data.explanation}</p>
      {!translatedText && (
        <button
          onClick={translateText}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          번역하기
        </button>
      )}
    </div>
  );
}
