"use client";

import { useLayoutEffect } from "react";
import type { Locale } from "@/lib/i18n/config";

type Props = {
  locale: Locale;
};

/**
 * The root layout owns <html>, and Next.js keeps that shell across a
 * client navigation that only changes the locale segment. Sync the
 * document language when the visible page's locale changes.
 */
export function DocumentLang({ locale }: Props) {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const previous = root.lang;
    root.lang = locale;
    return () => {
      if (root.lang === locale) root.lang = previous;
    };
  }, [locale]);

  return null;
}
