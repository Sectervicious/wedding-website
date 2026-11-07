import { getImageProps } from "next/image";
import Image from "next/image";

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
  return (
    <div className={`photo-frame ${className}`}>
      <div className="photo-mat">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          quality={85}
          priority={priority}
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
  desktopHeight,
  mobileWidth,
  mobileHeight,
}: BandProps) {
  const shared = { alt: "", sizes: "100vw", quality: 85 as const };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...shared,
    src: desktopSrc,
    width: desktopWidth,
    height: desktopHeight,
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...shared,
    src: mobileSrc,
    width: mobileWidth,
    height: mobileHeight,
  });

  return (
    <section className="photo-band" aria-label={title}>
      <picture>
        <source media="(min-width: 768px)" srcSet={desktop} />
        <img
          {...rest}
          alt=""
          srcSet={mobile}
          style={{ ...rest.style, width: "100%", height: "100%", objectFit: "cover" }}
        />
      </picture>
      <h2 className="photo-band-title">{title}</h2>
    </section>
  );
}
