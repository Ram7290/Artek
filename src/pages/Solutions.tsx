import { Link } from "react-router-dom";
import { ServiceCard } from "@/components/common/ServiceCard";
import { RevealBox } from "@/components/common/RevealBox";
import { coreServices, services } from "@/data/services";

/** Solutions index — the eight core services plus the additional CCTV landing pages. */
export default function Solutions() {
  const extras = services.filter((s) => s.context === "seo");
  return (
    <>
      <section className="bg-navy-950 pb-14 pt-32 text-white sm:pb-16">
        <div className="container-page">
          <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Our IT &amp; Security Solutions
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-base text-slate-300 sm:text-lg">
            Complete technology solutions for UAE businesses — supplied, installed and supported by one team.
          </p>
        </div>
      </section>

      <section className="bg-slate-safe py-14 sm:py-20">
        <div className="container-page">
          <h2 className="sr-only">Core solutions</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreServices.map((s, i) => (
              <RevealBox key={s.slug} delay={(i % 4) * 70}>
                <ServiceCard service={s} priority={i < 2} />
              </RevealBox>
            ))}
          </div>

          <h2 className="mt-16 text-2xl font-bold text-slate-900">Popular CCTV services</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {extras.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/solutions/${s.slug}`}
                  className="block rounded-lg border border-slate-200 bg-white p-4 text-sm font-medium text-slate-800 transition-colors hover:border-accent-600/50 hover:text-accent-600"
                >
                  {s.name}
                  <span className="mt-1 block text-xs font-normal text-slate-500">{s.shortDescription.slice(0, 64)}…</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
