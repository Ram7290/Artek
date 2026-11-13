import Lenis from "lenis";
import "lenis/dist/lenis.css";

/**
 * App-wide smooth scrolling (Lenis).
 *
 * - Initialised once from MainLayout (client only; SSR stays untouched).
 * - Disabled entirely under `prefers-reduced-motion: reduce`.
 * - Radix modals (dialogs, mobile menu, selects) lock native body scroll via
 *   react-remove-scroll's `data-scroll-locked` attribute on <body>. We watch
 *   for it and stop/start Lenis so the virtual scroll never fights the lock.
 */

let lenis: Lenis | null = null;
let bodyLockObserver: MutationObserver | null = null;

export function getLenis(): Lenis | null {
  return lenis;
}

export function initLenis(): void {
  if (lenis || typeof window === "undefined") return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  lenis = new Lenis({
    autoRaf: true,
    // slightly slower glide than default (0.1 -> Rigidbody feel without lag)
    lerp: 0.12,
  });

  // CSS `scroll-behavior: smooth` fights Lenis's own animation; disable it
  // while Lenis is active (reduced-motion users keep the native behaviour).
  document.documentElement.style.scrollBehavior = "auto";

  bodyLockObserver = new MutationObserver(() => {
    if (!lenis) return;
    if (document.body.hasAttribute("data-scroll-locked")) lenis.stop();
    else lenis.start();
  });
  bodyLockObserver.observe(document.body, { attributes: true, attributeFilter: ["data-scroll-locked"] });
}
