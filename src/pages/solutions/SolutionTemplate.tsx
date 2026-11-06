import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { getServiceBySlug, coreServices, services } from "@/data/services";
import { company } from "@/data/company";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { RevealBox } from "@/components/common/RevealBox";
import { FAQAccordion } from "@/components/common/FAQAccordion";
import { Button } from "@/components/ui/button";
import NotFound from "@/pages/NotFound";

const breadcrumbFrom = (slug: string) =>
  coreServices.some((s) => s.slug === slug) ? coreServices[0] : services.find((s) => s.slug === slug);

/**
 * Reusable service landing page template.
 * Route: /solutions/:slug — one template renders all services + SEO pages;
 * unique H1/copy/meta/FAQ come from data/services.ts.
 */
export default function SolutionTemplate() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  useEffect(() => {
    if (service) document.title = `${service.seo.title}`;
  }, [service]);

  if (!service) return <NotFound />;
  void breadcrumbFrom;

  const related = service.related
    .map((id) => coreServices.find((s) => s.id === id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  /* First content block sits inside the line above. */
  return (
    <article>
      {/* page header */}
      <header className="bg-navy-950 pb-14 pt-32 text-white sm:pb-16">
        <div className="container-page">
          <div className="[&_a]:text-slate-400 [&_span]:text-slate-500">
            <Breadcrumbs
              items={[
                { label: "Home", to: "/" },
                { label: "IT Solutions", to: "/solutions" },
                { label: service.title, to: `/solutions/${service.slug}` },
              ]}
            />
          </div>
          <h1 className="mt-6 max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-4xl xl:text-[2.75rem]">
            {service.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-base text-slate-300 sm:text-lg">
            {service.shortDescription}
          </p>
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
              Call {company.phoneDisplay}
            </a>
          </div>
        </div>
      </header>

      {/* body */}
      <div className="bg-white py-14 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
          <div className="max-w-3xl space-y-12">
            <RevealBox>
              <h2 className="text-2xl font-bold text-slate-900">Service overview</h2>
              <p className="mt-4 leading-relaxed text-slate-600">{service.overview}</p>
              <figure className="mt-8 overflow-hidden rounded-xl border border-slate-200">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  width={960}
                  height={540}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/9] w-full object-cover"
                />
              </figure>
            </RevealBox>

            <RevealBox>
              <h2 className="text-2xl font-bold text-slate-900">What you get</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent-600" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </RevealBox>

            <RevealBox>
              <h2 className="text-2xl font-bold text-slate-900">Service features</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {service.features.map((f) => (
                  <div key={f.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="font-semibold text-slate-900">{f.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{f.description}</p>
                  </div>
                ))}
              </div>
            </RevealBox>

            <RevealBox>
              <h2 className="text-2xl font-bold text-slate-900">Frequently asked questions</h2>
              <FAQAccordion faqs={service.faqs} className="mt-6" />
            </RevealBox>
          </div>

          {/* sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-xl bg-navy-950 p-6 text-white">
              <h2 className="text-lg font-semibold">Start with a free quote</h2>
              <p className="mt-2 text-sm text-slate-300">
                Tell us about your site and requirement — we&apos;ll respond with a tailored proposal.
              </p>
              <Button asChild className="mt-4 w-full">
                <Link to="/contact">Request a Free Quote</Link>
              </Button>
              <a
                href={company.phoneHref}
                className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-white/25 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                <Phone className="size-4" aria-hidden="true" />
                {company.phoneDisplay}
              </a>
            </div>

            <nav aria-label="Related solutions" className="rounded-xl border border-slate-200 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Related solutions</h2>
              <ul className="mt-3 space-y-2.5 text-sm">
                {related.map((r) => (
                  <li key={r.id}>
                    <Link
                      to={`/solutions/${r.slug}`}
                      className="font-medium text-slate-800 underline-offset-4 transition-colors hover:text-accent-600 hover:underline"
                    >
                      {r.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/solutions" className="text-accent-600 underline-offset-4 hover:underline">
                    All solutions →
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    </article>
  );
}
