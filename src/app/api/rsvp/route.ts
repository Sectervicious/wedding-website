import { NextResponse } from "next/server";
import { getRsvpProvider, submitRsvp, type RsvpGuest, type RsvpPayload } from "@/lib/rsvp";

export async function GET() {
  const provider = getRsvpProvider();
  return NextResponse.json({
    configured: Boolean(provider),
    provider: provider ?? null,
  });
}

function asGuest(value: unknown): RsvpGuest {
  const guest = (value ?? {}) as Partial<RsvpGuest>;
  return {
    name: String(guest.name ?? ""),
    allergy: guest.allergy === "yes" ? "yes" : guest.allergy === "no" ? "no" : ("" as RsvpGuest["allergy"]),
    allergyDetail: guest.allergyDetail ? String(guest.allergyDetail) : undefined,
  };
}

export async function POST(request: Request) {
  let body: Partial<RsvpPayload> & { guests?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, reason: "invalid" }, { status: 400 });
  }

  const partySize = Number(body.partySize);
  const guests = Array.isArray(body.guests) ? body.guests.map(asGuest) : [];

  const result = await submitRsvp({
    name: String(body.name ?? ""),
    email: String(body.email ?? ""),
    partySize,
    guests,
    accommodation: body.accommodation === "yes" ? "yes" : body.accommodation === "no" ? "no" : ("" as RsvpPayload["accommodation"]),
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
