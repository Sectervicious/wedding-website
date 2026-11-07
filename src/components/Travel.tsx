import type { Dictionary } from "@/lib/i18n/dictionaries";

type Props = { dict: Dictionary };

export function Travel({ dict }: Props) {
  return (
    <section id="travel" className="site-section surface-alternate">
      <div className="page-wrap">
        <h2 className="section-title text-ink">{dict.travel.title}</h2>
        <p className="measure mt-4">{dict.travel.lead}</p>

        <ul className="mt-10 grid gap-8 md:grid-cols-3 md:gap-6">
          {dict.travel.items.map((item) => (
            <li key={item.title}>
              <h3 className="subhead text-ink">{item.title}</h3>
              <p className="mt-3">{item.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 border-t border-[var(--border-decorative)] pt-10">
          <h3 className="section-title text-ink">{dict.travel.stay.title}</h3>
          <p className="measure mt-4">{dict.travel.stay.lead}</p>

          <ul className="mt-8 max-w-3xl border-y border-[var(--border-decorative)]">
            {dict.travel.stay.rooms.map((room) => (
              <li
                key={room.name}
                className="flex flex-col justify-between gap-1 border-t border-[var(--border-decorative)] py-4 first:border-t-0 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <span className="control-text text-ink">{room.name}</span>
                <span className="text-muted sm:text-right">{room.price}</span>
              </li>
            ))}
          </ul>

          <p className="measure mt-6">{dict.travel.stay.includes}</p>
          <p className="measure support mt-2">{dict.travel.stay.taxNote}</p>
        </div>
      </div>
    </section>
  );
}
