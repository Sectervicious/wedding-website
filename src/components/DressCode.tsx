import type { Dictionary } from "@/lib/i18n/dictionaries";

type Props = { dict: Dictionary };

export function DressCode({ dict }: Props) {
  return (
    <section id="dress" className="site-section bg-ink text-white">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="section-kicker !text-white/50">{dict.nav.dress}</p>
        <h2 className="font-display mt-3 text-4xl sm:text-5xl">{dict.dress.title}</h2>
        <p className="mt-4 text-lg text-white/85">{dict.dress.lead}</p>
        <p className="mx-auto mt-6 max-w-2xl text-white/65">{dict.dress.body}</p>
      </div>
    </section>
  );
}
