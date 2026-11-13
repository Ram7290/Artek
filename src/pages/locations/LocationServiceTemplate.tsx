import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { getLocationBySlug } from "@/data/locations";
import { getServiceBySlug } from "@/data/services";
import { company } from "@/data/company";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { RevealBox } from "@/components/common/RevealBox";
import { Button } from "@/components/ui/button";
import NotFound from "@/pages/NotFound";

/**
 * Location × service combo page template — /locations/:emirate/:service.
 * Copy comes from the combo's unique `localPitch` (never templated city swaps).
 */
export function LocationServiceTemplate() {
  const { emirate, service } = useParams<{ emirate: string; service: string }>();
  const location = emirate ? getLocationBySlug(emirate) : undefined;
  const svc = service ? getServiceBySlug(service) : undefined;
  const combo =
    location && svc
      ? location.combos?.find((c) => c.serviceSlug === svc.slug)
      : undefined;

  useEffect(() => {
    if (location && svc) document.title = `${svc.name} in ${location.name} | ARTEK Computers LLC`;
  }, [location, svc]);

  if (!location || !svc || !combo) return <NotFound />;

  return (
    <article>
      <header className="bg-navy-950 pb-14 pt-32 text-white sm:pb-16">
        <div className="container-page">
          <div className="[&_a]:text-slate-400 [&_span]:text-slate-400">
            <Breadcrumbs
              items={[
                { label: "Home", to: "/" },
                { label: "Service Locations", to: "/locations" },
                { label: location.name, to: `/locations/${location.slug}` },
                { label: svc.name, to: `/locations/${location.slug}/${svc.slug}` },
              ]}
            />
          </div>
          <h1 className="mt-6 max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            {svc.name} in {location.name}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-base text-slate-300 sm:text-lg">{combo.localPitch}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/contact">
                Request a Free Quote
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
            <a
              href={company.phoneHref}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/25 px-7 font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="size-4" aria-hidden="true" />
              {company.phoneDisplay}
            </a>
          </div>
        </div>
      </header>

      <div className="bg-mist-2 py-14 sm:py-20">
        <div className="container-page max-w-3xl space-y-8">
          <RevealBox>
            <h2 className="text-2xl font-bold text-ink">About {svc.name} in {location.name}</h2>
            <p className="mt-4 leading-relaxed text-slate-300">{svc.overview}</p>
          </RevealBox>
          <RevealBox>
            <h2 className="text-2xl font-bold text-ink">How we deliver this in {location.name}</h2>
            <ul className="mt-4 space-y-2.5 text-slate-300">
              {svc.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm">
                  <CheckIcon />
                  {b}
                </li>
              ))}
            </ul>
          </RevealBox>
          <RevealBox className="rounded-xl bg-slate-safe p-6">
            <h2 className="text-lg font-semibold text-ink">Request a quote in {location.name}</h2>
            <p className="mt-2 text-sm text-slate-300">
              Call {company.phoneDisplay} — a Dubai-based team handles {location.name} scheduling and delivery.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link to="/contact">Request a Free Quote</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to={`/locations/${location.slug}`}>All services in {location.name}</Link>
              </Button>
            </div>
          </RevealBox>
        </div>
      </div>
    </article>
  );
}

function CheckIcon() {
  return (
    <svg className="mt-0.5 size-4 shrink-0 text-accent-600" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.5 10.2 9 12.7l4.6-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default LocationServiceTemplate;
