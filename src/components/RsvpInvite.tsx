import type { Dictionary } from "@/lib/i18n/dictionaries";
import { FramedPhoto, Ornament } from "./Photo";
import { OpenRsvpButton } from "./RsvpProvider";

type Props = { dict: Dictionary };

export function RsvpInvite({ dict }: Props) {
  return (
    <section className="site-section bg-page" aria-label={dict.rsvp.title}>
      <div className="page-wrap">
        <div className="invitation-frame">
          <div className="invitation-frame-inner grid items-center gap-10 lg:grid-cols-12">
            <div className="text-center lg:col-span-7 lg:text-left">
              <Ornament className="mx-auto lg:mx-0" />
              <h2 className="section-title mt-6 text-ink">{dict.rsvp.title}</h2>
              <p className="measure mx-auto mt-4 lg:mx-0">{dict.rsvp.lead}</p>
              <div className="mt-8">
                <OpenRsvpButton className="btn-primary control-text">
                  {dict.hero.cta}
                </OpenRsvpButton>
              </div>
            </div>
            <FramedPhoto
              src="/photos/rsvp-piano.jpg"
              width={1400}
              height={2100}
              sizes="(min-width: 1024px) 276px, 220px"
              className="mx-auto w-full max-w-[220px] lg:col-span-4 lg:col-start-9 lg:max-w-[276px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
