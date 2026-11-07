import type { Metadata } from "next";
import localFont from "next/font/local";
import { defaultLocale, isLocale, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import "../globals.css";

const newsreader = localFont({
  src: [
    { path: "../../fonts/newsreader-400.woff2", weight: "400", style: "normal" },
    { path: "../../fonts/newsreader-500.woff2", weight: "500", style: "normal" },
  ],
  display: "swap",
  variable: "--font-newsreader",
  fallback: ["Georgia", "serif"],
  adjustFontFallback: false,
});

const playfair = localFont({
  src: [
    { path: "../../fonts/playfair-400.woff2", weight: "400", style: "normal" },
    { path: "../../fonts/playfair-500.woff2", weight: "500", style: "normal" },
  ],
  display: "swap",
  variable: "--font-playfair",
  fallback: ["Georgia", "serif"],
  adjustFontFallback: false,
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  props: LayoutProps<"/[locale]">,
): Promise<Metadata> {
  const { locale } = await props.params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      languages: {
        hu: "/hu",
        en: "/en",
      },
    },
  };
}

export default async function LocaleLayout(props: LayoutProps<"/[locale]">) {
  const { locale } = await props.params;
  const lang: Locale = isLocale(locale) ? locale : defaultLocale;

  return (
    <html
      lang={lang}
      className={`${playfair.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <div className="flex min-h-full flex-1 flex-col">{props.children}</div>
      </body>
    </html>
  );
}
