import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { SiteHeader } from "./SiteHeader";
import { Hero } from "./Hero";
import { CoupleGallery } from "./CoupleGallery";
import { Schedule } from "./Schedule";
import { Venues } from "./Venues";
import { Travel } from "./Travel";
import { DressCode } from "./DressCode";
import { Dj, Host } from "./People";
import { FAQ } from "./FAQ";
import { Contact } from "./Contact";
import { RsvpProvider } from "./RsvpProvider";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export function WeddingPage({ locale, dict }: Props) {
  return (
    <RsvpProvider locale={locale} dict={dict}>
      <SiteHeader locale={locale} dict={dict} />
      <main>
        <Hero dict={dict} />
        <CoupleGallery dict={dict} />
        <Schedule dict={dict} />
        <Venues dict={dict} />
        <Host dict={dict} />
        <Travel dict={dict} />
        <DressCode dict={dict} />
        <Dj dict={dict} />
        <FAQ dict={dict} />
        <Contact dict={dict} />
      </main>
    </RsvpProvider>
  );
}
