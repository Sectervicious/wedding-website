import type { Dictionary } from "@/lib/i18n/dictionaries";

type Props = { dict: Dictionary };

export function Schedule({ dict }: Props) {
  return (
    <section id="schedule" className="site-section bg-ink text-white">
      <div className="mx-auto max-w-xl px-4 sm:px-6">
        <h2 className="section-title text-center text-white">{dict.schedule.title}</h2>
        <p className="mt-3 text-center text-white/70">{dict.schedule.lead}</p>

        <ol className="mt-12">
          {dict.schedule.items.map((item) => (
            <li
              key={item.title}
              className="grid grid-cols-[4.75rem_1fr] items-baseline gap-x-5 border-t border-white/20 py-5 sm:grid-cols-[6.5rem_1fr] sm:gap-x-8"
            >
              <p className="font-display text-2xl leading-none text-lilac sm:text-3xl">
                {item.time}
              </p>
              <div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-white/70">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
