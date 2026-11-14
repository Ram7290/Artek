import * as Dialog from "@radix-ui/react-dialog";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { navItems } from "@/data/navigation";
import { company } from "@/data/company";
import { Logo } from "@/components/layout/Logo";
import { cn } from "@/lib/utils";

/**
 * Mobile navigation panel.
 *
 * Radix Dialog supplies the focus trap, Escape-to-close and background
 * scroll-lock; links close the sheet on selection.
 *
 * Layout mirrors the desktop bar's hierarchy instead of flattening it:
 *   brand  →  call  →  what we do  →  what we sell  →  quote CTA
 * so the drawer still reads as part of a premium site rather than a
 * settings list. Rows are 52px tall (comfortable touch targets) and the
 * active route is marked with a paper rule rather than a grey fill.
 */

/** Grouping is presentational only — destinations come from navigation.ts. */
const GROUPS: { label: string; to: readonly string[] }[] = [
  { label: "Explore", to: ["/about", "/solutions", "/industries"] },
  { label: "More", to: ["/products", "/contact"] },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  const itemsFor = (paths: readonly string[]) =>
    navItems.filter((item) => paths.includes(item.to));

  const linkClass = (isActive: boolean) =>
    cn(
      "group relative flex min-h-[52px] items-center justify-between gap-3 pl-4 pr-2 text-[17px] font-medium tracking-[-0.01em] outline-none transition-colors",
      "before:absolute before:left-0 before:top-1/2 before:h-5 before:w-px before:-translate-y-1/2 before:transition-colors",
      isActive
        ? "text-text before:bg-paper"
        : "text-text-muted before:bg-transparent hover:text-text hover:before:bg-white/30",
    );

  const row = (item: (typeof navItems)[number]) => (
    <li key={item.to} className="list-none">
      <NavLink
        to={item.to}
        end={item.to === "/"}
        onClick={() => setOpen(false)}
        className={({ isActive }) => linkClass(isActive)}
      >
        {item.label}
        <ArrowRight
          className="size-4 shrink-0 text-white/20 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-text-muted"
          aria-hidden="true"
        />
      </NavLink>
    </li>
  );

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        {/* 44×44 — the minimum comfortable touch target, not 36px. */}
        <button
          className="inline-flex size-11 items-center justify-center rounded-lg text-text outline-none transition-colors hover:bg-white/[0.06] focus-visible:ring-2 focus-visible:ring-paper/60 lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="size-5" strokeWidth={1.75} />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/65 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-[90vw] max-w-sm flex-col border-l border-white/10 bg-surface-2 shadow-[-20px_0_60px_rgb(0_0_0/0.6)] outline-none">
          {/* Brand + close — the drawer should still say whose site it is */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <Dialog.Title asChild>
              <Logo />
            </Dialog.Title>
            <Dialog.Description className="sr-only">
              Site navigation. Choose a section, or call us directly.
            </Dialog.Description>
            <Dialog.Close asChild>
              <button
                className="inline-flex size-11 items-center justify-center rounded-lg text-text-muted outline-none transition-colors hover:bg-white/[0.06] hover:text-text focus-visible:ring-2 focus-visible:ring-paper/60"
                aria-label="Close menu"
              >
                <X className="size-5" strokeWidth={1.75} />
              </button>
            </Dialog.Close>
          </div>

          {/* Call first — on a phone this is the primary action, not a footer item */}
          <div className="border-b border-white/10 px-5 py-4">
            <a
              href={company.phoneHref}
              className="flex items-center gap-3 rounded-lg bg-white/[0.04] px-4 py-3 outline-none transition-colors hover:bg-white/[0.07] focus-visible:ring-2 focus-visible:ring-paper/60"
            >
              <Phone className="size-4 shrink-0 text-text-muted" aria-hidden="true" />
              <span className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-text-muted">
                  Call us
                </span>
                <span className="text-[15px] font-semibold tracking-tight text-text">
                  {company.phoneDisplay}
                </span>
              </span>
            </a>
          </div>

          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-4">
            {GROUPS.map((group, gi) => (
              <div key={group.label} className={gi > 0 ? "mt-6" : undefined}>
                <p className="px-4 pb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
                  {group.label}
                </p>
                <ul>{itemsFor(group.to).map(row)}</ul>
              </div>
            ))}
          </nav>

          <div className="space-y-2.5 border-t border-white/10 px-5 pt-4 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
            <Dialog.Close asChild>
              <Link
                to="/contact"
                className="group flex h-12 items-center justify-center gap-2 rounded-lg bg-paper text-[15px] font-semibold text-surface outline-none transition-colors hover:bg-white focus-visible:ring-2 focus-visible:ring-paper/40"
              >
                Get a Quote
                <ArrowRight
                  className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
