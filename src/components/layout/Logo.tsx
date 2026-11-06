import { Link } from "react-router-dom";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

/** ARTEK wordmark; navy chip reads well on light and dark headers alike. */
export function Logo({
  dark = false,
  className,
}: {
  dark?: boolean;
  className?: string;
}) {
  return (
    <Link
      to="/"
      className={cn("flex items-center gap-2.5 focus-visible:outline-none", className)}
      aria-label={`${company.name} — home`}
    >
      <svg viewBox="0 0 64 64" className="h-9 w-9 shrink-0" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill="#101D35" />
        <path d="M18 46 L32 16 L46 46" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24.5 35 h15" stroke="#38BDF8" strokeWidth="5" strokeLinecap="round" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-lg font-extrabold tracking-wide",
            dark ? "text-ink" : "text-white",
          )}
        >
          ARTEK
        </span>
        <span
          className={cn(
            "text-[10px] font-medium uppercase tracking-[0.28em]",
            dark ? "text-ink/50" : "text-slate-400",
          )}
        >
          Computers LLC
        </span>
      </span>
    </Link>
  );
}
