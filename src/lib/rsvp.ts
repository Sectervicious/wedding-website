export type RsvpPayload = {
  name: string;
  email: string;
  attending: "yes" | "no";
  plusOne: "yes" | "no";
  plusOneName?: string;
  diet?: string;
  message?: string;
  locale?: string;
};

export type RsvpResult =
  | { ok: true; provider: "formspree" | "supabase" }
  | { ok: false; reason: "unconfigured" | "provider_error" | "invalid"; detail?: string };

function validate(payload: RsvpPayload): string | null {
  if (!payload.name?.trim()) return "name required";
  if (!payload.email?.trim() || !payload.email.includes("@")) return "email required";
  if (payload.attending !== "yes" && payload.attending !== "no") {
    return "attendance required";
  }
  if (payload.plusOne !== "yes" && payload.plusOne !== "no") {
    return "plusOne required";
  }
  return null;
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
      attending: payload.attending,
      plusOne: payload.plusOne,
      plusOneName: payload.plusOneName ?? "",
      diet: payload.diet ?? "",
      message: payload.message ?? "",
      locale: payload.locale ?? "",
      _subject: `Wedding RSVP — ${payload.name}`,
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
      attending: payload.attending,
      plus_one: payload.plusOne === "yes",
      plus_one_name: payload.plusOneName || null,
      diet: payload.diet || null,
      message: payload.message || null,
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
