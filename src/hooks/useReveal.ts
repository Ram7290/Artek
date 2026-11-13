import { useEffect, useRef, useState } from "react";

/**
 * Reveal-on-scroll via IntersectionObserver — no scroll listeners.
 * Usage: const ref = useReveal(); <section className={cn("reveal", visible...)}>
 *
 * Fail-open: the reveal is decorative, so anything that could leave content
 * invisible must resolve to VISIBLE — no IntersectionObserver support, an
 * element still unrevealed after `fallbackMs` (observer never fired, element
 * taller than the viewport, print), or render errors elsewhere on the page.
 * Content that the user cannot afford to miss (article bodies, listings)
 * should not use this hook at all.
 */
export function useReveal<T extends HTMLElement>(options?: {
  once?: boolean;
  threshold?: number;
  /** ms after mount before an unrevealed element is forced visible */
  fallbackMs?: number;
}) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    let observer: IntersectionObserver | null = null;
    const fallback = window.setTimeout(() => {
      setVisible(true);
      observer?.disconnect();
    }, options?.fallbackMs ?? 2500);

    const clearFallback = () => window.clearTimeout(fallback);

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            clearFallback();
            if (options?.once !== false) observer?.disconnect();
          } else if (options?.once === false) {
            setVisible(false);
          }
        }
      },
      { threshold: options?.threshold ?? 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);

    return () => {
      clearFallback();
      observer?.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, visible };
}

/** True once the page has scrolled past `offset`. Passive listener only. */
export function useScrolled(offset = 24) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);
  return scrolled;
}
