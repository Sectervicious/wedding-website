import type { Dictionary } from "@/lib/i18n/dictionaries";

type Props = { dict: Dictionary };

export function Contact({ dict }: Props) {
  return (
    <section id="contact" className="site-section section-rule bg-mist">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="section-title text-ink">
          {dict.contact.title}
        </h2>
        <p className="mt-3 max-w-xl text-ink-soft">{dict.contact.lead}</p>
        <p className="mt-8 text-sm uppercase tracking-[0.16em] text-muted">
          {dict.contact.emailLabel}
        </p>
        <ul className="mt-3 space-y-2">
          {dict.contact.emails.map((email) => (
            <li key={email}>
              <a
                href={`mailto:${email}`}
                className="font-display text-2xl text-ink transition-opacity hover:opacity-60 sm:text-3xl"
              >
                {email}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted">{dict.contact.note}</p>
      </div>
    </section>
  );
}
