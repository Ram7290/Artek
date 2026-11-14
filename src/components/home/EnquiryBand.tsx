import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { company } from "@/data/company";
import { RevealBox } from "@/components/common/RevealBox";

/**
 * Homepage — mid-page enquiry band (between Solutions and Industries).
 *
 * Sits at the point where a visitor has just seen what ARTEK does but has not
 * yet decided to scroll to the footer: the moment intent is highest.
 *
 * Deliberately phone-first. The site's contact form is still in demo mode
 * (see ContactForm), so sending people to it would be a dead end — the phone
 * is the one channel that works today. Add WhatsApp here once a number is
 * confirmed; do NOT invent one.
 */
export function EnquiryBand() {
  return (
    <section className="border-y border-white/[0.08] band" aria-labelledby="enquiry-heading">
      <div className="container-page">
        <RevealBox className="grid items-end gap-8 lg:grid-cols-[minmax(0,1.25fr)_auto] lg:gap-16">
          <div>
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted">
              Next step
              <span className="h-px w-10 bg-white/15" aria-hidden="true" />
            </p>
            <h2
              id="enquiry-heading"
              className="display-title mt-4 text-[clamp(1.6rem,1.2rem+1.3vw,2.35rem)] text-text"
            >
              Not sure what your premises needs? Ask us.
            </h2>
            <p className="mt-3 max-w-xl text-pretty text-[15px] leading-relaxed text-text-muted">
              Tell us what you have today and what is going wrong with it. We will
              tell you what we would install — and what we would leave alone.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
            <a
              href={company.phoneHref}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-paper px-6 text-[15px] font-semibold text-surface transition-colors duration-200 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
            >
              <Phone className="size-4" aria-hidden="true" />
              {company.phoneDisplay}
            </a>
            <Link
              to="/contact"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/20 px-6 text-[15px] font-semibold text-text transition-colors duration-200 hover:border-white/40 hover:bg-white/[0.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
            >
              Contact details
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </RevealBox>
      </div>
    </section>
  );
}
