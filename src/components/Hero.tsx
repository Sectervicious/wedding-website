import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { OpenRsvpButton } from "./RsvpProvider";

type Props = {
  dict: Dictionary;
};

export function Hero({ dict }: Props) {
  return (
    <section id="top" className="bg-page" aria-label={dict.brand.names}>
      <div className="page-wrap grid items-start gap-8 pb-8 pt-24 lg:grid-cols-[minmax(0,55fr)_minmax(0,45fr)] lg:gap-6 lg:pb-16 lg:pt-28">
        <div className="measure">
          <p>{dict.brand.tagline}</p>
          <h1 className="display-title mt-6 text-ink">{dict.brand.names}</h1>
          <p className="subhead mt-6 text-ink">{dict.hero.dateLine}</p>
          <p className="support mt-3">{dict.hero.place}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <OpenRsvpButton className="btn-primary control-text">
              {dict.hero.cta}
            </OpenRsvpButton>
            <a href="#schedule" className="control-text text-link">
              {dict.nav.schedule}
            </a>
          </div>
        </div>

        <figure className="mx-auto w-full max-w-[390px] lg:mx-0 lg:max-w-[540px] lg:justify-self-end">
          <div className="photo-mat">
            <Image
              src="/photos/dock-hero-color.jpg"
              alt=""
              width={922}
              height={1153}
              priority
              quality={85}
              sizes="(min-width: 1024px) 520px, (min-width: 430px) 380px, calc(100vw - 52px)"
              className="aspect-[4/5] h-auto w-full object-cover"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
