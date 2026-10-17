import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { SiteHeader } from "./SiteHeader";
import { Hero } from "./Hero";
import { Schedule } from "./Schedule";
import { Venues } from "./Venues";
import { Travel } from "./Travel";
import { DressCode } from "./DressCode";
import { FAQ } from "./FAQ";
import { Contact } from "./Contact";
import { RsvpForm } from "./RsvpForm";
import { SiteFooter } from "./SiteFooter";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export function WeddingPage({ locale, dict }: Props) {
  return (
    <>
      <SiteHeader locale={locale} dict={dict} />
      <main>
        <Hero dict={dict} />
        <Schedule dict={dict} />
        <Venues dict={dict} />
        <Travel dict={dict} />
        <DressCode dict={dict} />
        <FAQ dict={dict} />
        <Contact dict={dict} />
        <RsvpForm locale={locale} dict={dict} />
      </main>
      <SiteFooter dict={dict} />
    </>
  );
}
