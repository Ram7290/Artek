import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { RevealBox } from "@/components/common/RevealBox";
import { locations } from "@/data/locations";
import { services } from "@/data/services";

/** Homepage Section 7 — service locations (only confirmed areas from data/locations.ts). */
export function LocationsSection() {
  return (
    <section className="bg-slate-safe py-16 sm:py-24" aria-labelledby="locations-heading">
      <div className="container-page">
        <SectionHeading
          eyebrow="Where we operate"
          title="Serving Businesses Across the UAE"
          description="Reliable IT infrastructure and security solutions for businesses across our service locations."
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((loc, i) => (
            <RevealBox as="li" key={loc.slug} delay={(i % 4) * 70}>
              <Link
                to={`/locations/${loc.slug}`}
                className="group flex h-full flex-col rounded-xl border border-white/10 bg-mist-2 p-6 transition-colors hover:border-accent-600/50"
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-accent-600/10">
                  <MapPin className="size-5 text-accent-600" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink group-hover:text-accent-600">
                  {loc.name}
                </h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-300">
                  {loc.coverage[0]}
                </p>
                <span className="mt-4 text-xs font-medium text-slate-400">
                  {loc.combos?.length
                    ? "Learn more →"
                    : `${Math.min(services.length, 4)}+ solutions available →`}
                </span>
              </Link>
            </RevealBox>
          ))}
        </ul>
      </div>
    </section>
  );
}
