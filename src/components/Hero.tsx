import type { Dictionary } from "@/lib/i18n/dictionaries";

type Props = {
  dict: Dictionary;
};

export function Hero({ dict }: Props) {
  return (
    <section
      id="top"
      className="hero-plane relative flex min-h-[100svh] w-full items-end overflow-hidden text-white"
      aria-label={dict.brand.names}
    >
      <div
        className="hero-drift pointer-events-none absolute inset-0"
        aria-hidden
      >
        <div className="leaf-glow absolute -left-[12%] top-[12%] h-[50vmax] w-[50vmax] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.07),transparent_65%)]" />
        <div className="absolute -right-[10%] bottom-[-8%] h-[45vmax] w-[45vmax] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.05),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.65)_0%,transparent_48%)]" />
        <svg
          className="absolute bottom-0 left-0 h-[36%] w-full opacity-40"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="currentColor"
            className="text-black"
            d="M0,224 C180,280 320,120 520,160 C720,200 820,300 1020,260 C1180,228 1320,140 1440,180 L1440,320 L0,320 Z"
          />
        </svg>
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
