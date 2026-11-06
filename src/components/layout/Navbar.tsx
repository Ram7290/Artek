import { Link, NavLink, useLocation } from "react-router-dom";
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
  const { pathname } = useLocation();

  const linkCls = (isActive: boolean) =>
    cn(
      "inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-azure/60",
      isActive ? "text-azure" : "text-slate-400 hover:text-ink",
    );

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      {/* Viewport gutter outside the card; card itself spans up to 1400px. */}
      <div className="px-4 pt-3 sm:px-6 sm:pt-4">
        <div className="mx-auto max-w-[87.5rem]">
          <div
            className={cn(
              "flex h-16 items-center justify-between gap-4 rounded-2xl border px-4 transition-all duration-300 sm:px-6",
              scrolled
                ? "border-hairline bg-navy-950/80 shadow-lg shadow-black/40 backdrop-blur-xl"
                : "border-hairline/70 bg-navy-950/40 shadow-sm backdrop-blur-xl",
            )}
          >
            <Logo dark />

            <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  aria-current={pathname === item.to ? "page" : undefined}
                  className={({ isActive }) => linkCls(isActive)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Link
                to="/contact"
                className="group hidden items-center gap-1.5 rounded-lg bg-azure px-4 py-2.5 text-sm font-semibold text-black shadow-sm outline-none transition-colors duration-200 hover:bg-azure-deep focus-visible:ring-2 focus-visible:ring-ink/20 sm:inline-flex"
              >
                Get a Quote
                <ArrowRight
                  className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
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
