import type { Dictionary } from "@/lib/i18n/dictionaries";
import { ContactEmails } from "./Contact";
import { Ornament } from "./Photo";

type Props = { dict: Dictionary };

const FAQ_PRIORITY = [1, 2, 7, 4, 5, 0, 3, 6, 8];

function orderedFaq(items: Dictionary["faq"]["items"]) {
  const used = new Set<number>();
  const next: Dictionary["faq"]["items"] = [];
  for (const index of FAQ_PRIORITY) {
    const item = items[index];
    if (!item) continue;
    next.push(item);
    used.add(index);
  }
  items.forEach((item, index) => {
    if (!used.has(index)) next.push(item);
  });
  return next;
}

export function FAQ({ dict }: Props) {
  return (
    <section id="faq" className="site-section bg-page">
      <div className="page-wrap">
        <h2 className="section-title text-ink">{dict.faq.title}</h2>
        <p className="measure mt-4 text-muted">{dict.faq.lead}</p>

        <div className="mt-8 max-w-3xl border-y border-[var(--border-decorative)]">
          {orderedFaq(dict.faq.items).map((item) => (
            <details
              key={item.q}
              className="faq-item border-t border-[var(--border-decorative)] py-2 first:border-t-0"
            >
              <summary>{item.q}</summary>
              <p className="measure pb-4 text-muted">{item.a}</p>
            </details>
          ))}
        </div>

        <div id="contact" className="mt-12 max-w-3xl">
          <h3 className="subhead text-ink">{dict.contact.title}</h3>
          <p className="measure mt-3">{dict.contact.lead}</p>
          <p className="support mt-6">{dict.contact.emailLabel}</p>
          <ContactEmails dict={dict} className="mt-3 space-y-2" />
          <p className="support mt-4">{dict.contact.note}</p>
        </div>
        <Ornament className="mx-auto mt-14" />
      </div>
    </section>
  );
}
