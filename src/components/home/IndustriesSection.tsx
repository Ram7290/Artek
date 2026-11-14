import { Link } from "react-router-dom";
import {
  Building2, Store, Home, Warehouse, ConciergeBell, Factory, ArrowUpRight,
} from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { RevealBox } from "@/components/common/RevealBox";
import { ArrowCTA } from "@/components/common/CTAButton";
import { industries } from "@/data/industries";

const ICONS = {
  "building-2": Building2,
  store: Store,
  home: Home,
  warehouse: Warehouse,
  "concierge-bell": ConciergeBell,
  factory: Factory,
} as const;

/**
 * Homepage — industries.
 *
 * Deliberately NOT a card grid (Solutions owns that pattern): a ruled list of
 * sectors with the icon and name on the left and the description right, so
 * the page alternates between dense and open rather than repeating cards.
 * Placeholder gradient panels were removed — an empty gradient reads as a
 * missing photo; the type-only treatment reads as intentional until real
 * project photography arrives.
 */
export function IndustriesSection() {
  return (
    <section className="band-lg" aria-labelledby="industries-heading">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16 xl:gap-24">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              id="industries-heading"
              align="left"
              eyebrow="Industries"
              title="Built around how your premises actually runs."
              description="A villa, a warehouse and a clinic have different risks, budgets and regulations. The work starts with yours."
            />
            <div className="mt-8">
              <ArrowCTA to="/industries">See all industries we serve</ArrowCTA>
            </div>
          </div>

          <ul className="border-t border-white/10">
            {industries.map((ind, i) => {
              const Icon = ICONS[ind.icon as keyof typeof ICONS] ?? Building2;
              return (
                <RevealBox as="li" key={ind.slug} delay={(i % 3) * 60} className="group border-b border-white/10">
                  <Link
                    to={`/industries/${ind.slug}`}
                    className="grid grid-cols-[auto_1fr_auto] items-start gap-5 py-6 transition-colors sm:gap-6"
                  >
                    <span className="mt-0.5 flex size-10 items-center justify-center rounded-lg border border-white/10 text-text-muted transition-colors duration-300 group-hover:border-white/25 group-hover:text-text">
                      <Icon className="size-[18px]" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-lg font-semibold tracking-tight text-text">
                        {ind.name}
                      </span>
                      <span className="mt-1 block max-w-lg text-sm leading-relaxed text-text-muted">
                        {ind.description}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="mt-1 size-5 shrink-0 text-white/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-text"
                      aria-hidden="true"
                    />
                  </Link>
                </RevealBox>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
