import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { RevealBox } from "@/components/common/RevealBox";
import { processSteps } from "@/data/process";

/**
 * Homepage — "How we work" (the story's spine, between Why and Solutions).
 *
 * Deliberately the only light surface on the home page: no cards, no icons,
 * no filled panels. Hierarchy comes from oversized numerals, hairline rules
 * and typography alone — the counterweight to the card grids around it.
 * Content is data-driven; see src/data/process.ts for claim caveats.
 */
export function ProcessSection() {
  return (
    <section
      id="how-we-work"
      className="on-paper bg-paper band-lg text-slate-900"
      aria-labelledby="process-heading"
    >
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 xl:gap-24">
          {/* Left — chapter heading, held in view while the steps scroll */}
          <RevealBox className="lg:sticky lg:top-28 lg:self-start">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-600">
              How we work
              <span className="h-px w-10 bg-slate-900/20" aria-hidden="true" />
            </p>
            <h2
              id="process-heading"
              className="display-title mt-5 text-[clamp(1.85rem,1.35rem+1.6vw,2.9rem)]"
            >
              From the first survey to the call you make at 2am.
            </h2>
            <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-slate-600">
              Every project follows the same four steps — one camera or a full
              office fit-out. You always know what happens next, who is doing
              it, and what it costs.
            </p>
            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-2 border-b border-slate-900/25 pb-1 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-900"
            >
              Start with a site survey
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </RevealBox>

          {/* Right — the four steps as a ruled list, not cards */}
          <ol className="border-t border-slate-900/10">
            {processSteps.map((step, i) => (
              <RevealBox
                as="li"
                key={step.id}
                delay={i * 80}
                className="border-b border-slate-900/10"
              >
                <div className="grid grid-cols-[auto_1fr] gap-5 py-7 sm:gap-8 sm:py-9">
                  <span
                    aria-hidden="true"
                    className="text-2xl font-bold leading-none tracking-tight text-slate-900/20 tabular-nums sm:text-3xl"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                        {step.title}
                      </h3>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600">
                        {step.when}
                      </span>
                    </div>
                    <p className="mt-2 max-w-xl text-pretty text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </RevealBox>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
