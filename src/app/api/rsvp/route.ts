import { NextResponse } from "next/server";
import { getRsvpProvider, submitRsvp, type RsvpPayload } from "@/lib/rsvp";

export async function GET() {
  const provider = getRsvpProvider();
  return NextResponse.json({
    configured: Boolean(provider),
    provider: provider ?? null,
  });
}

export async function POST(request: Request) {
  let body: Partial<RsvpPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, reason: "invalid" }, { status: 400 });
  }

  const result = await submitRsvp({
    name: String(body.name ?? ""),
    email: String(body.email ?? ""),
    attending: body.attending as RsvpPayload["attending"],
    plusOne: body.plusOne as RsvpPayload["plusOne"],
    plusOneName: body.plusOneName ? String(body.plusOneName) : undefined,
    diet: body.diet ? String(body.diet) : undefined,
    message: body.message ? String(body.message) : undefined,
    locale: body.locale ? String(body.locale) : undefined,
  });

  if (!result.ok) {
    const status =
      result.reason === "unconfigured"
        ? 503
        : result.reason === "invalid"
          ? 400
          : 502;
    return NextResponse.json(result, { status });
  }

  return NextResponse.json(result);
}
