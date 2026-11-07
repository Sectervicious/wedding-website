import type { Dictionary } from "@/lib/i18n/dictionaries";

type Props = {
  dict: Dictionary;
  className?: string;
};

export function ContactEmails({ dict, className }: Props) {
  return (
    <ul className={className}>
      {dict.contact.emails.map((email) => (
        <li key={email}>
          <a className="text-link break-words" href={`mailto:${email}`}>
            {email}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Contact({ dict }: Props) {
  return (
    <section id="contact" className="site-section bg-page pb-16 lg:pb-[104px]">
      <div className="page-wrap">
        <h2 className="section-title text-ink">{dict.contact.title}</h2>
        <p className="measure mt-4">{dict.contact.lead}</p>
        <p className="support mt-8">{dict.contact.emailLabel}</p>
        <ContactEmails dict={dict} className="mt-3 space-y-2 text-xl" />
        <p className="support mt-4">{dict.contact.note}</p>
      </div>
    </section>
  );
}
