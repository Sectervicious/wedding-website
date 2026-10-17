import type { Dictionary } from "@/lib/i18n/dictionaries";

type Props = { dict: Dictionary };

export function Contact({ dict }: Props) {
  return (
    <section id="contact" className="site-section bg-mist">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="section-kicker">{dict.nav.contact}</p>
        <h2 className="font-display mt-3 text-4xl text-ink sm:text-5xl">
          {dict.contact.title}
        </h2>
        <p className="mt-3 max-w-xl text-ink-soft">{dict.contact.lead}</p>
        <p className="mt-8 text-sm uppercase tracking-[0.16em] text-leaf">
          {dict.contact.emailLabel}
        </p>
        <a
          href={`mailto:${dict.contact.email}`}
          className="font-display mt-2 inline-block text-3xl text-ink transition-colors hover:text-brass-deep sm:text-4xl"
        >
          {dict.contact.email}
        </a>
        <p className="mt-3 text-sm text-ink-soft/80">{dict.contact.note}</p>
      </div>
    </section>
  );
}
