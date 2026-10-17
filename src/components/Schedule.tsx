import type { Dictionary } from "@/lib/i18n/dictionaries";

type Props = { dict: Dictionary };

export function Schedule({ dict }: Props) {
  return (
    <section id="schedule" className="site-section bg-mist">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="section-kicker">{dict.nav.schedule}</p>
        <h2 className="font-display mt-3 text-4xl text-ink sm:text-5xl">
          {dict.schedule.title}
        </h2>
        <p className="mt-3 max-w-xl text-ink-soft">{dict.schedule.lead}</p>

        <ol className="timeline-rail mt-12 space-y-10 pl-6 sm:pl-8">
          {dict.schedule.items.map((item) => (
            <li key={item.title} className="relative">
              <span
                className="absolute -left-[1.55rem] top-1.5 h-2.5 w-2.5 rounded-full bg-ink sm:-left-[2.05rem]"
                aria-hidden
              />
              <p className="font-display text-sm tracking-wide text-muted">
                {item.time}
              </p>
              <h3 className="mt-1 text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-1 text-ink-soft">{item.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
