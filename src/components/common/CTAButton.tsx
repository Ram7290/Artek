import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants, type ButtonProps } from "@/components/ui/button";

/**
 * CTA link styled as a button. `href` may be internal (route path) or
 * absolute (tel:, external URL) — rendered accordingly.
 */
export const CTAButton = forwardRef<HTMLAnchorElement, { href: string; children: React.ReactNode } & Omit<ButtonProps, "ref" | "asChild">>(
  function CTAButton({ href, variant, size, className, children, ...rest }, ref) {
    const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    const classes = cn(buttonVariants({ variant, size }), className);
    if (isExternal) {
      return (
        <a href={href} className={classes} ref={ref} {...(rest as Record<string, unknown>)}>
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={classes} ref={ref} {...(rest as Record<string, unknown>)}>
        {children}
      </Link>
    );
  },
);

export const ArrowCTA = ({ children, to, className }: { children: React.ReactNode; to: string; className?: string }) => (
  <Link
    to={to}
    className={cn("group inline-flex items-center gap-1.5 border-b border-white/20 pb-1 text-sm font-semibold text-text transition-colors hover:border-white/60", className)}
  >
    {children}
    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
  </Link>
);
