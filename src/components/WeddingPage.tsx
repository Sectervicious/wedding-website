import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { ClosingRsvp } from "./ClosingRsvp";
import { Contact } from "./Contact";
import { DressCode } from "./DressCode";
import { FAQ } from "./FAQ";
import { Hero } from "./Hero";
import { Dj, Host } from "./People";
import { RsvpProvider } from "./RsvpProvider";
import { Schedule } from "./Schedule";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { Travel } from "./Travel";
import { Venues } from "./Venues";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export function WeddingPage({ locale, dict }: Props) {
  return (
    <RsvpProvider locale={locale} dict={dict}>
      <SiteHeader key={locale} locale={locale} dict={dict} />
      <main id="content">
        <Hero dict={dict} />
        <Schedule dict={dict} />
        <Venues dict={dict} />
        <Travel dict={dict} />
        <DressCode dict={dict} />
        <section className="site-section bg-page">
          <div className="page-wrap grid gap-16 lg:grid-cols-2 lg:gap-10">
            <Host dict={dict} />
            <Dj dict={dict} />
          </div>
        </section>
        <FAQ dict={dict} />
        <Contact dict={dict} />
        <ClosingRsvp dict={dict} />
      </main>
      <SiteFooter dict={dict} />
    </RsvpProvider>
  );
}
