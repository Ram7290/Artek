import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CheckCircle2, Building2 } from "lucide-react";
import { getIndustryBySlug } from "@/data/industries";
import { coreServices } from "@/data/services";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { RevealBox } from "@/components/common/RevealBox";
import { ArrowCTA } from "@/components/common/CTAButton";
import { Button } from "@/components/ui/button";
import NotFound from "@/pages/NotFound";

const ICONS = {
  "building-2": Building2,
} as Record<string, typeof Building2>;

/** Industry landing page template — /industries/:slug */
export default function IndustryTemplate() {
  const { slug } = useParams<{ slug: string }>();
  const industry = slug ? getIndustryBySlug(slug) : undefined;

  useEffect(() => {
    if (industry) document.title = industry.seo.title;
  }, [industry]);

  if (!industry) return <NotFound />;

  const related = industry.relatedServices
    .map((id) => coreServices.find((s) => s.id === id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const Icon = ICONS[industry.icon] ?? Building2;

  return (
    <article>
      <header className="bg-navy-950 pb-14 pt-32 text-white sm:pb-16">
        <div className="container-page">
          <div className="[&_a]:text-slate-400 [&_span]:text-slate-400">
            <Breadcrumbs
              items={[
                { label: "Home", to: "/" },
                { label: "Industries", to: "/industries" },
                { label: industry.name, to: `/industries/${industry.slug}` },
              ]}
            />
          </div>
          <h1 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            {industry.name}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-base text-slate-300 sm:text-lg">{industry.description}</p>
          <Button asChild size="lg" className="mt-7">
            <Link to="/contact">Request a Free Quote</Link>
          </Button>
        </div>
      </header>

      <div className="bg-mist-2 py-14 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <div className="max-w-3xl space-y-10">
            <RevealBox>
              <Icon className="size-9 text-accent-600" strokeWidth={1.5} aria-hidden="true" />
              <h2 className="mt-4 text-2xl font-bold text-ink">How we support {industry.name.toLowerCase()}</h2>
              <p className="mt-4 leading-relaxed text-slate-300">{industry.description}</p>
              <ul className="mt-6 space-y-3">
                {industry.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-slate-300">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent-600" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </RevealBox>
            <RevealBox>
              <h2 className="text-2xl font-bold text-ink">Solutions for {industry.name.toLowerCase()}</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {related.map((s) => (
                  <Link
                    key={s.id}
                    to={`/solutions/${s.slug}`}
                    className="rounded-xl border border-white/10 p-5 transition-colors hover:border-accent-600/50"
                  >
                    <h3 className="font-semibold text-ink">{s.title}</h3>
                    <p className="mt-1.5 text-sm text-slate-300">{s.shortDescription.slice(0, 90)}…</p>
                  </Link>
                ))}
              </div>
            </RevealBox>
          </div>
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-xl bg-navy-950 p-6 text-white">
              <h2 className="text-lg font-semibold">Plan a {industry.name.toLowerCase()} project</h2>
              <p className="mt-2 text-sm text-slate-300">Site survey included — tell us about your requirement.</p>
              <Button asChild className="mt-4 w-full">
                <Link to="/contact">Request a Free Quote</Link>
              </Button>
            </div>
            <div className="rounded-xl border border-white/10 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Quick links</h2>
              <ul className="mt-3 space-y-2.5 text-sm">
                <li><Link to="/solutions" className="text-slate-200 hover:text-accent-600">All solutions</Link></li>
                <li><Link to="/locations" className="text-slate-200 hover:text-accent-600">Service locations</Link></li>
                <li><Link to="/products" className="text-slate-200 hover:text-accent-600">Products</Link></li>
                <li><ArrowCTA to="/contact">Contact us</ArrowCTA></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
