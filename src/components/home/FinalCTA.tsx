import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { company } from "@/data/company";
import { RevealBox } from "@/components/common/RevealBox";

/** Homepage Section 9 — final CTA band. */
export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-16 text-white sm:py-24" aria-labelledby="cta-heading">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-accent-600/25 blur-[110px]" />
      </div>
      <RevealBox className="container-page relative text-center">
        <h2 id="cta-heading" className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          Your Business Deserves Reliable IT &amp; Security Solutions.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-slate-300 sm:text-lg">
          Let ARTEK help you build a smarter, safer and more connected business environment.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/contact"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent-600 px-7 text-base font-semibold text-white transition-colors hover:bg-accent-700"
          >
            Request a Free Quote
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
          <a
            href={company.phoneHref}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/25 px-7 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Phone className="size-4" aria-hidden="true" />
            Call {company.phoneDisplay}
          </a>
        </div>
      </RevealBox>
    </section>
  );
}
