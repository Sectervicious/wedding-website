import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { RsvpPayload } from "@/lib/rsvp";

export const RSVP_DRAFT_KEY = "wedding-rsvp-draft-v1";
export const MAX_PARTY = 10;

export type Attendance = "" | "yes" | "no";
export type YesNo = "" | "yes" | "no";

export type GuestDraft = {
  name: string;
  allergy: YesNo;
  allergyDetail: string;
};

export type RsvpDraft = {
  open: boolean;
  attendance: Attendance;
  name: string;
  email: string;
  partySize: number;
  guests: GuestDraft[];
  accommodation: YesNo;
};

export type FieldErrors = Record<string, string>;

export function blankGuest(): GuestDraft {
  return { name: "", allergy: "", allergyDetail: "" };
}

export function emptyDraft(): RsvpDraft {
  return {
    open: false,
    attendance: "",
    name: "",
    email: "",
    partySize: 1,
    guests: [blankGuest()],
    accommodation: "",
  };
}

function asYesNo(value: unknown): YesNo {
  return value === "yes" || value === "no" ? value : "";
}

function asAttendance(value: unknown): Attendance {
  return value === "yes" || value === "no" ? value : "";
}

export function sanitizeDraft(value: unknown): RsvpDraft {
  const raw = (value ?? {}) as Partial<RsvpDraft>;
  const partySize = Number(raw.partySize);
  const safeSize = Number.isInteger(partySize)
    ? Math.min(MAX_PARTY, Math.max(1, partySize))
    : 1;
  const guests = Array.isArray(raw.guests) ? raw.guests.slice(0, MAX_PARTY) : [];
  while (guests.length < safeSize) guests.push(blankGuest());

  return {
    open: Boolean(raw.open),
    attendance: asAttendance(raw.attendance),
    name: typeof raw.name === "string" ? raw.name : "",
    email: typeof raw.email === "string" ? raw.email : "",
    partySize: safeSize,
    guests: guests.map((guest) => {
      const item = (guest ?? {}) as Partial<GuestDraft>;
      return {
        name: typeof item.name === "string" ? item.name : "",
        allergy: asYesNo(item.allergy),
        allergyDetail:
          typeof item.allergyDetail === "string" ? item.allergyDetail : "",
      };
    }),
    accommodation: asYesNo(raw.accommodation),
  };
}

const SERVER_DRAFT: RsvpDraft = {
  open: false,
  attendance: "",
  name: "",
  email: "",
  partySize: 1,
  guests: [{ name: "", allergy: "", allergyDetail: "" }],
  accommodation: "",
};

let memoryRaw: string | null | undefined;
let memory: RsvpDraft = SERVER_DRAFT;
const listeners = new Set<() => void>();

function emitDraft() {
  for (const listener of listeners) listener();
}

export function subscribeDraft(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getServerDraft(): RsvpDraft {
  return SERVER_DRAFT;
}

export function getDraftSnapshot(): RsvpDraft {
  if (typeof window === "undefined") return SERVER_DRAFT;
  let raw: string | null = null;
  try {
    raw = sessionStorage.getItem(RSVP_DRAFT_KEY);
  } catch {
    raw = null;
  }
  if (raw === memoryRaw) return memory;
  memoryRaw = raw;
  if (!raw) {
    memory = SERVER_DRAFT;
    return memory;
  }
  try {
    memory = sanitizeDraft(JSON.parse(raw));
  } catch {
    memory = SERVER_DRAFT;
  }
  return memory;
}

export function saveDraft(draft: RsvpDraft) {
  const raw = JSON.stringify(draft);
  sessionStorage.setItem(RSVP_DRAFT_KEY, raw);
  memoryRaw = raw;
  memory = draft;
  emitDraft();
}

export function clearDraft() {
  sessionStorage.removeItem(RSVP_DRAFT_KEY);
  memoryRaw = null;
  memory = {
    ...SERVER_DRAFT,
    guests: [{ name: "", allergy: "", allergyDetail: "" }],
  };
  emitDraft();
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateDraft(
  draft: RsvpDraft,
  messages: Dictionary["rsvp"]["errors"],
): FieldErrors {
  const errors: FieldErrors = {};
  if (draft.attendance !== "yes" && draft.attendance !== "no") {
    errors.attendance = messages.attendance;
  }
  if (!draft.name.trim()) errors.name = messages.name;
  if (!EMAIL.test(draft.email.trim())) errors.email = messages.email;

  if (draft.attendance === "yes") {
    if (
      !Number.isInteger(draft.partySize) ||
      draft.partySize < 1 ||
      draft.partySize > MAX_PARTY
    ) {
      errors.partySize = messages.partySize;
    }
    draft.guests.slice(0, draft.partySize).forEach((guest, index) => {
      if (!guest.name.trim()) errors[`guest-${index}-name`] = messages.guestName;
      if (guest.allergy !== "yes" && guest.allergy !== "no") {
        errors[`guest-${index}-allergy`] = messages.allergy;
      }
      if (guest.allergy === "yes" && !guest.allergyDetail.trim()) {
        errors[`guest-${index}-detail`] = messages.allergyDetail;
      }
    });
    if (draft.accommodation !== "yes" && draft.accommodation !== "no") {
      errors.accommodation = messages.accommodation;
    }
  }

  return errors;
}

export function errorOrder(errors: FieldErrors, partySize: number): string[] {
  const keys = ["attendance", "name", "email", "partySize"];
  for (let index = 0; index < partySize; index += 1) {
    keys.push(
      `guest-${index}-name`,
      `guest-${index}-allergy`,
      `guest-${index}-detail`,
    );
  }
  keys.push("accommodation");
  return keys.filter((key) => errors[key]);
}

export function toPayload(draft: RsvpDraft, locale: string): RsvpPayload {
  if (draft.attendance !== "yes") {
    return {
      name: draft.name.trim(),
      email: draft.email.trim(),
      partySize: 0,
      guests: [],
      accommodation: "no",
      locale,
    };
  }

  return {
    name: draft.name.trim(),
    email: draft.email.trim(),
    partySize: draft.partySize,
    guests: draft.guests.slice(0, draft.partySize).map((guest) => ({
      name: guest.name.trim(),
      allergy: guest.allergy === "yes" ? "yes" : "no",
      ...(guest.allergy === "yes"
        ? { allergyDetail: guest.allergyDetail.trim() }
        : {}),
    })),
    accommodation: draft.accommodation === "yes" ? "yes" : "no",
    locale,
  };
}
