import type { Dictionary } from "@/lib/i18n/dictionaries";
import { FramedPhoto, Ornament } from "./Photo";

type Props = { dict: Dictionary };

export function Story({ dict }: Props) {
  return (
    <section className="site-section bg-page" aria-label={dict.gallery.kicker}>
      <div className="page-wrap grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
        <FramedPhoto
          src="/photos/story-bosphorus.jpg"
          width={768}
          height={1024}
          sizes="(min-width: 1024px) 360px, (min-width: 396px) 300px, calc(100vw - 96px)"
          className="mx-auto w-full max-w-[300px] lg:col-span-5 lg:max-w-[360px]"
        />
        <div className="measure lg:col-span-6 lg:col-start-7">
          <p className="control-text">{dict.gallery.kicker}</p>
          <h2 className="section-title mt-4 text-ink">{dict.brand.names}</h2>
          <p className="mt-6">{dict.brand.tagline}</p>
          <Ornament className="mt-8" />
        </div>
      </div>
    </section>
  );
}
