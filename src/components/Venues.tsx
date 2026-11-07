import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type Props = { dict: Dictionary };

export function Venues({ dict }: Props) {
  const places = [dict.venues.ceremony, dict.venues.reception];

  return (
    <section id="venues" className="bg-page">
      <figure>
        <div className="relative h-40 overflow-hidden border-y border-black sm:h-60 lg:h-80">
          <Image
            src="/photos/ballroom-band-color.jpg"
            alt=""
            fill
            quality={85}
            sizes="100vw"
            className="object-cover object-[50%_35%]"
          />
        </div>
        <figcaption className="page-wrap support pt-3">
          {dict.venues.photoCredit}
        </figcaption>
      </figure>

      <div className="site-section">
        <div className="page-wrap">
          <h2 className="section-title text-ink">{dict.venues.title}</h2>
          <p className="measure mt-4">{dict.venues.lead}</p>
          <p className="support mt-3">{dict.venues.hotelNote}</p>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-6">
            {places.map((place) => (
              <article key={place.label} className="measure">
                <h3 className="subhead text-ink">{place.label}</h3>
                <p className="mt-3 font-display text-[1.75rem] leading-snug text-ink">
                  {place.name}
                </p>
                <p className="mt-3">{place.address}</p>
              </article>
            ))}
          </div>

          <p className="mt-10 text-ink">{dict.venues.address}</p>
          <p className="mt-4 flex flex-col items-start gap-3">
            <a className="control-text text-link" href={dict.venues.ceremony.mapUrl}>
              {dict.venues.ceremony.mapLabel}
            </a>
            <a className="control-text text-link" href={dict.venues.hotelUrl}>
              {dict.venues.hotelLinkLabel}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
