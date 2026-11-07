import type { Dictionary } from "@/lib/i18n/dictionaries";
import { FramedPhoto, Ornament } from "./Photo";
import { OpenRsvpButton } from "./RsvpProvider";

type Props = { dict: Dictionary };

export function Hero({ dict }: Props) {
  return (
    <section id="top" className="surface-paper" aria-label={dict.brand.names}>
      <div className="page-wrap grid items-center gap-10 pb-14 pt-10 lg:grid-cols-[minmax(0,55fr)_minmax(0,45fr)] lg:gap-8 lg:pb-24 lg:pt-16">
        <div className="measure">
          <Ornament />
          <p className="mt-6">{dict.brand.tagline}</p>
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
        <FramedPhoto
          src="/photos/hero-dock.jpg"
          width={922}
          height={1152}
          priority
          sizes="(min-width: 1024px) 500px, calc(100vw - 72px)"
          className="mx-auto w-full max-w-[342px] lg:mx-0 lg:max-w-[500px] lg:justify-self-end"
        />
      </div>
    </section>
  );
}
