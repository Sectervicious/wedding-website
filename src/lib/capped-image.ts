/** Widths the image optimizer is allowed to emit. Each value appears once. */
export const IMAGE_WIDTHS = [
  96, 144, 192, 240, 288, 320, 342, 360, 390, 432, 480, 492, 540, 560, 640, 768,
  780, 840, 922, 960, 1080, 1120, 1170, 1200, 1280, 1398, 1399, 1400, 1600, 1680,
  1920, 2000,
] as const;

const QUALITY = 85;

export function cappedSrcSet(src: string, intrinsicWidth: number) {
  const widths = IMAGE_WIDTHS.filter((width) => width <= intrinsicWidth);
  if (widths.length === 0) {
    throw new Error(`No optimizer width is <= ${intrinsicWidth} for ${src}`);
  }
  const url = (width: number) =>
    `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${QUALITY}`;
  const largest = widths[widths.length - 1];
  return {
    src: url(largest),
    srcSet: widths.map((width) => `${url(width)} ${width}w`).join(", "),
  };
}
