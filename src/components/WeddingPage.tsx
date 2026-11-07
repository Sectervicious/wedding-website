import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { DressCode } from "./DressCode";
import { FAQ } from "./FAQ";
import { Hero } from "./Hero";
import { Dj, Host } from "./People";
import { PhotoBand } from "./Photo";
import { RsvpInvite } from "./RsvpInvite";
import { RsvpProvider } from "./RsvpProvider";
import { Schedule } from "./Schedule";
import { SiteHeader } from "./SiteHeader";
import { Story } from "./Story";
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
        <Story dict={dict} />
        <PhotoBand
          title={dict.venues.ceremony.name}
          desktopSrc="/photos/band-oak-desktop.jpg"
          mobileSrc="/photos/band-oak-mobile.jpg"
          desktopWidth={2000}
          desktopHeight={667}
          mobileWidth={2000}
          mobileHeight={1333}
        />
        <Schedule dict={dict} />
        <Venues dict={dict} />
        <PhotoBand
          title={dict.venues.reception.name}
          desktopSrc="/photos/band-ballroom-desktop.jpg"
          mobileSrc="/photos/band-ballroom-mobile.jpg"
          desktopWidth={2000}
          desktopHeight={667}
          mobileWidth={2000}
          mobileHeight={1333}
        />
        <Travel dict={dict} />
        <RsvpInvite dict={dict} />
        <DressCode dict={dict} />
        <section className="theme-inverse site-section bg-inverse text-white">
          <div className="page-wrap grid gap-14 lg:grid-cols-2 lg:gap-10">
            <Host dict={dict} />
            <Dj dict={dict} />
          </div>
        </section>
        <FAQ dict={dict} />
      </main>
    </RsvpProvider>
  );
}
