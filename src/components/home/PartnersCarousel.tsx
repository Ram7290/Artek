import { partnerGroups } from "@/data/industries";
import { cn } from "@/lib/utils";

/**
 * Partner brand chips (homepage Section 4) — small chips on a moving marquee.
 *
 * IMPORTANT: brand names are client-brief placeholders pending real logo
 * assets AND confirmed partner status — see data/industries.ts. Replace the
 * chip span with <img src="/logos/brand.webp"> once assets exist.
 *
 * One shared CSS keyframe animation (marquee—~60s: the track is much wider
 * than the old 9-logo version), duplicated track for a seamless loop, pauses
 * on hover, disabled under prefers-reduced-motion.
 */

type TrackItem =
  | { key: string; kind: "label"; text: string }
  | { key: string; kind: "chip"; text: string };

const trackBase: TrackItem[] = partnerGroups.flatMap((g) => [
  { key: `lbl:${g.label}`, kind: "label" as const, text: g.label },
  ...g.brands.map((b) => ({ key: `chip:${g.label}:${b}`, kind: "chip" as const, text: b })),
]);
const track = [...trackBase, ...trackBase];

const CHIP =
  "inline-flex items-center rounded-full border border-hairline bg-mist-2 px-3.5 py-1.5 text-[13px] font-semibold text-ink/70 select-none transition-colors duration-300 hover:border-accent-600/60 hover:text-accent-600";
const LABEL =
  "shrink-0 select-none py-1.5 text-[10.5px] font-extrabold uppercase tracking-[0.18em] text-ink/30";

export function PartnersCarousel() {
  return (
    <section className="bg-slate-safe py-14" aria-label="Technology partners">
      <div className="container-page">
        <h2 className="text-center text-2xl font-bold text-ink sm:text-3xl">Trusted Technology Partners</h2>
        <p className="mt-3 text-center text-sm text-ink/70 sm:text-base">
          Working with established technology brands to deliver reliable IT and security solutions.
        </p>
      </div>
      <div
        className="relative mt-9 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <ul
          className="marquee-track mx-auto flex w-max animate-marquee items-center gap-2.5 px-6"
          style={{ animationDuration: "60s" }}
          aria-label="Technology brands ARTEK works with, by category"
        >
          {track.map((item, i) => (
            <li key={item.key} aria-hidden={i >= trackBase.length} className={cn("flex shrink-0 items-center", item.kind === "chip" && "px-1")}>
              {item.kind === "chip" ? (
                <span className={CHIP} /* wordmark placeholder — swap for image asset when available */>
                  {item.text}
                </span>
              ) : (
                <span className={LABEL}>{item.text}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
