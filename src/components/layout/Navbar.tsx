import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { NavLink, Link, useLocation } from "react-router-dom";
import { ChevronDown, Phone } from "lucide-react";
import { navItems } from "@/data/navigation";
import { company } from "@/data/company";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { useScrolled } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

/**
 * Desktop navbar — theme adapts to the page behind it:
 * - Home (light hero): navy text at top, white blur-on-scroll.
 * - Inner pages (dark headers): white text, navy blur-on-scroll.
 */
export function Navbar() {
  const scrolled = useScrolled(32);
  const { pathname } = useLocation();
  const light = pathname === "/";

  const linkCls = (isActive: boolean) =>
    cn(
      "group inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium outline-none transition-colors",
      light
        ? isActive
          ? "text-ink"
          : "text-ink/70 hover:text-ink"
        : isActive
          ? "text-white"
          : "text-slate-200 hover:text-white",
    );

  /** active = exact page or one of its dropdown children */
  const isActiveRoute = (item: (typeof navItems)[number]) =>
    pathname === item.to || (item.children?.some((c) => c.to === pathname) ?? false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-30 transition-colors duration-300",
        scrolled
          ? light
            ? "border-b border-hairline bg-white/80 shadow-sm backdrop-blur-md"
            : "bg-navy-950/85 shadow-lg shadow-black/10 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="container-page flex h-[4.5rem] items-center justify-between gap-4">
        <Logo dark={light} />
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <DropdownMenu.Root key={item.to}>
                <DropdownMenu.Trigger asChild>
                  {/* Radix asChild combines classNames as strings — a NavLink
                      function className would be flattened to its source text,
                      so active state is computed manually here. */}
                  <Link to={item.to} aria-current={isActiveRoute(item) ? "page" : undefined} className={linkCls(isActiveRoute(item))}>
                    {item.label}
                    <ChevronDown
                      className="size-3.5 text-slate-400 transition-transform group-data-[state=open]:rotate-180"
                      aria-hidden="true"
                    />
                  </Link>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    align="center"
                    sideOffset={10}
                    className="z-50 grid w-[28rem] grid-cols-2 gap-1 rounded-xl border border-slate-200 bg-white p-2 shadow-xl data-[state=open]:animate-fade-in"
                  >
                    <DropdownMenu.Item
                      asChild
                      className="col-span-2 cursor-pointer rounded-lg bg-mist px-3 py-2 text-sm font-semibold text-azure-deep outline-none hover:bg-mist-2 focus-visible:bg-mist-2"
                    >
                      <Link to={item.to}>
                        View all {item.label}
                        <span aria-hidden="true"> →</span>
                      </Link>
                    </DropdownMenu.Item>
                    {item.children.map((child) => (
                      <DropdownMenu.Item
                        key={child.to}
                        asChild
                        className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-slate-800 outline-none hover:bg-mist focus-visible:bg-mist"
                      >
                        <Link to={child.to}>
                          {child.label}
                          {child.description && (
                            <span className="mt-0.5 block text-xs font-normal leading-snug text-slate-500">
                              {child.description.length > 70 ? `${child.description.slice(0, 70)}…` : child.description}
                            </span>
                          )}
                        </Link>
                      </DropdownMenu.Item>
                    ))}
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            ) : (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => linkCls(isActive)}>
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={company.phoneHref}
            className={cn(
              "hidden items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors xl:flex",
              light ? "text-ink/70 hover:text-ink" : "text-slate-200 hover:text-white",
            )}
          >
            <Phone className="size-4" aria-hidden="true" />
            {company.phoneDisplay}
          </a>
          <Link
            to="/contact"
            className="hidden rounded-lg bg-azure px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-azure-deep sm:inline-flex"
          >
            Request a Quote
          </Link>
          <MobileMenu light={light && !scrolled} />        </div>
      </div>
    </header>
  );
}
