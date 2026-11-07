import type { Dictionary } from "@/lib/i18n/dictionaries";
import { FramedPhoto } from "./Photo";

type Props = { dict: Dictionary };

export function Travel({ dict }: Props) {
  return (
    <section id="travel" className="site-section surface-paper">
      <div className="page-wrap">
        <h2 className="section-title text-ink">{dict.travel.title}</h2>
        <p className="measure mt-4">{dict.travel.lead}</p>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <FramedPhoto
              src="/photos/stay-bedroom.jpg"
              width={1200}
              height={626}
              sizes="(min-width: 1024px) 560px, calc(100vw - 48px)"
            />
            <h3 className="subhead mt-8 text-ink">{dict.travel.stay.title}</h3>
            <p className="measure mt-4">{dict.travel.stay.lead}</p>
            <ul className="mt-6 border-y border-[var(--border-decorative)]">
              {dict.travel.stay.rooms.map((room) => (
                <li
                  key={room.name}
                  className="flex flex-col justify-between gap-1 border-t border-[var(--border-decorative)] py-4 first:border-t-0 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <span className="control-text">{room.name}</span>
                  <span className="text-muted sm:text-right">{room.price}</span>
                </li>
              ))}
            </ul>
            <p className="measure mt-6">{dict.travel.stay.includes}</p>
            <p className="measure support mt-2">{dict.travel.stay.taxNote}</p>
          </div>
          <div className="lg:col-span-6">
            <FramedPhoto
              src="/photos/stay-pool.jpg"
              width={1398}
              height={932}
              sizes="(min-width: 1024px) 540px, calc(100vw - 48px)"
            />
            <ul className="mt-8 grid gap-8">
              {dict.travel.items.map((item) => (
                <li key={item.title}>
                  <h3 className="subhead text-ink">{item.title}</h3>
                  <p className="mt-3">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
