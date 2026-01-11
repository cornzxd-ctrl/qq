import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  // TODO — Replace this w/ real DB logic
  console.log("Saving quote →", body);

  return NextResponse.json({ success: true });
}
