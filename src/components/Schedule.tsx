import type { Dictionary } from "@/lib/i18n/dictionaries";
import { FramedPhoto } from "./Photo";

type Props = { dict: Dictionary };

function isEmphasis(time: string) {
  return time.trim() === "16:00" || time.trim() === "17:00";
}

function isNextDay(time: string) {
  const clock = /^(\d{1,2}):(\d{2})$/.exec(time.trim());
  if (clock) return Number(clock[1]) < 6;
  return /^(utána|after)$/i.test(time.trim());
}

export function Schedule({ dict }: Props) {
  return (
    <section id="schedule" className="site-section surface-paper">
      <div className="page-wrap grid items-start gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <h2 className="section-title text-ink">{dict.schedule.title}</h2>
          <p className="measure mt-4">{dict.schedule.lead}</p>
          <ol className="relative mt-10 max-w-xl border-l border-black pl-8">
            {dict.schedule.items.map((item) => (
              <li key={item.title} className="relative pb-8 last:pb-0">
                <span
                  className="absolute -left-[2.4rem] top-1.5 size-3 rounded-full bg-black"
                  aria-hidden="true"
                />
                <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-x-4">
                  <div>
                    <p className="font-display text-[1.75rem] leading-none">{item.time}</p>
                    {isNextDay(item.time) ? (
                      <p className="support mt-2">{dict.schedule.nextDay}</p>
                    ) : null}
                  </div>
                  <div>
                    <h3 className={isEmphasis(item.time) ? "subhead" : "control-text"}>
                      {item.title}
                    </h3>
                    <p className="mt-2 text-muted">{item.detail}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <FramedPhoto
          src="/photos/schedule-flowers.jpg"
          width={1399}
          height={2099}
          sizes="(min-width: 1024px) 322px, 240px"
          className="mx-auto w-full max-w-[240px] lg:col-span-4 lg:col-start-9 lg:max-w-[322px]"
        />
      </div>
    </section>
  );
}
