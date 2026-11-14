import { cn } from "@/lib/utils";

/**
 * Typographic article cover — the category and a large display word on a flat
 * plinth, framed by hairlines. Used instead of stock photography so a cover
 * never implies an ARTEK project photo that doesn't exist. No gradients:
 * one flat surface plus type, matching the site's monochrome system.
 *
 * `plate` — the cover's own 16:9 canvas (listing cards)
 * `band`  — a thin full-width strip (article header)
 */
export function CoverPlate({
  word,
  category,
  index,
  variant = "plate",
  className,
}: {
  word: string;
  category: string;
  /** two-digit sequence numeral, e.g. "01" */
  index?: string;
  variant?: "plate" | "band";
  className?: string;
}) {
  const isBand = variant === "band";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative overflow-hidden bg-surface-2 ring-1 ring-white/[0.08]",
        isBand ? "h-28 sm:h-32" : "aspect-[16/9]",
        className,
      )}
    >
      {/* hairline grid — structural, not decorative gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute inset-0 flex items-center justify-between gap-6 px-6 sm:px-8">
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-text-muted">
            {category}
          </p>
          <p
            className={cn(
              "display-title mt-2 truncate text-text/90",
              isBand ? "text-[clamp(1.6rem,1.2rem+1.8vw,2.6rem)]" : "text-[clamp(2rem,1.4rem+3vw,3.6rem)]",
            )}
          >
            {word}
          </p>
        </div>
        {index && (
          <span className="shrink-0 font-display text-[clamp(2rem,2rem+2vw,3.5rem)] font-medium tabular-nums leading-none text-white/[0.12]">
            {index}
          </span>
        )}
      </div>
      <span className="absolute inset-x-0 bottom-0 h-px bg-white/15" />
    </div>
  );
}
