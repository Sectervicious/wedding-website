import type { Dictionary } from "@/lib/i18n/dictionaries";

type Props = { dict: Dictionary };

function isEmphasis(time: string) {
  return time.trim() === "16:00" || time.trim() === "17:00";
}

function isNextDay(time: string) {
  const clock = /^(\d{1,2}):(\d{2})$/.exec(time.trim());
  if (clock) {
    const hour = Number(clock[1]);
    return hour < 6;
  }
  return /^(utána|after)$/i.test(time.trim());
}

export function Schedule({ dict }: Props) {
  return (
    <section id="schedule" className="site-section before-band bg-page">
      <div className="page-wrap">
        <h2 className="section-title text-ink">{dict.schedule.title}</h2>
        <p className="measure mt-4 text-muted">{dict.schedule.lead}</p>

        <ol className="mt-10 max-w-3xl">
          {dict.schedule.items.map((item) => (
            <li
              key={item.title}
              className="grid grid-cols-[5.75rem_minmax(0,1fr)] gap-x-5 border-t border-[var(--border-decorative)] py-6 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-x-8"
            >
              <div>
                <p className="font-display text-[1.75rem] leading-none text-ink sm:text-[2rem]">
                  {item.time}
                </p>
                {isNextDay(item.time) ? (
                  <p className="support mt-2">{dict.schedule.nextDay}</p>
                ) : null}
              </div>
              <div className="min-w-0">
                <h3
                  className={
                    isEmphasis(item.time)
                      ? "subhead text-ink"
                      : "control-text text-ink"
                  }
                >
                  {item.title}
                </h3>
                <p className="mt-2 text-muted">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
