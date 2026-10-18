import type { Dictionary } from "@/lib/i18n/dictionaries";

type Props = { dict: Dictionary };

export function FAQ({ dict }: Props) {
  return (
    <section id="faq" className="site-section section-rule bg-mist">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="section-title text-ink">{dict.faq.title}</h2>
        <p className="mt-3 text-ink-soft">{dict.faq.lead}</p>

        <div className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {dict.faq.items.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="cursor-pointer list-none font-semibold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {item.q}
                  <span
                    className="mt-0.5 text-muted transition-transform group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-ink-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
