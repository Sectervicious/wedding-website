import type { Dictionary } from "@/lib/i18n/dictionaries";

type Props = { dict: Dictionary };

export function DressCode({ dict }: Props) {
  return (
    <section id="dress" className="site-section bg-page">
      <div className="page-wrap">
        <h2 className="section-title text-ink">{dict.dress.title}</h2>
        <p className="subhead mt-6 text-ink">{dict.dress.lead}</p>
        <p className="measure mt-4">{dict.dress.avoid}</p>
      </div>
    </section>
  );
}
