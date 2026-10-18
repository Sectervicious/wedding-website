import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type Props = { dict: Dictionary };

export function Host({ dict }: Props) {
  return (
      <section id="host" className="site-section section-rule bg-mist">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-[minmax(0,0.72fr)_minmax(0,1.1fr)] md:gap-16">
          <div
            className="relative aspect-[3/4] overflow-hidden bg-white/5"
            style={{ position: "relative" }}
          >
            <Image
              src="/people/popovics.jpg"
              alt={dict.host.photoAlt}
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover object-top"
            />
          </div>
          <div>
            <p className="section-kicker">{dict.host.kicker}</p>
            <h2 className="section-title mt-3 text-ink">{dict.host.title}</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
              {dict.host.body}
            </p>
          </div>
        </div>
      </section>
  );
}

export function Dj({ dict }: Props) {
  const mixSrc = `https://w.soundcloud.com/player/?url=${encodeURIComponent(dict.dj.mixUrl)}&color=%230a0a0a&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`;

  return (
      <section id="dj" className="site-section section-rule bg-mist">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.72fr)] md:gap-16">
          <div>
            <p className="section-kicker">{dict.dj.kicker}</p>
            <h2 className="section-title mt-3 text-ink">{dict.dj.title}</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
              {dict.dj.body}
            </p>
            <iframe
              title={dict.dj.mixLabel}
              src={mixSrc}
              className="mt-8 h-[166px] w-full max-w-xl border border-[var(--line)]"
              allow="autoplay"
              loading="lazy"
            />
            <p className="mt-2 text-sm text-muted">{dict.dj.mixLabel}</p>
          </div>
          <div
            className="relative aspect-[3/4] overflow-hidden bg-fog md:order-none"
            style={{ position: "relative" }}
          >
            <Image
              src="/people/ratkay.jpg"
              alt={dict.dj.photoAlt}
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover object-[center_20%]"
            />
          </div>
        </div>
      </section>
  );
}
