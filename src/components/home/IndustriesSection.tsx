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
  "from-navy-950 via-accent-700 to-accent-400",
  "from-navy-900 via-accent-600 to-accent-400",
  "from-slate-800 via-accent-700 to-accent-500",
  "from-navy-950 via-accent-600 to-accent-400",
  "from-navy-900 via-accent-500 to-accent-400",
  "from-slate-900 via-accent-700 to-accent-500",
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
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-(--shadow-card) transition-shadow hover:shadow-(--shadow-card-hover)">
                  {/* placeholder visual — replace with optimized webp/avif project photo of slug `ind.slug` */}
                  <div className={`relative flex h-36 items-center justify-center bg-gradient-to-br ${GRADIENTS[i % GRADIENTS.length]}`}>
                    <Icon className="size-10 text-white/80" strokeWidth={1.5} aria-hidden="true" />
                    <Link
                      to={`/industries/${ind.slug}`}
                      className="absolute inset-0"
                      tabIndex={-1}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      <Link to={`/industries/${ind.slug}`} className="transition-colors hover:text-accent-600">
                        {ind.name}
                      </Link>
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{ind.description}</p>
                    <div className="mt-4">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Related solutions</p>
                      <ul className="mt-2 flex flex-wrap gap-2">
                        {ind.relatedServices.map((rid) => {
                          const s = bySlug(rid);
                          return s ? (
                            <li key={rid}>
                              <Link
                                to={`/solutions/${s.slug}`}
                                className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600 transition-colors hover:border-accent-600 hover:text-accent-600"
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
