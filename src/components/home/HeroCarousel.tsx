import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { HeroSlide } from "@/types";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 5500;
const SWIPE_THRESHOLD = 48;

/**
 * Premium cinematic image carousel (crossfade, no dependencies).
 * - autoplay 5.5s, paused on hover / keyboard focus / hidden tab
 * - pointer-based swipe on touch devices
 * - prev/next buttons, 5 indicators, "01 / 05" counter
 * - transform/opacity transitions only; autoplay disabled under
 *   prefers-reduced-motion
 */
export function HeroCarousel({ slides }: { slides: readonly HeroSlide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const hiddenTab = useRef(false);
  const reducedMotion = useRef(false);
  const [userNavigated, setUserNavigated] = useState(false);
  const pointerStart = useRef<{ x: number; id: number } | null>(null);
  const count = slides.length;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const vis = () => (hiddenTab.current = document.hidden);
    const onMq = () => (reducedMotion.current = mq.matches);
    onMq();
    document.addEventListener("visibilitychange", vis);
    mq.addEventListener("change", onMq);
    return () => {
      document.removeEventListener("visibilitychange", vis);
      mq.removeEventListener("change", onMq);
    };
  }, []);

  const go = useCallback(
    (next: number, byUser = true) => {
      if (byUser) setUserNavigated(true);
      setIndex(((next % count) + count) % count);
    },
    [count],
  );

  const play = !paused && !reducedMotion.current && !hiddenTab.current;

  useEffect(() => {
    if (!play) return;
    const t = setTimeout(() => go(index + 1, false), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [index, play, go]);

  /* pointer swipe */
  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    pointerStart.current = { x: e.clientX, id: e.pointerId };
  };
  const onPointerUp = (e: React.PointerEvent) => {
    const start = pointerStart.current;
    pointerStart.current = null;
    if (!start || start.id !== e.pointerId) return;
    const dx = e.clientX - start.x;
    if (Math.abs(dx) > SWIPE_THRESHOLD) go(index + (dx < 0 ? 1 : -1));
  };

  const slide = slides[index]!;

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="ARTEK technology solutions"
      className="group relative h-full w-full overflow-hidden rounded-2xl bg-mist-2 shadow-(--shadow-card-hover) ring-1 ring-white/60 ring-inset sm:rounded-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={() => (pointerStart.current = null)}
      style={{ touchAction: "pan-y" }}
    >
      {/* slides — stacked, crossfading */}
      <ul className="absolute inset-0">
        {slides.map((s, i) => (
          <li
            key={s.id}
            aria-hidden={i !== index}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}: ${s.title}`}
            className={cn(
              "absolute inset-0 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity,transform]",
              i === index ? "opacity-100 scale-100" : "opacity-0 scale-[1.03] pointer-events-none",
            )}
            data-active={i === index || undefined}
          >
            <img
              src={s.image}
              alt={s.imageAlt}
              width={s.width}
              height={s.height}
              loading={i === 0 ? "eager" : "lazy"}
              decoding={i === 0 ? "sync" : "async"}
              fetchPriority={i === 0 ? "high" : undefined}
              draggable={false}
              className="h-full w-full object-cover select-none"
            />
          </li>
        ))}
      </ul>

      {/* readability scrim */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-ink/85 via-ink/40 to-transparent"
      />

      {/* overlay content */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-5 sm:p-7">
        <div
          key={slide.id}
          aria-live={userNavigated ? "polite" : "off"}
          className="min-w-0 max-w-md text-white transition-opacity duration-500"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/75 sm:text-[11px]">
            {slide.category}
          </p>
          <h2 className="mt-1.5 text-xl font-bold leading-snug tracking-tight sm:text-2xl">
            {slide.title}
          </h2>
          <p className="mt-1 hidden text-sm text-white/80 sm:block">{slide.description}</p>
        </div>

        {/* controls */}
        <div className="flex shrink-0 flex-col items-end gap-3">
          <p className="text-xs font-semibold tabular-nums tracking-[0.2em] text-white/75" aria-hidden="true">
            {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </p>
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous slide"
              className="flex size-9 items-center justify-center rounded-full border border-white/30 text-white backdrop-blur-sm transition-colors hover:border-white/70 hover:bg-white/10 sm:size-10"
            >
              <ChevronLeft className="size-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next slide"
              className="flex size-9 items-center justify-center rounded-full border border-white/30 text-white backdrop-blur-sm transition-colors hover:border-white/70 hover:bg-white/10 sm:size-10"
            >
              <ChevronRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* indicators — plain buttons; the carousel region carries live status */}
      <div
        className="absolute inset-x-0 top-0 flex justify-end gap-2 p-5 sm:p-7"
      >
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            aria-current={i === index || undefined}
            aria-label={`Go to slide ${i + 1}: ${s.title}`}
            onClick={() => go(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === index
                ? "w-7 bg-white"
                : "w-3 bg-white/40 hover:bg-white/70",
            )}
          />
        ))}
      </div>
    </div>
  );
}
