import type { Dictionary } from "@/lib/i18n/dictionaries";
import { ContactEmails } from "./Contact";
import { OpenRsvpButton } from "./RsvpProvider";

type Props = { dict: Dictionary };

export function ClosingRsvp({ dict }: Props) {
  return (
    <section className="theme-inverse bg-inverse text-white" aria-label={dict.rsvp.title}>
      <div className="page-wrap py-16 lg:py-[104px]">
        <p className="font-display text-4xl leading-tight sm:text-5xl">
          {dict.brand.names}
        </p>
        <p className="subhead mt-4 text-white">{dict.hero.dateLine}</p>
        <p className="mt-3">{dict.hero.place}</p>
        <div className="mt-8">
          <OpenRsvpButton className="btn-inverse control-text">
            {dict.hero.cta}
          </OpenRsvpButton>
        </div>
        <ContactEmails dict={dict} className="mt-8 space-y-2" />
      </div>
    </section>
  );
}
