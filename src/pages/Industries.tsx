import { Link } from "react-router-dom";
import {
  Building2, Store, Home, Warehouse, ConciergeBell, Factory,
} from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { RevealBox } from "@/components/common/RevealBox";
import { industries } from "@/data/industries";

const ICONS = {
  "building-2": Building2,
  store: Store,
  home: Home,
  warehouse: Warehouse,
  "concierge-bell": ConciergeBell,
  factory: Factory,
} as const;

/** Industries index. */
export default function Industries() {
  return (
    <>
      <section className="bg-navy-950 pb-14 pt-32 text-white sm:pb-16">
        <div className="container-page">
          <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Industries We Serve
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-base text-slate-300 sm:text-lg">
            From small businesses to enterprise environments, ARTEK delivers technology solutions designed around your operational needs.
          </p>
        </div>
      </section>
      <section className="bg-white py-14 sm:py-20">
        <div className="container-page">
          <SectionHeading
            align="left"
            title="Explore ARTEK's sector experience"
            description="Each industry brings different requirements — our engineers plan around them after a site survey."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => {
              const Icon = ICONS[ind.icon as keyof typeof ICONS] ?? Building2;
              return (
                <RevealBox as="li" key={ind.slug} delay={(i % 3) * 70}>
                  <Link
                    to={`/industries/${ind.slug}`}
                    className="group flex h-full flex-col rounded-xl border border-slate-200 p-6 transition-colors hover:border-accent-600/50"
                  >
                    <span className="flex size-11 items-center justify-center rounded-lg bg-accent-600/10">
                      <Icon className="size-5 text-accent-600" aria-hidden="true" />
                    </span>
                    <h2 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-accent-600">{ind.name}</h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{ind.description}</p>
                    <span className="mt-4 text-xs font-medium text-accent-600">Read more →</span>
                  </Link>
                </RevealBox>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
