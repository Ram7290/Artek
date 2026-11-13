import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { trustClaims } from "@/data/company";

const CLAIM_LINKS: Partial<Record<(typeof trustClaims)[number]["id"], string>> = {
  sira: "/solutions/sira-approved-cctv-dubai",
};

/**
 * Trust indicators (homepage Section 2).
 *
 * Presented as a single ruled strip rather than a boxed 4-cell widget: the
 * claims sit on the same field as the hero, separated by hairlines. One item
 * (SIRA) is given more space and weight because it is the strongest proof.
 *
 * Text comes from data/company.ts → trustClaims where every entry is flagged
 * for ARTEK management review; see README "Claims to verify".
 */
export function TrustIndicators() {
  return (
    <section className="border-t border-white/[0.08]" aria-label="Credentials">
      <div className="container-page band-tight">
        <div className="grid divide-y divide-white/[0.08] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {trustClaims.map((claim) => {
            const to = CLAIM_LINKS[claim.id];
            const body = (
              <>
                <p className="text-lg font-semibold leading-snug tracking-tight text-text sm:text-xl">
                  {claim.label}
                  {to && (
                    <ArrowUpRight
                      className="ml-1 inline size-4 text-text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  )}
                </p>
                {claim.detail && (
                  <p className="mt-1 text-xs leading-snug text-text-muted">{claim.detail}</p>
                )}
              </>
            );

            return (
              <div
                key={claim.id}
                className="flex flex-col justify-center py-4 first:pt-0 last:pb-0 sm:py-5 lg:px-7 lg:py-6 lg:first:pl-0 lg:last:pr-0"
              >
                {to ? (
                  <Link to={to} className="group block">
                    {body}
                  </Link>
                ) : (
                  <div>{body}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
