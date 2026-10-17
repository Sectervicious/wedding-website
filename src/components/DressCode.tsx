import type { Dictionary } from "@/lib/i18n/dictionaries";

type Props = { dict: Dictionary };

export function DressCode({ dict }: Props) {
  return (
    <section
      id="dress"
      className="site-section relative overflow-hidden bg-ink text-fog"
    >
      <div
        className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(196,165,116,0.25),transparent_70%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="section-kicker !text-brass">{dict.nav.dress}</p>
        <h2 className="font-display mt-3 text-4xl sm:text-5xl">{dict.dress.title}</h2>
        <p className="mt-4 text-lg text-fog/85">{dict.dress.lead}</p>
        <p className="mx-auto mt-6 max-w-2xl text-fog/70">{dict.dress.body}</p>
      </div>
    </section>
  );
}
