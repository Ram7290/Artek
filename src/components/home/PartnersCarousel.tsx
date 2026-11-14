import { cn } from "@/lib/utils";

/**
 * Partner brand logos (homepage) — logo tiles on a moving marquee.
 *
 * The marks are shown as wordmarks on the page field (no tiles, no borders):
 * logo rows look most intentional when the marks themselves do the work and
 * the edge of the band is masked into the background.
 *
 * IMPORTANT: these logo files are client-supplied PixelLab exports whose
 * exact brand identities are NOT yet confirmed — filenames are positional
 * (`logo-1..8`), not brand names, so nothing here asserts a partnership.
 * Before production: (1) confirm each logo's brand + partner status with
 * ARTEK, (2) rename files to brand slugs and add brand names to `alt`,
 * (3) re-export the blank tile (original `...1081517.png` was empty white).
 *
 * One shared CSS keyframe animation, duplicated track for a seamless loop,
 * pauses on hover, disabled under prefers-reduced-motion.
 */

/** Positional logo assets — order = original upload order, minus the blank. */
const LOGOS = [
  "/images/brands/logo-1.png",
  "/images/brands/logo-2.png",
  "/images/brands/logo-3.png",
  "/images/brands/logo-4.png",
  "/images/brands/logo-5.png",
  "/images/brands/logo-6.png",
  "/images/brands/logo-7.png",
  "/images/brands/logo-8.png",
] as const;

const trackBase = [...LOGOS];
const track = [...trackBase, ...trackBase];

export function PartnersCarousel() {
  return (
    <section
      className="border-y border-white/[0.06] band-tight"
      aria-label="Technology partners"
    >
      <div className="container-page">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted">
          Trusted technology partners
        </p>
      </div>
      <div className="relative mt-7 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <ul
          className="marquee-track flex w-max animate-marquee items-center gap-14 px-6 sm:gap-20"
          style={{ animationDuration: "60s" }}
          aria-label="Technology brand logos ARTEK works with"
        >
          {track.map((src, i) => (
            <li
              key={`${src}#${i}`}
              aria-hidden={i >= trackBase.length}
              className="flex shrink-0 items-center"
            >
              <span className={cn("flex h-10 items-center justify-center select-none opacity-70 transition-opacity duration-300 hover:opacity-100 sm:h-11")}>
                <img
                  src={src}
                  alt=""
                  role="presentation"
                  width={220}
                  height={72}
                  loading="eager"
                  decoding="async"
                  className="h-full w-auto max-w-[9rem] object-contain grayscale"
                  draggable={false}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
