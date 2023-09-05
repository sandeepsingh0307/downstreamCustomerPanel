import { NextResponse } from "next/server";

const baseUrl = process.env.BASE_URL || "https://contactwindos.azurewebsites.net";

export async function GET(request: Request) {
  const response = await fetch(`${baseUrl}/map/ruleset`);
  const data = await response.json();
  console.log("data", data);
  return NextResponse.json({
    body: data,
  });
}
