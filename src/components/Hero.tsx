import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type Props = {
  dict: Dictionary;
};

export function Hero({ dict }: Props) {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full items-end overflow-hidden text-white"
      aria-label={dict.brand.names}
    >
      <div className="hero-drift absolute inset-0" aria-hidden>
        <Image
          src="/hotel/hotel-hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center grayscale"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.35)_45%,rgba(0,0,0,0.5)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20">
        <p className="hero-fade-up section-kicker !text-white/55">{dict.brand.date}</p>
        <h1 className="hero-fade-up-delay font-display mt-4 max-w-4xl text-[clamp(3.2rem,12vw,7.5rem)] leading-[0.92] tracking-tight">
          {dict.brand.names}
        </h1>
        <p className="hero-fade-up-later mt-5 max-w-md text-base text-white/75 sm:text-lg">
          {dict.brand.tagline}
        </p>
        <div className="hero-fade-up-later mt-10 flex flex-wrap items-center gap-6">
          <a href="#rsvp" className="btn-primary !bg-white !text-ink hover:!bg-fog">
            {dict.hero.cta}
          </a>
          <a href="#schedule" className="btn-ghost text-sm">
            {dict.hero.scroll}
          </a>
        </div>
      </div>
    </section>
  );
}
