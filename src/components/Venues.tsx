import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type Props = { dict: Dictionary };

export function Venues({ dict }: Props) {
  const places = [
    { ...dict.venues.ceremony, image: "/hotel/oak.webp" },
    { ...dict.venues.reception, image: "/hotel/ballroom.webp" },
  ];

  return (
    <section id="venues" className="site-section section-rule bg-mist">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="section-title text-ink">
          {dict.venues.title}
        </h2>
        <p className="mt-3 max-w-xl text-ink-soft">{dict.venues.lead}</p>
        <p className="mt-2 text-sm text-muted">{dict.venues.hotelNote}</p>

        <div
          className="relative mt-10 aspect-[16/9] w-full overflow-hidden bg-mist"
          style={{ position: "relative" }}
        >
          <Image
            src="/hotel/facade.jpg"
            alt={dict.venues.galleryAlt}
            fill
            sizes="(max-width: 1200px) 100vw, 1152px"
            className="object-cover"
          />
        </div>

        <div className="mt-14 grid gap-14 md:grid-cols-2">
          {places.map((place) => (
            <article key={place.label}>
              <div
                className="relative aspect-[16/10] overflow-hidden bg-mist"
                style={{ position: "relative" }}
              >
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
              <p className="section-kicker mt-5">{place.label}</p>
              <h3 className="font-display mt-2 text-3xl text-ink">{place.name}</h3>
              <p className="mt-2 text-ink-soft">{place.address}</p>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <iframe
            title={dict.venues.mapTitle}
            src="https://maps.google.com/maps?q=47.639935,18.312428&z=16&output=embed"
            className="h-80 w-full border border-[var(--line)] sm:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <p className="mt-3 select-all text-sm text-ink">{dict.venues.address}</p>
        </div>
      </div>
    </section>
  );
}
