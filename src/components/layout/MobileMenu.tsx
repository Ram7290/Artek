import * as Dialog from "@radix-ui/react-dialog";
import { Link, NavLink } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { navItems } from "@/data/navigation";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

/**
 * Mobile navigation panel: white slide-in Radix Dialog sheet.
 * Radix provides the focus trap, Escape-to-close and background scroll-lock;
 * links close the panel on selection (open/close via the trigger button).
 */
export function MobileMenu() {
  /** Each link both navigates and closes the sheet (Radix auto-closes on Close). */
  const menuItems = navItems.map((item) => (
    <li key={item.to} className="list-none">
      <Dialog.Close asChild>
        <NavLink
          to={item.to}
          className={({ isActive }) =>
            cn(
              "flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-azure/60",
              isActive ? "bg-mist text-azure" : "text-ink/80 hover:bg-mist hover:text-ink",
            )
          }
        >
          {item.label}
        </NavLink>
      </Dialog.Close>
    </li>
  ));

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className="inline-flex size-10 items-center justify-center rounded-lg text-ink outline-none transition-colors hover:bg-mist-2 focus-visible:ring-2 focus-visible:ring-azure/60 lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="size-6" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-[88vw] max-w-sm flex-col border border-hairline bg-white shadow-2xl outline-none">
          <div className="flex items-center justify-between border-b border-hairline px-5 py-4">
            <Dialog.Title className="text-base font-semibold text-ink">Navigate</Dialog.Title>
            <Dialog.Close asChild>
              <button
                className="inline-flex size-10 items-center justify-center rounded-lg outline-none transition-colors hover:bg-mist-2 focus-visible:ring-2 focus-visible:ring-azure/60"
                aria-label="Close menu"
              >
                <X className="size-5 text-ink" />
              </button>
            </Dialog.Close>
          </div>

          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-4 py-5">
            <ul className="space-y-1">{menuItems}</ul>
          </nav>

          <div className="space-y-3 border-t border-hairline bg-mist/60 px-5 py-5">
            <Dialog.Close asChild>
              <Link
                to="/contact"
                className="group flex items-center justify-center gap-2 rounded-xl bg-azure px-4 py-3.5 text-[15px] font-semibold text-white shadow-sm outline-none transition-colors hover:bg-azure-deep focus-visible:ring-2 focus-visible:ring-ink/20"
              >
                Get a Quote
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </Dialog.Close>
            <a
              href={company.phoneHref}
              className="flex items-center justify-center gap-2 rounded-xl border border-hairline bg-white px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-mist-2"
            >
              <Phone className="size-4 text-azure" aria-hidden="true" />
              {company.phoneDisplay}
            </a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
