"use client";

import Link from "next/link";
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

export function SiteHeader({ locale, dict }: Props) {
  const other: Locale = locale === "hu" ? "en" : "hu";

  return (
    <header className="nav-blur fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a
          href="#top"
          className="font-display text-lg tracking-tight text-ink sm:text-xl"
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

        <div className="flex items-center gap-3">
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
    </header>
  );
}
