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

  useEffect(() => {
    const fetchAPOD = async () => {
      const response = await fetch("/api/apod");
      const apodData = await response.json();
      setData(apodData);
    };

    fetchAPOD();
  }, []);

  if (!data) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold">{data.title}</h1>
      <p className="text-gray-600">{data.date}</p>
      <img
        src={data.url}
        alt={data.title}
        className="mt-4 max-w-md rounded shadow"
      />
      <p className="mt-4 text-gray-800">{data.explanation}</p>
    </div>
  );
}
