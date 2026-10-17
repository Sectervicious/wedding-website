import type { Dictionary } from "@/lib/i18n/dictionaries";

type Props = { dict: Dictionary };

export function Venues({ dict }: Props) {
  const places = [dict.venues.ceremony, dict.venues.reception];

  return (
    <section id="venues" className="site-section bg-fog">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="section-kicker">{dict.nav.venues}</p>
        <h2 className="font-display mt-3 text-4xl text-ink sm:text-5xl">
          {dict.venues.title}
        </h2>
        <p className="mt-3 max-w-xl text-ink-soft">{dict.venues.lead}</p>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          {places.map((place) => (
            <article key={place.label}>
              <p className="section-kicker">{place.label}</p>
              <h3 className="font-display mt-2 text-3xl text-ink">{place.name}</h3>
              <p className="mt-2 text-ink-soft">{place.address}</p>
              {/* Map placeholder — replace mapUrl when ready */}
              <div
                className="mt-6 flex aspect-[16/10] items-end justify-start overflow-hidden rounded-sm bg-[linear-gradient(145deg,#24352c,#5c7a62_55%,#c4a574_120%)] p-5"
                role="img"
                aria-label={place.name}
              >
                <a
                  href={place.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost !text-white"
                >
                  {place.mapLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
