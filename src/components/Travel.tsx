import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type Props = { dict: Dictionary };

export function Travel({ dict }: Props) {
  const roomPhotos = [
    {
      src: "/hotel/room-double.webp",
      alt: dict.travel.stay.rooms[0].name,
    },
    {
      src: "/hotel/room-standard.webp",
      alt: dict.travel.stay.rooms[0].name,
    },
    {
      src: "/hotel/room-junior.webp",
      alt: dict.travel.stay.rooms[1].name,
    },
  ];

  return (
    <section id="travel" className="site-section section-rule bg-mist">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="section-title text-ink">
          {dict.travel.title}
        </h2>
        <p className="mt-3 max-w-2xl text-ink-soft">{dict.travel.lead}</p>

        <ul className="mt-12 grid gap-10 sm:grid-cols-3">
          {dict.travel.items.map((item) => (
            <li key={item.title}>
              <h3 className="font-display text-2xl text-ink">{item.title}</h3>
              <p className="mt-2 text-ink-soft">{item.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-16 border-t border-[var(--line)] pt-12">
          <h3 className="font-display text-3xl text-ink">
            {dict.travel.stay.title}
          </h3>
          <p className="mt-3 max-w-2xl text-ink-soft">{dict.travel.stay.lead}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {roomPhotos.map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-[4/3] overflow-hidden"
                style={{ position: "relative" }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 360px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <ul className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {dict.travel.stay.rooms.map((room) => (
              <li
                key={room.name}
                className="flex flex-col justify-between gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <span className="font-medium text-ink">{room.name}</span>
                <span className="shrink-0 text-ink-soft">{room.price}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm text-ink-soft">{dict.travel.stay.includes}</p>
          <p className="mt-2 text-sm text-muted">{dict.travel.stay.taxNote}</p>
        </div>
      </div>
    </section>
  );
}
