import { Link } from "react-router-dom";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

/** ARTEK logo: client PNG mark + wordmark text. */
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
      className={cn(
        "flex shrink-0 items-center gap-3 whitespace-nowrap focus-visible:outline-none",
        className,
      )}
      aria-label={`${company.name} — home`}
    >
      <img
        src="/images/log_ma.png"
        alt=""
        aria-hidden="true"
        width={56}
        height={56}
        draggable={false}
        className={cn(
          "h-12 w-12 shrink-0 select-none object-contain sm:h-50 sm:w-50",
          dark ? "opacity-100" : "opacity-90",
        )}
      />
      {/* <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-xl font-extrabold tracking-wide",
            dark ? "text-ink" : "text-white",
          )}
        >
          ARTEK
        </span>
        <span
          className={cn(
            "mt-1 text-[11px] font-medium uppercase tracking-[0.28em]",
            dark ? "text-ink/50" : "text-slate-400",
          )}
        >
          Computers LLC
        </span>
      </span> */}
    </Link>
  );
}