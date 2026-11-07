import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type Props = { dict: Dictionary };

export function CoupleGallery({ dict }: Props) {
  return (
    <section id="us" className="section-rule bg-mist pb-20 sm:pb-28" aria-label={dict.gallery.kicker}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="section-kicker">{dict.gallery.kicker}</p>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {dict.gallery.photos.map((photo, index) => {
            const last = index === dict.gallery.photos.length - 1;
            const frame =
              index === 0
                ? "col-span-2 aspect-[16/10] lg:row-span-2 lg:aspect-auto"
                : last
                  ? "col-span-2 aspect-[16/9] lg:col-span-4 lg:aspect-[21/8]"
                  : "aspect-[3/4]";
            return (
            <li
              key={photo.src}
              className={`relative overflow-hidden bg-fog ${frame}`}
              style={{ position: "relative" }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={
                  index === 0 || last
                    ? "(max-width: 1024px) 100vw, 900px"
                    : "(max-width: 1024px) 50vw, 280px"
                }
                className="object-cover"
              />
            </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
