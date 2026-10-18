import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type Props = { dict: Dictionary };

export function DressCode({ dict }: Props) {
  return (
    <section id="dress" className="site-section bg-ink text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="section-kicker !text-white/50">{dict.nav.dress}</p>
        <h2 className="section-title mt-3 text-white">{dict.dress.lead}</h2>
        <p className="font-display mt-6 max-w-xl text-3xl leading-snug text-lilac">
          {dict.dress.avoid}
        </p>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {dict.dress.photos.map((photo) => (
            <li
              key={photo.src}
              className="relative aspect-[3/4] overflow-hidden bg-white/5"
              style={{ position: "relative" }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, 480px"
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
