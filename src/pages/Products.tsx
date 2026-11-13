import { Monitor, Cctv, Network, Phone, Server, Mouse, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { productCategories } from "@/data/industries";
import { SectionHeading } from "@/components/common/SectionHeading";
import { RevealBox } from "@/components/common/RevealBox";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ArrowCTA } from "@/components/common/CTAButton";
import { Button } from "@/components/ui/button";

const ICONS: Record<string, React.ComponentType<React.ComponentProps<"svg">>> = {
  monitor: Monitor,
  cctv: Cctv,
  network: Network,
  phone: Phone,
  server: Server,
  mouse: Mouse,
};

/**
 * Products page. Catalogue-style categories without fabricated SKUs,
 * prices or specs — every item line stays honest and configurable via
 * data/industries.ts → productCategories.
 */
export default function Products() {
  return (
    <article>
      <header className="bg-navy-950 pb-14 pt-32 text-white sm:pb-16">
        <div className="container-page">
          <div className="[&_a]:text-slate-400 [&_span]:text-slate-400">
            <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Products", to: "/products" }]} />
          </div>
          <h1 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl">IT Products We Supply</h1>
          <p className="mt-4 max-w-2xl text-pretty text-base text-slate-300 sm:text-lg">
            Computer systems, surveillance, networking and telephony hardware — supplied, configured
            and supported by the ARTEK team. Availability changes with current supplier stock;
            request a quotation for your requirement.
          </p>
          <Button asChild size="lg" className="mt-7">
            <Link to="/contact">Request a Quotation</Link>
          </Button>
        </div>
      </header>

      <section className="bg-slate-safe py-14 sm:py-20">
        <div className="container-page">
          <SectionHeading
            align="left"
            title="Product categories"
            description="All products listed are supplied subject to availability — quotations confirm brands, models and pricing."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((cat, i) => {
              const Icon = ICONS[cat.icon] ?? Monitor;
              return (
                <RevealBox as="li" key={cat.slug} delay={(i % 3) * 70}>
                  <div className="flex h-full flex-col rounded-xl border border-white/10 bg-mist-2 p-6">
                    <span className="flex size-11 items-center justify-center rounded-lg bg-accent-600/10">
                      <Icon className="size-5 text-accent-600" aria-hidden="true" />
                    </span>
                    <h2 className="mt-4 text-lg font-semibold text-ink">{cat.name}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">{cat.description}</p>
                    <ul className="mt-4 flex-1 space-y-1.5">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                          <span className="size-1.5 rounded-full bg-accent-400" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealBox>
              );
            })}
          </ul>

          <div className="mt-12 rounded-xl border border-white/10 bg-mist-2 p-6 text-center sm:p-10">
            <h2 className="text-xl font-bold text-ink">Need a specific model or a bulk order?</h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-slate-300">
              Tell us the requirement — a single device or a full office rollout — and we&apos;ll quote
              it properly. Everything we supply can be installed and supported by the same team.
            </p>
            <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/contact">Request a Quotation</Link>
              </Button>
              <ArrowCTA to="/solutions" className="self-center px-2 py-3">Browse solutions instead</ArrowCTA>
            </div>
            <p className="mt-6 flex items-center justify-center gap-1.5 text-xs text-slate-400">
              <ExternalLink className="size-3.5" aria-hidden="true" />
              Model availability and specifications are confirmed per quotation — never shown publicly as placeholder specs.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
