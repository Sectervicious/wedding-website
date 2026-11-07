"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { getDraftSnapshot, getServerDraft, saveDraft, subscribeDraft } from "@/lib/rsvp-draft";
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
  const draft = useSyncExternalStore(subscribeDraft, getDraftSnapshot, getServerDraft);
  const openRsvp = useCallback(() => {
    saveDraft({ ...getDraftSnapshot(), open: true });
  }, []);
  const closeRsvp = useCallback(() => {
    saveDraft({ ...getDraftSnapshot(), open: false });
  }, []);

  return (
    <RsvpContext.Provider value={{ openRsvp }}>
      {children}
      <RsvpForm locale={locale} dict={dict} open={draft.open} onClose={closeRsvp} />
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
