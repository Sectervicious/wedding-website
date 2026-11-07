import type { Dictionary } from "@/lib/i18n/dictionaries";
import { FramedPhoto } from "./Photo";

type Props = { dict: Dictionary };

const MAP_EMBED =
  "https://www.google.com/maps?q=Hotel+Gottwald+2890+Tata+Fekete+u.+1&z=16&output=embed";

export function Venues({ dict }: Props) {
  const places = [
    { ...dict.venues.ceremony, src: "/photos/venue-ceremony-oak.jpg" },
    { ...dict.venues.reception, src: "/photos/venue-ballroom.jpg" },
  ];

  return (
    <section id="venues" className="site-section bg-page">
      <div className="page-wrap">
        <h2 className="section-title text-ink">{dict.venues.title}</h2>
        <p className="measure mt-4">{dict.venues.lead}</p>
        <p className="support mt-3">{dict.venues.hotelNote}</p>

        <div className="mt-12 grid gap-14 lg:grid-cols-2 lg:gap-8">
          {places.map((place) => (
            <article key={place.label}>
              <FramedPhoto
                src={place.src}
                width={2000}
                height={1333}
                sizes="(min-width: 1024px) 560px, calc(100vw - 48px)"
                alt=""
              />
              <h3 className="control-text mt-8">{place.label}</h3>
              <p className="subhead mt-3 text-ink">{place.name}</p>
              <p className="measure mt-4">{place.address}</p>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <div className="map-frame">
            <iframe
              title={dict.venues.mapFrameTitle}
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-4">{dict.venues.address}</p>
          <p className="mt-3">
            <a className="control-text text-link" href={dict.venues.ceremony.mapUrl}>
              {dict.venues.ceremony.mapLabel}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
