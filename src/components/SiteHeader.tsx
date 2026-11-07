"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { OpenRsvpButton } from "./RsvpProvider";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

const links = [
  ["schedule", "schedule"],
  ["venues", "venues"],
  ["host", "host"],
  ["dj", "dj"],
  ["travel", "travel"],
  ["dress", "dress"],
  ["faq", "faq"],
  ["contact", "contact"],
] as const;

const menuCopy = {
  hu: { label: "Menü", nav: "Oldalrészek" },
  en: { label: "Menu", nav: "Page sections" },
} as const;

export function SiteHeader({ locale, dict }: Props) {
  const other: Locale = locale === "hu" ? "en" : "hu";
  const copy = menuCopy[locale];
  const menuId = useId();
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    function closeOnDesktop() {
      if (media.matches) setOpen(false);
    }
    media.addEventListener("change", closeOnDesktop);
    return () => media.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      menuButtonRef.current?.focus();
    }

    function onPointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <header ref={headerRef} className="nav-blur fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a
          href="#top"
          className="min-w-0 truncate font-display text-lg tracking-tight text-ink sm:text-xl"
        >
          {dict.brand.names}
        </a>

        <nav className="hidden items-center gap-5 text-sm text-ink-soft lg:flex">
          {links.map(([key, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="transition-colors hover:text-ink"
            >
              {dict.nav[key]}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            ref={menuButtonRef}
            type="button"
            className={`inline-flex size-9 items-center justify-center rounded-sm border text-ink transition-colors hover:border-ink lg:hidden ${
              open ? "border-ink" : "border-[var(--line)]"
            }`}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={copy.label}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
          <Link
            href={`/${other}`}
            className="rounded-sm border border-[var(--line)] px-3 py-1 text-xs font-semibold tracking-wide text-ink-soft transition-colors hover:border-ink hover:text-ink"
            hrefLang={other}
          >
            {other.toUpperCase()}
          </Link>
          <OpenRsvpButton className="btn-primary !px-3.5 !py-2 text-sm">
            {dict.nav.rsvp}
          </OpenRsvpButton>
        </div>
      </div>

      <nav
        id={menuId}
        aria-label={copy.nav}
        hidden={!open}
        className="border-t border-[var(--line)] lg:hidden"
      >
        <ul className="mx-auto max-w-6xl px-4 sm:px-6">
          {links.map(([key, id]) => (
            <li key={id} className="border-b border-[var(--line)] last:border-b-0">
              <a
                href={`#${id}`}
                className="block py-3 text-sm text-ink-soft transition-colors hover:text-ink"
                onClick={() => setOpen(false)}
              >
                {dict.nav[key]}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M3 5h12M3 9h12M3 13h12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M4.5 4.5l9 9M13.5 4.5l-9 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}
