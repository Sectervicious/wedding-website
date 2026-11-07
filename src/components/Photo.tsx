import { cappedSrcSet } from "@/lib/capped-image";

type FrameProps = {
  src: string;
  width: number;
  height: number;
  sizes: string;
  alt?: string;
  priority?: boolean;
  className?: string;
};

export function FramedPhoto({
  src,
  width,
  height,
  sizes,
  alt = "",
  priority = false,
  className = "",
}: FrameProps) {
  const image = cappedSrcSet(src, width);
  return (
    <div className={`photo-frame ${className}`}>
      <div className="photo-mat">
        {/* next/image cannot cap srcset to the file's intrinsic width. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.src}
          srcSet={image.srcSet}
          sizes={sizes}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          decoding="async"
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}

export function Ornament({ className = "" }: { className?: string }) {
  return <div className={`fine-ornament ${className}`} aria-hidden="true" />;
}

type BandProps = {
  title: string;
  desktopSrc: string;
  mobileSrc: string;
  desktopWidth: number;
  desktopHeight: number;
  mobileWidth: number;
  mobileHeight: number;
};

export function PhotoBand({
  title,
  desktopSrc,
  mobileSrc,
  desktopWidth,
  mobileWidth,
  mobileHeight,
}: BandProps) {
  const desktop = cappedSrcSet(desktopSrc, desktopWidth);
  const mobile = cappedSrcSet(mobileSrc, mobileWidth);
  return (
    <section className="photo-band" aria-label={title}>
      <picture>
        <source media="(min-width: 768px)" srcSet={desktop.srcSet} sizes="100vw" />
        <img
          src={mobile.src}
          srcSet={mobile.srcSet}
          sizes="100vw"
          alt=""
          width={mobileWidth}
          height={mobileHeight}
          loading="lazy"
          decoding="async"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </picture>
      <h2 className="photo-band-title">{title}</h2>
    </section>
  );
}
