import { NextResponse } from "next/server";
import translate from "google-translate-api-x";

export async function POST(request: Request) {
  const { text } = await request.json(); // 클라이언트에서 번역할 텍스트 받기

  try {
    // Google Translate 비공식 API를 사용하여 번역
    const result = await translate(text, { from: "en", to: "ko" }); // 영어 → 한국어 번역
    const translationText = Array.isArray(result)
      ? result[0].text
      : result.text; // 배열일 경우 첫 번째 요소의 text 사용
    return NextResponse.json({ translation: translationText }); // 번역 결과 반환
  } catch (error) {
    console.error("Translation error:", error);
    return NextResponse.json(
      { error: "Failed to translate text" },
      { status: 500 }
    );
  }
}
