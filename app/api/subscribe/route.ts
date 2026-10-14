import { NextResponse } from "next/server";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    const email =
      typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const audienceId = process.env.RESEND_AUDIENCE_ID;

    if (!apiKey || !audienceId) {
      return NextResponse.json({
        ok: false,
        message: "Newsletter launching soon. Check back shortly.",
      });
    }

    const res = await fetch(
      `https://api.resend.com/audiences/${audienceId}/contacts`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { ok: false, message: "Could not subscribe right now. Try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: "You are on the list. Watch your inbox for the next issue.",
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Something went wrong. Try again later." },
      { status: 500 }
    );
  }
}
