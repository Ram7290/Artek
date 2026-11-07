import { Link } from "react-router-dom";
import { BadgeCheck, ShieldCheck, Clock, Users, Headset, ArrowUpRight } from "lucide-react";
import { trustClaims } from "@/data/company";
import { cn } from "@/lib/utils";

const ICONS = {
  "badge-check": BadgeCheck,
  shield: ShieldCheck,
  clock: Clock,
  users: Users,
  headset: Headset,
} as const;

/** route each claim links to (only where a real page exists to back it) */
const CLAIM_LINKS: Partial<Record<(typeof trustClaims)[number]["id"], string>> = {
  sira: "/solutions/sira-approved-cctv-dubai",
};

/**
 * Trust indicators (homepage Section 2).
 * Text comes from data/company.ts → trustClaims where every entry is flagged
 * for ARTEK management review; see README "Claims to verify".
 */
export function TrustIndicators() {
  return (
    <section className="border-b border-white/5 bg-mist-2" aria-label="Trust indicators">
      <div className="container-page py-10">
        <h2 className="text-center text-sm font-semibold text-slate-300 sm:text-base">
          Trusted by leading businesses across Dubai, Abu Dhabi, and the UAE
        </h2>
        <ul className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-3 lg:grid-cols-4">
          {trustClaims.map((claim, i) => {
            const Icon = ICONS[claim.id === "dubai-police" ? "shield" : claim.id === "support" ? "headset" : claim.id === "years" ? "clock" : claim.id === "clients" ? "users" : "badge-check"];
            const to = CLAIM_LINKS[claim.id];
            const emphasized = claim.id === "sira";
            const cell = (
              <>
                {emphasized ? (
                  <span className="bg-azure/10 relative mx-auto flex size-9 items-center justify-center rounded-full">
                    <ShieldCheck className="text-azure-deep size-5" aria-hidden="true" />
                    <BadgeCheck
                      className="absolute -right-1 -bottom-1 size-4 rounded-full bg-mist-2 text-azure"
                      aria-hidden="true"
                    />
                  </span>
                ) : (
                  <Icon className="text-accent-600 mx-auto size-6" aria-hidden="true" />
                )}
                <p
                  className={cn(
                    "mt-2 text-sm font-semibold",
                    emphasized ? "text-azure-deep" : "text-ink",
                  )}
                >
                  {claim.label}
                  {to && (
                    <ArrowUpRight className="text-azure-deep/60 ml-1 inline size-3.5 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                  )}
                </p>
                {emphasized && (
                  <p className="text-azure-deep/70 mt-0.5 text-[11px] font-semibold">See what SIRA approval means →</p>
                )}
                {!emphasized && (
                  <p className="mt-0.5 text-xs leading-snug text-slate-400">{claim.detail}</p>
                )}
              </>
            );
            return (
              <li
                key={claim.id}
                className={cn("relative bg-mist-2 p-5 text-center", i === 0 && "col-span-2 sm:col-span-1")}
              >
                {to ? (
                  <Link
                    to={to}
                    className="group flex h-full flex-col items-center rounded-lg transition-colors hover:bg-mist/70"
                  >
                    {cell}
                  </Link>
                ) : (
                  <div className="flex h-full flex-col items-center">{cell}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
