import { Link, NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { navItems } from "@/data/navigation";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { useScrolled } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

/**
 * Premium floating navigation:
 * - White card (border + soft shadow) inside the centred 1400px container,
 *   detached from the viewport edge.
 * - On scroll the surface stays a dark glass; only the opacity/shadow lift
 *   subtly — no size changes, no layout jumps.
 * - Whole site uses dark-themed navigation (matches the monochrome spec).
 */
export function Navbar() {
  const scrolled = useScrolled(24);

  /**
   * Desktop links are uniform: all bold, all white — no colour or block marks
   * the current page. The only indicator is a thin rule under the label, so
   * hierarchy stays with weight and spacing.
   */
  const linkCls =
    "relative inline-flex items-center rounded-md px-3 py-2 text-[13.5px] font-semibold tracking-[0.01em] text-text outline-none transition-colors duration-200 hover:text-white focus-visible:ring-2 focus-visible:ring-paper/60 before:absolute before:inset-x-3 before:-bottom-0.5 before:h-px before:origin-center before:scale-x-0 before:bg-paper before:transition-transform before:duration-200";

  const activeCls = "before:!scale-x-100";

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      {/* Viewport gutter outside the bar; the bar itself spans up to 1400px. */}
      <div className="px-3 pt-2 sm:px-6 sm:pt-3">
        <div className="mx-auto max-w-[87.5rem]">
          <div
            className={cn(
              "flex h-14 items-center justify-between gap-2 rounded-xl border px-3 transition-[background-color,border-color,box-shadow] duration-300 sm:h-[3.75rem] sm:gap-4 sm:px-5",
              scrolled
                ? "border-white/10 bg-black/45 shadow-[0_8px_30px_rgb(0_0_0/0.45)] backdrop-blur-xl"
                : "border-white/[0.08] bg-black/20 backdrop-blur-md",
            )}
          >
            <Logo />

            <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) => cn(linkCls, isActive && activeCls)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Link
                to="/contact"
                className="group inline-flex h-9 items-center gap-1.5 rounded-lg bg-paper px-3.5 text-[13px] font-semibold text-surface outline-none transition-colors duration-200 hover:bg-white focus-visible:ring-2 focus-visible:ring-paper/40 focus-visible:ring-offset-2 focus-visible:ring-offset-surface sm:px-4"
              >
                <span className="hidden sm:inline">Get a Quote</span>
                <span className="sm:hidden">Quote</span>
                <ArrowRight
                  className="hidden size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 sm:block"
                  aria-hidden="true"
                />
              </Link>
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
