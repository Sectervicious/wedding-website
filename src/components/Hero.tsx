import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { OpenRsvpButton } from "./RsvpProvider";

type Props = {
  dict: Dictionary;
};

export function Hero({ dict }: Props) {
  return (
    <section id="top" className="bg-mist" aria-label={dict.brand.names}>
      <div className="lg:grid lg:min-h-[100svh] lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)]">
        <div className="flex items-center px-4 pb-12 pt-28 sm:px-6 sm:pt-32 lg:py-28 lg:pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] lg:pr-16">
          <div className="max-w-xl">
            <p className="font-display text-[clamp(1.75rem,4vw,2.75rem)] leading-none tracking-wide text-lilac">
              {dict.brand.date}
            </p>
            <h1 className="font-display mt-6 text-[clamp(3.4rem,8vw,6.5rem)] leading-[0.9] tracking-tight text-ink">
              {dict.brand.names}
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg">
              {dict.brand.tagline}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <OpenRsvpButton className="btn-primary">
                {dict.hero.cta}
              </OpenRsvpButton>
              <a
                href="#schedule"
                className="border-b border-ink/30 pb-0.5 text-sm text-ink transition-colors hover:border-ink"
              >
                {dict.hero.scroll}
              </a>
            </div>
          </div>
        </div>

        <div
          className="relative min-h-[78vh] w-full overflow-hidden bg-fog lg:min-h-full"
          style={{ position: "relative" }}
        >
          <Image
            src="/couple/flowers.png"
            alt={dict.hero.portraitAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-[center_30%]"
          />
        </div>
      </div>
    </section>
  );
}
