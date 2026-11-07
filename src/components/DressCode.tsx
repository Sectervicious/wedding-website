import type { Dictionary } from "@/lib/i18n/dictionaries";
import { FramedPhoto } from "./Photo";

type Props = { dict: Dictionary };

export function DressCode({ dict }: Props) {
  return (
    <section id="dress" className="site-section surface-paper">
      <div className="page-wrap grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
        <FramedPhoto
          src="/photos/dress-deck.jpg"
          width={768}
          height={1024}
          sizes="(min-width: 1024px) 336px, 280px"
          className="mx-auto w-full max-w-[280px] lg:col-span-5 lg:max-w-[336px]"
        />
        <div className="measure lg:col-span-6 lg:col-start-7">
          <h2 className="section-title text-ink">{dict.dress.title}</h2>
          <p className="subhead mt-6">{dict.dress.lead}</p>
          <p className="mt-4">{dict.dress.avoid}</p>
        </div>
      </div>
    </section>
  );
}
