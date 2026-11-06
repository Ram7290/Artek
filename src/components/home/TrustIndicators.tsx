import { BadgeCheck, ShieldCheck, Clock, Users, Headset } from "lucide-react";
import { trustClaims } from "@/data/company";
import { cn } from "@/lib/utils";

const ICONS = {
  "badge-check": BadgeCheck,
  shield: ShieldCheck,
  clock: Clock,
  users: Users,
  headset: Headset,
} as const;

/**
 * Trust indicators (homepage Section 2).
 * Text comes from data/company.ts → trustClaims where every entry is flagged
 * for ARTEK management review; see README "Claims to verify".
 */
export function TrustIndicators() {
  return (
    <section className="border-b border-slate-100 bg-white" aria-label="Trust indicators">
      <div className="container-page py-10">
        <h2 className="text-center text-sm font-semibold text-slate-700 sm:text-base">
          Trusted by leading businesses across Dubai, Abu Dhabi, and the UAE
        </h2>
        <ul className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-slate-100 sm:grid-cols-3 lg:grid-cols-5">
          {trustClaims.map((claim, i) => {
            const Icon = ICONS[claim.id === "dubai-police" ? "shield" : claim.id === "support" ? "headset" : claim.id === "years" ? "clock" : claim.id === "clients" ? "users" : "badge-check"];
            return (
              <li
                key={claim.id}
                className={cn("bg-white p-5 text-center", i === 0 && "col-span-2 sm:col-span-1")}
              >
                <Icon className="mx-auto size-6 text-accent-600" aria-hidden="true" />
                <p className="mt-2 text-sm font-semibold text-slate-900">{claim.label}</p>
                <p className="mt-0.5 text-xs leading-snug text-slate-500">{claim.detail}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
