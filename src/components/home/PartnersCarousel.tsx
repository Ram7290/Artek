import { partners } from "@/data/industries";

/**
 * Partner logo carousel (homepage Section 4).
 *
 * IMPORTANT: entries are placeholders (text wordmarks) pending real logo
 * assets and confirmed partner status — see data/industries.ts. Replace the
 * span with <img src="/logos/brand.webp"> once assets exist; keep grayscale
 * → colour on hover via CSS filter.
 *
 * One shared CSS keyframe animation (marquee), duplicated track for a
 * seamless loop, pauses on hover, disabled under prefers-reduced-motion.
 */
export function PartnersCarousel() {
  const track = [...partners, ...partners];
  return (
    <section className="overflow-hidden bg-slate-safe py-14" aria-label="Technology partners">
      <div className="container-page">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">Trusted Technology Partners</h2>
        <p className="mt-3 text-center text-sm text-slate-600 sm:text-base">
          Working with established technology brands to deliver reliable IT and security solutions.
        </p>
      </div>
      <div
        className="container-page relative mt-9 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
      >
        <ul
          className="marquee-track mx-auto flex w-max animate-marquee items-center gap-14 px-14"
          aria-label="Technology brands ARTEK works with"
        >
          {track.map((brand, i) => (
            <li key={`${brand.name}-${i}`} aria-hidden={i >= partners.length} className="shrink-0">
              <span
                className="select-none text-xl font-semibold tracking-tight text-ink/50 transition-all duration-300 hover:text-accent-600"
                /* wordmark placeholder — swap for image asset when available */
              >
                {brand.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
