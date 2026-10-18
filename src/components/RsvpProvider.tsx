"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { RsvpForm } from "./RsvpForm";

type RsvpContextValue = {
  openRsvp: () => void;
};

const RsvpContext = createContext<RsvpContextValue | null>(null);

export function useRsvp() {
  const value = useContext(RsvpContext);
  if (!value) {
    throw new Error("useRsvp must be used within RsvpProvider");
  }
  return value;
}

type Props = {
  locale: Locale;
  dict: Dictionary;
  children: ReactNode;
};

export function RsvpProvider({ locale, dict, children }: Props) {
  const [open, setOpen] = useState(false);
  const openRsvp = useCallback(() => setOpen(true), []);
  const closeRsvp = useCallback(() => setOpen(false), []);

  return (
    <RsvpContext.Provider value={{ openRsvp }}>
      {children}
      <RsvpForm locale={locale} dict={dict} open={open} onClose={closeRsvp} />
    </RsvpContext.Provider>
  );
}

export function OpenRsvpButton({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const { openRsvp } = useRsvp();
  return (
    <button type="button" className={className} onClick={openRsvp}>
      {children}
    </button>
  );
}
