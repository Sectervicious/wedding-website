"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";

type Props = {
  locale: Locale;
  dict: Dictionary;
  open: boolean;
  onClose: () => void;
};

type Status = "idle" | "submitting" | "success" | "error" | "unconfigured";

type Guest = {
  name: string;
  allergy: "" | "yes" | "no";
  allergyDetail: string;
};

const MAX_PARTY = 10;

function blankGuest(): Guest {
  return { name: "", allergy: "", allergyDetail: "" };
}

function resizeGuests(guests: Guest[], size: number): Guest[] {
  const next = guests.slice(0, size);
  while (next.length < size) next.push(blankGuest());
  return next;
}

export function RsvpForm({ locale, dict, open, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [partySize, setPartySize] = useState(1);
  const [guests, setGuests] = useState<Guest[]>([blankGuest()]);
  const [accommodation, setAccommodation] = useState<"" | "yes" | "no">("");

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  function onPartySize(value: string) {
    const parsed = Number.parseInt(value, 10);
    const size = Number.isNaN(parsed)
      ? 0
      : Math.min(MAX_PARTY, Math.max(0, parsed));
    setPartySize(size);
    setGuests((current) => resizeGuests(current, size));
    if (size === 0) setAccommodation("no");
  }

  function updateGuest(index: number, patch: Partial<Guest>) {
    setGuests((current) =>
      current.map((guest, i) => (i === index ? { ...guest, ...patch } : guest)),
    );
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          partySize,
          guests: guests.map((guest) => ({
            name: guest.name,
            allergy: guest.allergy,
            allergyDetail:
              guest.allergy === "yes" ? guest.allergyDetail : undefined,
          })),
          accommodation: partySize === 0 ? "no" : accommodation,
          locale,
        }),
      });

      const json = (await res.json()) as { ok?: boolean; reason?: string };

      if (res.status === 503 || json.reason === "unconfigured") {
        setStatus("unconfigured");
        return;
      }

      if (!res.ok || !json.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
      setPartySize(1);
      setGuests([blankGuest()]);
      setAccommodation("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="rsvp-dialog"
      aria-labelledby="rsvp-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) dialogRef.current?.close();
      }}
    >
      <div className="relative px-6 py-8 sm:px-10 sm:py-10">
        <button
          type="button"
          className="absolute right-4 top-4 px-2 text-2xl leading-none text-muted transition-colors hover:text-ink"
          aria-label={dict.rsvp.close}
          onClick={() => dialogRef.current?.close()}
        >
          ×
        </button>
        <p className="section-kicker">{dict.nav.rsvp}</p>
        <h2 id="rsvp-title" className="section-title mt-3 text-ink">
          {dict.rsvp.title}
        </h2>
        <p className="mt-3 text-ink-soft">{dict.rsvp.lead}</p>

        <form onSubmit={onSubmit} className="mt-10 space-y-6">
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink">
              {dict.rsvp.name}
            </span>
            <input
              name="name"
              required
              autoComplete="name"
              className="input-field"
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink">
              {dict.rsvp.email}
            </span>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              className="input-field"
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink">
              {dict.rsvp.partySize}
            </span>
            <input
              name="partySize"
              type="number"
              inputMode="numeric"
              min={0}
              max={MAX_PARTY}
              required
              value={partySize}
              onChange={(event) => onPartySize(event.target.value)}
              className="input-field max-w-28"
            />
            <span className="mt-1.5 block text-sm text-muted">
              {dict.rsvp.partySizeHint}
            </span>
          </label>

          {guests.map((guest, index) => (
            <fieldset
              key={index}
              className="space-y-4 border-t border-[var(--line)] pt-5"
            >
              <legend className="text-sm font-medium tracking-wide text-muted">
                {dict.rsvp.guestLabel} {index + 1}
              </legend>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-ink">
                  {dict.rsvp.guestName}
                </span>
                <input
                  required
                  autoComplete="name"
                  value={guest.name}
                  onChange={(event) =>
                    updateGuest(index, { name: event.target.value })
                  }
                  className="input-field"
                />
              </label>
              <div>
                <p className="mb-2 text-sm font-medium text-ink">
                  {dict.rsvp.allergy}
                </p>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 text-ink-soft">
                    <input
                      type="radio"
                      name={`allergy-${index}`}
                      value="yes"
                      checked={guest.allergy === "yes"}
                      onChange={() => updateGuest(index, { allergy: "yes" })}
                      required
                    />
                    {dict.rsvp.allergyYes}
                  </label>
                  <label className="flex items-center gap-2 text-ink-soft">
                    <input
                      type="radio"
                      name={`allergy-${index}`}
                      value="no"
                      checked={guest.allergy === "no"}
                      onChange={() =>
                        updateGuest(index, {
                          allergy: "no",
                          allergyDetail: "",
                        })
                      }
                    />
                    {dict.rsvp.allergyNo}
                  </label>
                </div>
              </div>
              {guest.allergy === "yes" && (
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-ink">
                    {dict.rsvp.allergyDetail}
                  </span>
                  <input
                    required
                    value={guest.allergyDetail}
                    onChange={(event) =>
                      updateGuest(index, { allergyDetail: event.target.value })
                    }
                    className="input-field"
                  />
                </label>
              )}
            </fieldset>
          ))}

          {partySize > 0 && (
            <fieldset className="border-t border-[var(--line)] pt-5">
              <legend className="mb-2 text-sm font-medium text-ink">
                {dict.rsvp.accommodation}
              </legend>
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
                <label className="flex items-center gap-2 text-ink-soft">
                  <input
                    type="radio"
                    name="accommodation"
                    value="yes"
                    checked={accommodation === "yes"}
                    onChange={() => setAccommodation("yes")}
                    required
                  />
                  {dict.rsvp.accommodationYes}
                </label>
                <label className="flex items-center gap-2 text-ink-soft">
                  <input
                    type="radio"
                    name="accommodation"
                    value="no"
                    checked={accommodation === "no"}
                    onChange={() => setAccommodation("no")}
                  />
                  {dict.rsvp.accommodationNo}
                </label>
              </div>
            </fieldset>
          )}

          <button
            type="submit"
            className="btn-primary w-full sm:w-auto"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? dict.rsvp.submitting : dict.rsvp.submit}
          </button>

          {status === "success" && (
            <p className="text-sm font-medium text-ink" role="status">
              {dict.rsvp.success}
            </p>
          )}
          {status === "error" && (
            <p className="text-sm font-medium text-ink-soft" role="alert">
              {dict.rsvp.error}
            </p>
          )}
          {status === "unconfigured" && (
            <p className="text-sm font-medium text-muted" role="status">
              {dict.rsvp.unconfigured}
            </p>
          )}
        </form>
      </div>
    </dialog>
  );
}
