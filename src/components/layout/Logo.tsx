import { Link } from "react-router-dom";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

/**
 * ARTEK logo — client PNG mark (400×80 canvas, content ≈ 279×53 with a
 * 59px left inset).
 *
 * Sized by height only: 30px on mobile (as originally), 44px from `md` up,
 * which still fits inside the 60px nav bar with room to breathe. `max-w-none`
 * is required because the global image reset otherwise clamps the mark.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      className={cn(
        "flex shrink-0 items-center whitespace-nowrap rounded-md focus-visible:outline-none",
        className,
      )}
      aria-label={`${company.name} — home`}
    >
      <img
        src="/images/log_ma.png"
        alt={company.name}
        width={400}
        height={80}
        draggable={false}
        decoding="async"
        className="h-[30px] w-auto max-w-none select-none md:h-[44px]"
      />
    </Link>
  );
}
