import { Link } from "react-router-dom";
import { MapPin, CheckCircle2 } from "lucide-react";
import { RevealBox } from "@/components/common/RevealBox";
import { locations } from "@/data/locations";

/** Locations index. */
export default function Locations() {
  return (
    <>
      <section className="bg-navy-950 pb-14 pt-32 text-white sm:pb-16">
        <div className="container-page">
          <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Service Locations</h1>
          <p className="mt-4 max-w-2xl text-pretty text-base text-slate-300 sm:text-lg">
            Reliable IT infrastructure and security solutions for businesses across our service locations.
          </p>
        </div>
      </section>
      <section className="bg-slate-safe py-14 sm:py-20">
        <ul className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((loc, i) => (
            <RevealBox as="li" key={loc.slug} delay={(i % 4) * 70}>
              <Link
                to={`/locations/${loc.slug}`}
                className="group flex h-full flex-col rounded-xl border border-white/10 bg-mist-2 p-6 transition-colors hover:border-accent-600/50"
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-accent-600/10">
                  <MapPin className="size-5 text-accent-600" aria-hidden="true" />
                </span>
                <h2 className="mt-4 text-lg font-semibold text-ink group-hover:text-accent-600">{loc.name}</h2>
                <ul className="mt-3 flex-1 space-y-2">
                  {loc.coverage.slice(0, 3).map((c) => (
                    <li key={c} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-accent-600" aria-hidden="true" />
                      {c.length > 58 ? `${c.slice(0, 58)}…` : c}
                    </li>
                  ))}
                </ul>
                <span className="mt-4 text-xs font-medium text-accent-600">View {loc.name} details →</span>
              </Link>
            </RevealBox>
          ))}
        </ul>
        <p className="container-page mt-10 text-center text-sm text-slate-400">
          Coverage beyond {locations.map((l) => l.name).join(", ")}?{" "}
          <Link to="/contact" className="text-accent-600 hover:underline">
            Contact us
          </Link>{" "}
          to confirm availability for your site.
        </p>
      </section>
    </>
  );
}
