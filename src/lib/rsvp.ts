export type RsvpGuest = {
  name: string;
  allergy: "yes" | "no";
  allergyDetail?: string;
};

export type RsvpPayload = {
  name: string;
  email: string;
  partySize: number;
  guests: RsvpGuest[];
  accommodation: "yes" | "no";
  locale?: string;
};

export type RsvpResult =
  | { ok: true; provider: "formspree" | "supabase" }
  | { ok: false; reason: "unconfigured" | "provider_error" | "invalid"; detail?: string };

const MAX_PARTY = 10;

function validate(payload: RsvpPayload): string | null {
  if (!payload.name?.trim()) return "name required";
  if (!payload.email?.trim() || !payload.email.includes("@")) return "email required";
  if (
    !Number.isInteger(payload.partySize) ||
    payload.partySize < 0 ||
    payload.partySize > MAX_PARTY
  ) {
    return "party size required";
  }
  if (!Array.isArray(payload.guests) || payload.guests.length !== payload.partySize) {
    return "guest list required";
  }
  for (const guest of payload.guests) {
    if (!guest?.name?.trim()) return "guest name required";
    if (guest.allergy !== "yes" && guest.allergy !== "no") return "allergy required";
    if (guest.allergy === "yes" && !guest.allergyDetail?.trim()) {
      return "allergy detail required";
    }
  }
  if (payload.accommodation !== "yes" && payload.accommodation !== "no") {
    return "accommodation required";
  }
  return null;
}

function guestSummary(guests: RsvpGuest[]): string {
  return guests
    .map((guest, index) => {
      const allergy =
        guest.allergy === "yes"
          ? `allergy: ${guest.allergyDetail?.trim()}`
          : "no allergy";
      return `${index + 1}. ${guest.name.trim()} — ${allergy}`;
    })
    .join("\n");
}

export function getRsvpProvider(): "formspree" | "supabase" | null {
  if (process.env.FORMSPREE_FORM_ID) return "formspree";
  if (
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.SUPABASE_SERVICE_ROLE_KEY
  ) {
    return "supabase";
  }
  return null;
}

async function submitFormspree(payload: RsvpPayload): Promise<RsvpResult> {
  const formId = process.env.FORMSPREE_FORM_ID!;
  const res = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      partySize: payload.partySize,
      guests: guestSummary(payload.guests),
      accommodation: payload.accommodation,
      locale: payload.locale ?? "",
      _subject: `Wedding reply — ${payload.name}`,
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    return { ok: false, reason: "provider_error", detail: text.slice(0, 200) };
  }
  return { ok: true, provider: "formspree" };
}

async function submitSupabase(payload: RsvpPayload): Promise<RsvpResult> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  const table = process.env.SUPABASE_RSVP_TABLE || "rsvps";

  const res = await fetch(`${url}/rest/v1/${table}`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      party_size: payload.partySize,
      guests: payload.guests,
      accommodation: payload.accommodation,
      locale: payload.locale || null,
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    return { ok: false, reason: "provider_error", detail: text.slice(0, 200) };
  }
  return { ok: true, provider: "supabase" };
}

export async function submitRsvp(payload: RsvpPayload): Promise<RsvpResult> {
  const invalid = validate(payload);
  if (invalid) return { ok: false, reason: "invalid", detail: invalid };

  const provider = getRsvpProvider();
  if (!provider) return { ok: false, reason: "unconfigured" };

  try {
    if (provider === "formspree") return await submitFormspree(payload);
    return await submitSupabase(payload);
  } catch (err) {
    return {
      ok: false,
      reason: "provider_error",
      detail: err instanceof Error ? err.message : "unknown",
    };
  }
}
