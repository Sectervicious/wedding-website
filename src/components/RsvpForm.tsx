"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

type Status = "idle" | "submitting" | "success" | "error" | "unconfigured";

export function RsvpForm({ locale, dict }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [attending, setAttending] = useState<"yes" | "no">("yes");
  const [plusOne, setPlusOne] = useState<"yes" | "no">("no");

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
          attending: data.get("attending"),
          plusOne: data.get("plusOne"),
          plusOneName: data.get("plusOneName") || undefined,
          diet: data.get("diet") || undefined,
          message: data.get("message") || undefined,
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
      setAttending("yes");
      setPlusOne("no");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="rsvp" className="site-section bg-fog-deep/40 bg-fog">
      <div className="mx-auto max-w-xl px-4 sm:px-6">
        <p className="section-kicker">{dict.nav.rsvp}</p>
        <h2 className="font-display mt-3 text-4xl text-ink sm:text-5xl">
          {dict.rsvp.title}
        </h2>
        <p className="mt-3 text-ink-soft">{dict.rsvp.lead}</p>

        <form onSubmit={onSubmit} className="mt-10 space-y-5">
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

          <fieldset>
            <legend className="mb-2 text-sm font-medium text-ink">
              {dict.rsvp.attendance}
            </legend>
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
              <label className="flex items-center gap-2 text-ink-soft">
                <input
                  type="radio"
                  name="attending"
                  value="yes"
                  checked={attending === "yes"}
                  onChange={() => setAttending("yes")}
                  required
                />
                {dict.rsvp.yes}
              </label>
              <label className="flex items-center gap-2 text-ink-soft">
                <input
                  type="radio"
                  name="attending"
                  value="no"
                  checked={attending === "no"}
                  onChange={() => setAttending("no")}
                />
                {dict.rsvp.no}
              </label>
            </div>
          </fieldset>

          {attending === "yes" && (
            <>
              <fieldset>
                <legend className="mb-2 text-sm font-medium text-ink">
                  {dict.rsvp.plusOne}
                </legend>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 text-ink-soft">
                    <input
                      type="radio"
                      name="plusOne"
                      value="yes"
                      checked={plusOne === "yes"}
                      onChange={() => setPlusOne("yes")}
                      required
                    />
                    {dict.rsvp.plusOneYes}
                  </label>
                  <label className="flex items-center gap-2 text-ink-soft">
                    <input
                      type="radio"
                      name="plusOne"
                      value="no"
                      checked={plusOne === "no"}
                      onChange={() => setPlusOne("no")}
                    />
                    {dict.rsvp.plusOneNo}
                  </label>
                </div>
              </fieldset>

              {plusOne === "yes" && (
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-ink">
                    {dict.rsvp.plusOneName}
                  </span>
                  <input name="plusOneName" className="input-field" />
                </label>
              )}

              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-ink">
                  {dict.rsvp.diet}
                </span>
                <input
                  name="diet"
                  placeholder={dict.rsvp.dietPlaceholder}
                  className="input-field"
                />
              </label>
            </>
          )}

          {attending === "no" && (
            <input type="hidden" name="plusOne" value="no" />
          )}

          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink">
              {dict.rsvp.message}
            </span>
            <textarea name="message" rows={3} className="input-field resize-y" />
          </label>

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
    </section>
  );
}
