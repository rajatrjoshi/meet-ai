import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { auth } = await import("@/lib/auth");
    const { toNextJsHandler } = await import("better-auth/next-js");
    const handler = toNextJsHandler(auth);
    return handler.GET(request);
  } catch (error) {
    console.error("Auth GET error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { auth } = await import("@/lib/auth");
    const { toNextJsHandler } = await import("better-auth/next-js");
    const handler = toNextJsHandler(auth);
    return handler.POST(request);
  } catch (error) {
    console.error("Auth POST error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}