import type { Dictionary } from "@/lib/i18n/dictionaries";

type Props = { dict: Dictionary };

export function Travel({ dict }: Props) {
  return (
    <section id="travel" className="site-section bg-mist">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="section-kicker">{dict.nav.travel}</p>
        <h2 className="font-display mt-3 text-4xl text-ink sm:text-5xl">
          {dict.travel.title}
        </h2>
        <p className="mt-3 max-w-xl text-ink-soft">{dict.travel.lead}</p>

        <ul className="mt-12 grid gap-10 sm:grid-cols-3">
          {dict.travel.items.map((item) => (
            <li key={item.title}>
              <h3 className="font-display text-2xl text-ink">{item.title}</h3>
              <p className="mt-2 text-ink-soft">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
