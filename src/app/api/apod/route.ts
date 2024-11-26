import { NextResponse } from "next/server";
import axios from "axios";

const NASA_APOD_URL = "https://api.nasa.gov/planetary/apod";

export async function GET() {
  const apiKey = process.env.NASA_API_KEY;

  try {
    const response = await axios.get(NASA_APOD_URL, {
      params: { api_key: apiKey },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data from NASA API" },
      { status: 500 }
    );
  }
}
