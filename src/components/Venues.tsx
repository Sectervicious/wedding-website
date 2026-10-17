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
        <p className="mt-2 text-sm text-muted">{dict.venues.hotelNote}</p>
        <a
          href={dict.venues.hotelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block border-b border-ink/30 text-sm font-medium text-ink transition-colors hover:border-ink"
        >
          {dict.venues.hotelLinkLabel}
        </a>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          {places.map((place) => (
            <article key={place.label}>
              <p className="section-kicker">{place.label}</p>
              <h3 className="font-display mt-2 text-3xl text-ink">{place.name}</h3>
              <p className="mt-2 text-ink-soft">{place.address}</p>
              <div
                className="map-plane mt-6 flex aspect-[16/10] flex-col items-start justify-end gap-3 overflow-hidden p-5 text-white"
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
                <a
                  href={place.detailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 underline-offset-4 hover:text-white hover:underline"
                >
                  {place.detailLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
