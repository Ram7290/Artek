import * as Dialog from "@radix-ui/react-dialog";
import { Link, NavLink } from "react-router-dom";
import { ChevronRight, Menu, Phone, X } from "lucide-react";
import { navItems } from "@/data/navigation";
import { company } from "@/data/company";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Mobile navigation: slide-in Radix Dialog sheet, keyboard accessible (Esc/close). */
export function MobileMenu({ light = false }: { light?: boolean }) {
  const close = () => document.dispatchEvent(new Event("artek:menu-close"));
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className={cn(
            "inline-flex size-10 items-center justify-center rounded-lg lg:hidden",
            light ? "text-ink hover:bg-mist-2" : "text-white hover:bg-white/10",
          )}
          aria-label="Open menu"
        >
          <Menu className="size-6" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-[86vw] max-w-sm flex-col bg-navy-950 text-white shadow-2xl outline-none">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <Dialog.Title className="text-base font-semibold">Menu</Dialog.Title>
            <Dialog.Close asChild>
              <button className="inline-flex size-10 items-center justify-center rounded-lg hover:bg-white/10" aria-label="Close menu">
                <X className="size-5" />
              </button>
            </Dialog.Close>
          </div>
          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-4">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={close}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center justify-between rounded-lg px-3 py-2.5 text-[15px] font-medium",
                        isActive ? "bg-white/10 text-white" : "text-slate-100 hover:bg-white/5",
                      )
                    }
                  >
                    {item.label}
                    {item.children && <ChevronRight className="size-4 text-slate-500" aria-hidden="true" />}
                  </NavLink>
                  {item.children && (
                    <ul className="ml-3 border-l border-white/10 py-1 pl-3">
                      {item.children.map((child) => (
                        <li key={child.to}>
                          <Link
                            to={child.to}
                            onClick={close}
                            className="block rounded-md px-2 py-1.5 text-sm text-slate-400 hover:text-white"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-3 border-t border-white/10 p-5">
            <Button asChild size="lg" className="w-full">
              <Link to="/contact" onClick={close}>
                Request a Quote
              </Link>
            </Button>
            <a
              href={company.phoneHref}
              className="flex items-center justify-center gap-2 rounded-lg border border-white/20 px-4 py-3 text-sm font-medium text-white hover:bg-white/10"
            >
              <Phone className="size-4" aria-hidden="true" />
              {company.phoneDisplay}
            </a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
