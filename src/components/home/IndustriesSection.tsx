import { Link } from "react-router-dom";
import {
  Building2, Store, Home, Warehouse, ConciergeBell, Factory,
} from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { RevealBox } from "@/components/common/RevealBox";
import { ArrowCTA } from "@/components/common/CTAButton";
import { industries } from "@/data/industries";
import { coreServices } from "@/data/services";
import { services } from "@/data/services";

const ICONS = {
  "building-2": Building2,
  store: Store,
  home: Home,
  warehouse: Warehouse,
  "concierge-bell": ConciergeBell,
  factory: Factory,
} as const;

const GRADIENTS = [
  "from-navy-950 to-navy-700",
  "from-navy-900 to-navy-850",
  "from-navy-950 to-navy-700",
  "from-navy-900 to-navy-700",
  "from-navy-950 to-navy-850",
  "from-navy-900 to-navy-700",
];

/** Homepage Section 6 — industries (placeholder gradients until project photos are supplied). */
export function IndustriesSection() {
  const bySlug = (id: string) => coreServices.find((s) => s.id === id) ?? services.find((s) => s.id === id);
  return (
    <section className="bg-white py-16 sm:py-24" aria-labelledby="industries-heading">
      <div className="container-page">
        <SectionHeading
          eyebrow="Industries"
          title="Technology Solutions for Every Industry"
          description="From small businesses to enterprise environments, ARTEK delivers technology solutions designed around your operational needs."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => {
            const Icon = ICONS[ind.icon as keyof typeof ICONS] ?? Building2;
            return (
              <RevealBox as="li" key={ind.slug} delay={(i % 3) * 80}>
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-hairline bg-white shadow-(--shadow-card) transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/50 hover:shadow-(--shadow-card-hover)">
                  {/* placeholder visual — replace with optimized webp/avif project photo of slug `ind.slug` */}
                  <div className={`relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br ${GRADIENTS[i % GRADIENTS.length]}`}>
                    {/* soft gold halo — eases in on hover */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-12 right-[-12%] h-44 w-44 rounded-full bg-accent-400/20 blur-2xl opacity-40 transition-opacity duration-500 group-hover:opacity-90"
                    />
                    {/* faint diagonal sheen */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_35%,rgba(255,255,255,0.06)_50%,transparent_65%)]"
                    />
                    <span className="relative z-10 flex size-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-inset ring-white/25 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                      <Icon className="size-8 text-accent-400" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    {/* gold underline that sweeps in on hover */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-accent-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-80"
                    />
                    <Link
                      to={`/industries/${ind.slug}`}
                      className="absolute inset-0"
                      tabIndex={-1}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold text-ink">
                      <Link to={`/industries/${ind.slug}`} className="transition-colors hover:text-accent-600">
                        {ind.name}
                      </Link>
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{ind.description}</p>
                    <div className="mt-4">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-accent-600/80">Related solutions</p>
                      <ul className="mt-2 flex flex-wrap gap-2">
                        {ind.relatedServices.map((rid) => {
                          const s = bySlug(rid);
                          return s ? (
                            <li key={rid}>
                              <Link
                                to={`/solutions/${s.slug}`}
                                className="rounded-full border border-hairline bg-mist px-3 py-1 text-xs font-medium text-ink-soft transition-colors hover:border-accent-600 hover:text-accent-600"
                              >
                                {s.title}
                              </Link>
                            </li>
                          ) : null;
                        })}
                      </ul>
                    </div>
                  </div>
                </article>
              </RevealBox>
            );
          })}
        </ul>
        <div className="mt-10 text-center">
          <ArrowCTA to="/industries" className="text-base">
            See all industries we serve
          </ArrowCTA>
        </div>
      </div>
    </section>
  );
}
