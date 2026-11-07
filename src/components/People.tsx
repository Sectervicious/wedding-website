import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type Props = { dict: Dictionary };

const portraitSizes = "(min-width: 1024px) 144px, 96px";

export function Host({ dict }: Props) {
  return (
    <article id="host" className="flex items-start gap-4 lg:gap-6">
      <div className="portrait">
        <Image
          src="/photos/popovics-color.jpg"
          alt=""
          width={960}
          height={960}
          quality={85}
          sizes={portraitSizes}
          className="block h-full w-full object-cover"
        />
      </div>
      <div className="min-w-0">
        <p className="support">{dict.host.kicker}</p>
        <h2 className="section-title mt-2 text-ink">{dict.host.title}</h2>
        <p className="mt-4">{dict.host.body}</p>
      </div>
    </article>
  );
}

export function Dj({ dict }: Props) {
  return (
    <article id="dj" className="flex items-start gap-4 lg:gap-6">
      <div className="portrait">
        <Image
          src="/photos/ratkay-color.jpg"
          alt=""
          width={768}
          height={768}
          quality={85}
          sizes={portraitSizes}
          className="block h-full w-full object-cover"
        />
      </div>
      <div className="min-w-0">
        <p className="support">{dict.dj.kicker}</p>
        <h2 className="section-title mt-2 text-ink">{dict.dj.title}</h2>
        <p className="mt-4">{dict.dj.body}</p>
        <p className="mt-4">
          <a className="control-text text-link" href={dict.dj.mixUrl}>
            {dict.dj.mixLabel}
          </a>
        </p>
      </div>
    </article>
  );
}
