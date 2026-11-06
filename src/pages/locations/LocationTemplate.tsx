import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CheckCircle2, MapPin, Phone } from "lucide-react";
import { getLocationBySlug, locations } from "@/data/locations";
import { getServiceBySlug } from "@/data/services";
import { company } from "@/data/company";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQAccordion } from "@/components/common/FAQAccordion";
import { RevealBox } from "@/components/common/RevealBox";
import { Button } from "@/components/ui/button";
import NotFound from "@/pages/NotFound";

/** Location landing page template — /locations/:emirate */
export function LocationTemplate() {
  const { emirate } = useParams<{ emirate: string }>();
  const location = emirate ? getLocationBySlug(emirate) : undefined;

  useEffect(() => {
    if (location) document.title = location.seo.title;
  }, [location]);

  if (!location) return <NotFound />;

  return (
    <article>
      <header className="bg-navy-950 pb-14 pt-32 text-white sm:pb-16">
        <div className="container-page">
          <div className="[&_a]:text-slate-400 [&_span]:text-slate-500">
            <Breadcrumbs
              items={[
                { label: "Home", to: "/" },
                { label: "Service Locations", to: "/locations" },
                { label: location.name, to: `/locations/${location.slug}` },
              ]}
            />
          </div>
          <h1 className="mt-6 flex items-center gap-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            <MapPin className="size-8 text-accent-400" aria-hidden="true" />
            {location.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-base text-slate-300 sm:text-lg">{location.intro}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/contact">Request a Free Quote</Link>
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

      <div className="bg-white py-14 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <div className="max-w-3xl space-y-12">
            <RevealBox>
              <h2 className="text-2xl font-bold text-slate-900">What we deliver in {location.name}</h2>
              <ul className="mt-5 space-y-3">
                {location.coverage.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-slate-700">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent-600" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
            </RevealBox>

            {location.serviceNotes.length > 0 && (
              <RevealBox>
                <h2 className="text-2xl font-bold text-slate-900">Service highlights</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {location.serviceNotes.map((note) => {
                    const svc = getServiceBySlug(note.service);
                    return svc ? (
                      <Link
                        key={note.service}
                        to={`/solutions/${svc.slug}`}
                        className="rounded-xl border border-slate-200 p-5 transition-colors hover:border-accent-600/50"
                      >
                        <h3 className="font-semibold text-slate-900">{svc.title}</h3>
                        <p className="mt-1.5 text-sm text-slate-600">{note.note}</p>
                      </Link>
                    ) : null;
                  })}
                </div>
              </RevealBox>
            )}

            {location.combos && location.combos.length > 0 && (
              <RevealBox>
                <h2 className="text-2xl font-bold text-slate-900">Popular services in {location.name}</h2>
                <ul className="mt-6 space-y-4">
                  {location.combos.map((combo) => {
                    const svc = getServiceBySlug(combo.serviceSlug);
                    return svc ? (
                      <li key={combo.serviceSlug}>
                        <Link
                          to={`/locations/${location.slug}/${combo.serviceSlug}`}
                          className="block rounded-xl border border-slate-200 p-5 transition-colors hover:border-accent-600/50"
                        >
                          <h3 className="font-semibold text-slate-900">
                            {svc.name} in {location.name}
                          </h3>
                          <p className="mt-1.5 text-sm text-slate-600">{combo.localPitch}</p>
                        </Link>
                      </li>
                    ) : null;
                  })}
                </ul>
              </RevealBox>
            )}

            <RevealBox>
              <h2 className="text-2xl font-bold text-slate-900">Questions about {location.name}</h2>
              <FAQAccordion faqs={location.faqs} className="mt-6" />
            </RevealBox>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <nav aria-label="Other service locations" className="rounded-xl border border-slate-200 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Other locations</h2>
              <ul className="mt-3 space-y-2.5 text-sm">
                {locations
                  .filter((l) => l.slug !== location.slug)
                  .map((l) => (
                    <li key={l.slug}>
                      <Link
                        to={`/locations/${l.slug}`}
                        className="font-medium text-slate-800 underline-offset-4 hover:text-accent-600 hover:underline"
                      >
                        {l.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </nav>
            <div className="rounded-xl bg-navy-950 p-6 text-white">
              <h2 className="text-lg font-semibold">Get a quote for {location.name}</h2>
              <p className="mt-2 text-sm text-slate-300">
                Call {company.phoneDisplay} or send your requirement and we&apos;ll respond promptly.
              </p>
              <Button asChild className="mt-4 w-full">
                <Link to="/contact">Request a Free Quote</Link>
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}

export default LocationTemplate;
