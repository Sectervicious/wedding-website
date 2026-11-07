"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
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
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-[var(--border-decorative)] surface-paper"
    >
      <a className="skip-link" href="#content">
        {dict.nav.skip}
      </a>
      <div className="page-wrap flex items-center justify-between gap-3 py-2">
        <a href="#top" className="inline-flex shrink-0" aria-label={dict.brand.names}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/design/bp-monogram.svg" alt="" className="monogram" />
        </a>

        <nav className="hidden items-center gap-x-4 lg:flex" aria-label={copy.nav}>
          {links.map(([key, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="control-text inline-flex min-h-11 items-center text-link"
            >
              {dict.nav[key]}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex size-11 items-center justify-center border border-black text-ink lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={copy.label}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
          <Link
            href={`/${other}`}
            hrefLang={other}
            lang={other}
            className="control-text inline-flex min-h-11 min-w-11 items-center justify-center px-2 text-link"
            aria-label={dict.nav.switchTo}
            onClick={(event) => {
              const hash = window.location.hash;
              if (!hash) return;
              event.preventDefault();
              router.push(`/${other}${hash}`);
            }}
          >
            {other.toUpperCase()}
          </Link>
          <OpenRsvpButton className="btn-primary control-text px-3">
            {dict.nav.rsvp}
          </OpenRsvpButton>
        </div>
      </div>

      <nav
        id={menuId}
        aria-label={copy.nav}
        hidden={!open}
        className="border-t border-[var(--border-decorative)] lg:hidden"
      >
        <ul className="page-wrap">
          {links.map(([key, id]) => (
            <li
              key={id}
              className="border-b border-[var(--border-decorative)] last:border-b-0"
            >
              <a
                href={`#${id}`}
                className="control-text flex min-h-11 items-center text-link"
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
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" fill="none">
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
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" fill="none">
      <path
        d="M4.5 4.5l9 9M13.5 4.5l-9 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}
