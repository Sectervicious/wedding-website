"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore, type FormEvent } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { ContactEmails } from "./Contact";
import {
  MAX_PARTY,
  blankGuest,
  emptyDraft,
  errorOrder,
  getDraftSnapshot,
  getServerDraft,
  saveDraft,
  subscribeDraft,
  toPayload,
  validateDraft,
  type FieldErrors,
  type GuestDraft,
  type RsvpDraft,
} from "@/lib/rsvp-draft";

type Props = {
  locale: Locale;
  dict: Dictionary;
  open: boolean;
  onClose: () => void;
};

type Status = "idle" | "submitting" | "success" | "error" | "unconfigured";

function fieldDomId(key: string) {
  return `rsvp-${key}`;
}

export function RsvpForm({ locale, dict, open, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const sending = useRef(false);
  const formId = useId();
  const [status, setStatus] = useState<Status>("idle");
  const draft = useSyncExternalStore(subscribeDraft, getDraftSnapshot, getServerDraft);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [errorNonce, setErrorNonce] = useState(0);

  function commit(next: RsvpDraft) {
    saveDraft({ ...next, open: draft.open });
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    if (errorNonce === 0) return;
    summaryRef.current?.focus();
  }, [errorNonce]);

  function patch(partial: Partial<RsvpDraft>, clearKeys: string[]) {
    commit({ ...draft, ...partial });
    setErrors((current) => {
      const next = { ...current };
      for (const key of clearKeys) delete next[key];
      return next;
    });
  }

  function updateGuest(index: number, guestPatch: Partial<GuestDraft>, clearKeys: string[]) {
    commit({
      ...draft,
      guests: draft.guests.map((guest, guestIndex) =>
        guestIndex === index ? { ...guest, ...guestPatch } : guest,
      ),
    });
    setErrors((current) => {
      const next = { ...current };
      for (const key of clearKeys) delete next[key];
      return next;
    });
  }

  function onPartySize(value: string) {
    const parsed = Number.parseInt(value, 10);
    const size = Number.isNaN(parsed)
      ? 1
      : Math.min(MAX_PARTY, Math.max(1, parsed));
    const guests = draft.guests.slice(0, MAX_PARTY);
    while (guests.length < size) guests.push(blankGuest());
    commit({ ...draft, partySize: size, guests });
    setErrors((current) => {
      const next = { ...current };
      delete next.partySize;
      return next;
    });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current || status === "submitting") return;

    const found = validateDraft(draft, dict.rsvp.errors);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      setErrorNonce((value) => value + 1);
      setStatus("idle");
      return;
    }

    sending.current = true;
    setStatus("submitting");
    setErrors({});

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(toPayload(draft, locale)),
      });

      let json: { ok?: boolean; reason?: string } = {};
      try {
        json = (await res.json()) as { ok?: boolean; reason?: string };
      } catch {
        json = {};
      }

      if (res.status === 503 || json.reason === "unconfigured") {
        setStatus("unconfigured");
        return;
      }

      if (!res.ok || !json.ok) {
        setStatus("error");
        return;
      }

      saveDraft({ ...emptyDraft(), open: true });
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      sending.current = false;
    }
  }

  const orderedErrors = errorOrder(errors, draft.partySize);
  const attending = draft.attendance === "yes";
  const copy = dict.rsvp;

  function summaryLabel(key: string) {
    const guest = /^guest-(\d+)-/.exec(key);
    if (!guest) return errors[key];
    return `${copy.guestLabel} ${Number(guest[1]) + 1}. ${errors[key]}`;
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
      <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-[var(--border-decorative)] bg-page px-5 py-4 sm:px-8">
        <h2 id="rsvp-title" className="section-title text-ink">
          {copy.title}
        </h2>
        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center text-3xl leading-none text-ink"
          aria-label={copy.close}
          onClick={() => dialogRef.current?.close()}
        >
          ×
        </button>
      </div>

      <div
        className="px-5 py-6 sm:px-8 sm:py-8"
        style={{ paddingBottom: "max(2rem, env(safe-area-inset-bottom))" }}
      >
        {status === "success" ? (
          <div role="status">
            <p className="control-text">{copy.success}</p>
            <ContactEmails dict={dict} className="mt-6 space-y-2" />
          </div>
        ) : (
          <form id={formId} onSubmit={onSubmit} noValidate aria-busy={status === "submitting"}>
            <p>{copy.lead}</p>
            <p className="support mt-3">{copy.requiredNote}</p>

            {orderedErrors.length > 0 ? (
              <div
                ref={summaryRef}
                tabIndex={-1}
                role="alert"
                id="rsvp-error-summary"
                className="mt-6 border border-black p-4"
              >
                <p className="control-text">{copy.errorSummary}</p>
                <ul className="mt-3 space-y-2">
                  {orderedErrors.map((key) => (
                    <li key={key}>
                      <a
                        className="text-link"
                        href={`#${fieldDomId(key)}`}
                        onClick={(event) => {
                          event.preventDefault();
                          document.getElementById(fieldDomId(key))?.focus();
                        }}
                      >
                        {summaryLabel(key)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div ref={summaryRef} tabIndex={-1} className="sr-only" />
            )}

            <fieldset
              className="mt-8"
              aria-invalid={errors.attendance ? true : undefined}
              aria-describedby={errors.attendance ? "rsvp-attendance-error" : undefined}
            >
              <legend className="control-text">
                {copy.attendance}
                <span aria-hidden="true"> *</span>
              </legend>
              <div className="mt-3 flex flex-col gap-1">
                <label className="choice">
                  <input
                    id={fieldDomId("attendance")}
                    type="radio"
                    name="attendance"
                    value="yes"
                    checked={draft.attendance === "yes"}
                    onChange={() => patch({ attendance: "yes" }, ["attendance"])}
                  />
                  {copy.attending}
                </label>
                <label className="choice">
                  <input
                    type="radio"
                    name="attendance"
                    value="no"
                    checked={draft.attendance === "no"}
                    onChange={() => patch({ attendance: "no" }, ["attendance"])}
                  />
                  {copy.declining}
                </label>
              </div>
              {errors.attendance ? (
                <p id="rsvp-attendance-error" className="mt-2">
                  {errors.attendance}
                </p>
              ) : null}
            </fieldset>

            <label className="mt-6 block" htmlFor={fieldDomId("name")}>
              <span className="control-text">
                {copy.name}
                <span aria-hidden="true"> *</span>
              </span>
              <input
                id={fieldDomId("name")}
                name="name"
                required
                autoComplete="name"
                value={draft.name}
                aria-invalid={errors.name ? true : undefined}
                aria-describedby={errors.name ? "rsvp-name-error" : undefined}
                onChange={(event) => patch({ name: event.target.value }, ["name"])}
                className="input-field mt-2"
              />
            </label>
            {errors.name ? (
              <p id="rsvp-name-error" className="mt-2">
                {errors.name}
              </p>
            ) : null}

            <label className="mt-6 block" htmlFor={fieldDomId("email")}>
              <span className="control-text">
                {copy.email}
                <span aria-hidden="true"> *</span>
              </span>
              <input
                id={fieldDomId("email")}
                name="email"
                type="email"
                required
                autoComplete="email"
                inputMode="email"
                value={draft.email}
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? "rsvp-email-error" : undefined}
                onChange={(event) => patch({ email: event.target.value }, ["email"])}
                className="input-field mt-2"
              />
            </label>
            {errors.email ? (
              <p id="rsvp-email-error" className="mt-2">
                {errors.email}
              </p>
            ) : null}

            {attending ? (
              <>
                <label className="mt-6 block" htmlFor={fieldDomId("partySize")}>
                  <span className="control-text">
                    {copy.partySize}
                    <span aria-hidden="true"> *</span>
                  </span>
                  <select
                    id={fieldDomId("partySize")}
                    name="partySize"
                    value={draft.partySize}
                    aria-invalid={errors.partySize ? true : undefined}
                    aria-describedby={
                      errors.partySize
                        ? "rsvp-partySize-error rsvp-partySize-hint"
                        : "rsvp-partySize-hint"
                    }
                    onChange={(event) => onPartySize(event.target.value)}
                    className="input-field mt-2 max-w-32"
                  >
                    {Array.from({ length: MAX_PARTY }, (_, index) => index + 1).map(
                      (size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ),
                    )}
                  </select>
                  <span id="rsvp-partySize-hint" className="support mt-2 block">
                    {copy.partySizeHint}
                  </span>
                </label>
                {errors.partySize ? (
                  <p id="rsvp-partySize-error" className="mt-2">
                    {errors.partySize}
                  </p>
                ) : null}

                {draft.guests.slice(0, draft.partySize).map((guest, index) => {
                  const nameKey = `guest-${index}-name`;
                  const allergyKey = `guest-${index}-allergy`;
                  const detailKey = `guest-${index}-detail`;
                  return (
                    <fieldset key={index} className="mt-8 border-t border-[var(--border-decorative)] pt-5">
                      <legend className="control-text">
                        {copy.guestLabel} {index + 1}
                      </legend>
                      <label className="mt-4 block" htmlFor={fieldDomId(nameKey)}>
                        <span className="control-text">
                          {copy.guestName}
                          <span aria-hidden="true"> *</span>
                        </span>
                        <input
                          id={fieldDomId(nameKey)}
                          required
                          autoComplete="name"
                          value={guest.name}
                          aria-invalid={errors[nameKey] ? true : undefined}
                          aria-describedby={
                            errors[nameKey] ? `rsvp-${nameKey}-error` : undefined
                          }
                          onChange={(event) =>
                            updateGuest(index, { name: event.target.value }, [nameKey])
                          }
                          className="input-field mt-2"
                        />
                      </label>
                      {errors[nameKey] ? (
                        <p id={`rsvp-${nameKey}-error`} className="mt-2">
                          {errors[nameKey]}
                        </p>
                      ) : null}

                      <fieldset
                        className="mt-4"
                        aria-invalid={errors[allergyKey] ? true : undefined}
                        aria-describedby={
                          errors[allergyKey]
                            ? `rsvp-${allergyKey}-error rsvp-${allergyKey}-reason`
                            : `rsvp-${allergyKey}-reason`
                        }
                      >
                        <legend className="control-text">
                          {copy.allergy}
                          <span aria-hidden="true"> *</span>
                        </legend>
                        <div className="mt-2 flex flex-col gap-1 sm:flex-row sm:gap-6">
                          <label className="choice">
                            <input
                              id={fieldDomId(allergyKey)}
                              type="radio"
                              name={`allergy-${index}`}
                              value="yes"
                              checked={guest.allergy === "yes"}
                              onChange={() =>
                                updateGuest(index, { allergy: "yes" }, [allergyKey])
                              }
                            />
                            {copy.allergyYes}
                          </label>
                          <label className="choice">
                            <input
                              type="radio"
                              name={`allergy-${index}`}
                              value="no"
                              checked={guest.allergy === "no"}
                              onChange={() =>
                                updateGuest(
                                  index,
                                  { allergy: "no", allergyDetail: "" },
                                  [allergyKey, detailKey],
                                )
                              }
                            />
                            {copy.allergyNo}
                          </label>
                        </div>
                        <p id={`rsvp-${allergyKey}-reason`} className="support mt-2">
                          {copy.allergyReason}
                        </p>
                      </fieldset>
                      {errors[allergyKey] ? (
                        <p id={`rsvp-${allergyKey}-error`} className="mt-2">
                          {errors[allergyKey]}
                        </p>
                      ) : null}

                      {guest.allergy === "yes" ? (
                        <>
                          <label className="mt-4 block" htmlFor={fieldDomId(detailKey)}>
                            <span className="control-text">
                              {copy.allergyDetail}
                              <span aria-hidden="true"> *</span>
                            </span>
                            <input
                              id={fieldDomId(detailKey)}
                              required
                              value={guest.allergyDetail}
                              aria-invalid={errors[detailKey] ? true : undefined}
                              aria-describedby={
                                errors[detailKey] ? `rsvp-${detailKey}-error` : undefined
                              }
                              onChange={(event) =>
                                updateGuest(
                                  index,
                                  { allergyDetail: event.target.value },
                                  [detailKey],
                                )
                              }
                              className="input-field mt-2"
                            />
                          </label>
                          {errors[detailKey] ? (
                            <p id={`rsvp-${detailKey}-error`} className="mt-2">
                              {errors[detailKey]}
                            </p>
                          ) : null}
                        </>
                      ) : null}
                    </fieldset>
                  );
                })}

                <fieldset
                  className="mt-8 border-t border-[var(--border-decorative)] pt-5"
                  aria-invalid={errors.accommodation ? true : undefined}
                  aria-describedby={
                    errors.accommodation
                      ? "rsvp-accommodation-error rsvp-accommodation-note"
                      : "rsvp-accommodation-note"
                  }
                >
                  <legend className="control-text">
                    {copy.accommodation}
                    <span aria-hidden="true"> *</span>
                  </legend>
                  <p id="rsvp-accommodation-note" className="support mt-2">
                    {copy.accommodationNote}
                  </p>
                  <div className="mt-3 flex flex-col gap-1">
                    <label className="choice">
                      <input
                        id={fieldDomId("accommodation")}
                        type="radio"
                        name="accommodation"
                        value="yes"
                        checked={draft.accommodation === "yes"}
                        onChange={() =>
                          patch({ accommodation: "yes" }, ["accommodation"])
                        }
                      />
                      {copy.accommodationYes}
                    </label>
                    <label className="choice">
                      <input
                        type="radio"
                        name="accommodation"
                        value="no"
                        checked={draft.accommodation === "no"}
                        onChange={() =>
                          patch({ accommodation: "no" }, ["accommodation"])
                        }
                      />
                      {copy.accommodationNo}
                    </label>
                  </div>
                  {errors.accommodation ? (
                    <p id="rsvp-accommodation-error" className="mt-2">
                      {errors.accommodation}
                    </p>
                  ) : null}
                </fieldset>
              </>
            ) : null}

            <p className="measure mt-8 text-[0.9375rem] leading-normal">{copy.privacy}</p>

            <button
              type="submit"
              className="btn-primary control-text mt-6"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? copy.submitting : copy.submit}
            </button>

            <p className="sr-only" role="status" aria-live="polite">
              {status === "submitting" ? copy.submitting : ""}
            </p>

            {status === "error" ? (
              <div role="alert" className="mt-4">
                <p>{copy.error}</p>
                <ContactEmails dict={dict} className="mt-3 space-y-2" />
              </div>
            ) : null}
            {status === "unconfigured" ? (
              <div role="status" className="mt-4">
                <p>{copy.unconfigured}</p>
                <ContactEmails dict={dict} className="mt-3 space-y-2" />
              </div>
            ) : null}
          </form>
        )}
      </div>
    </dialog>
  );
}
