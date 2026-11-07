import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type Props = { dict: Dictionary };

const sizes = "(min-width: 1024px) 144px, 96px";

function Portrait({ src, width }: { src: string; width: number }) {
  return (
    <div className="portrait">
      <Image
        src={src}
        alt=""
        width={width}
        height={width}
        quality={85}
        sizes={sizes}
        className="block h-full w-full object-cover"
      />
    </div>
  );
}

export function Host({ dict }: Props) {
  return (
    <article id="host" className="flex items-start gap-4 lg:gap-6">
      <Portrait src="/photos/host-popovics.jpg" width={960} />
      <div className="min-w-0">
        <p className="text-[0.9375rem] font-medium leading-normal text-[var(--color-off-white)]">
          {dict.host.kicker}
        </p>
        <h2 className="section-title mt-2 text-white">{dict.host.title}</h2>
        <p className="mt-4 text-[var(--color-off-white)]">{dict.host.body}</p>
      </div>
    </article>
  );
}

export function Dj({ dict }: Props) {
  return (
    <article id="dj" className="flex items-start gap-4 lg:gap-6">
      <Portrait src="/photos/dj-ratkay.jpg" width={768} />
      <div className="min-w-0">
        <p className="text-[0.9375rem] font-medium leading-normal text-[var(--color-off-white)]">
          {dict.dj.kicker}
        </p>
        <h2 className="section-title mt-2 text-white">{dict.dj.title}</h2>
        <p className="mt-4 text-[var(--color-off-white)]">{dict.dj.body}</p>
        <p className="mt-4">
          <a className="control-text text-link" href={dict.dj.mixUrl}>
            {dict.dj.mixLabel}
          </a>
        </p>
      </div>
    </article>
  );
}
