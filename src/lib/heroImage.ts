// Service-page hero photos: built "-s" photos have a 1,024 px webp copy ("-t.webp", see vite.config.ts).
// Phones that need no more than 1,024 px take the copy; larger screens keep the full photo.
// width/height are the built photo's size (capped at 1,920 wide). The hero is at least 320 px
// tall and crops to cover, so it shows at least 320 × width/height px wide.
export const heroImageProps = (src: string, width: number, height: number) =>
  import.meta.env.PROD && /-s\.(jpe?g|png)$/i.test(src)
    ? {
        srcSet: `${src.replace(/\.(jpe?g|png)$/i, "-t.webp")} 1024w, ${src} ${width}w`,
        sizes: `max(100vw, ${Math.round((320 * width) / height)}px)`,
      }
    : {};

// Photos lower on the page (a tile or a section background) that never need more than
// about 1,000 px: browsers take the 1,024 px webp copy; only wider screens with more
// pixels per inch fall back to the full photo. `sizes` is the shown width.
export const tileImageProps = (src: string, width: number, sizes: string) =>
  import.meta.env.PROD && /-s\.(jpe?g|png)$/i.test(src)
    ? { srcSet: `${src.replace(/\.(jpe?g|png)$/i, "-t.webp")} 1024w, ${src} ${width}w`, sizes }
    : {};
