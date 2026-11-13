import { Cctv, Timer, Lightbulb, MapPin } from "lucide-react";
import { company } from "@/data/company";
import { coreServices } from "@/data/services";
import { industries } from "@/data/industries";
import { RevealBox } from "@/components/common/RevealBox";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MILESTONES = [
  { icon: Timer, title: "15+ Years of Service", body: "Serving businesses and residents across the UAE technology market." },
  { icon: MapPin, title: "Dubai-Based Team", body: "Engineers and support on the ground — no overseas call centres." },
  { icon: Cctv, title: "Integrated Systems Focus", body: "IT, networking, surveillance and communication delivered as one coherent solution." },
  { icon: Lightbulb, title: "Practical Solutions", body: "Recommendations sized to the site and the workload — not showroom stock clearing." },
];

export default function About() {
  return (
    <article>
      <header className="bg-navy-950 pb-14 pt-32 text-white sm:pb-16">
        <div className="container-page">
          <div className="[&_a]:text-slate-400 [&_span]:text-slate-400">
            <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "About Us", to: "/about" }]} />
          </div>
          <h1 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            About Artek Computers LLC
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-base text-slate-300 sm:text-lg">
            A Dubai-based IT integrated systems company, providing technology solutions for customers
            from residential to corporate.
          </p>
        </div>
      </header>

      <section className="bg-mist-2 py-14 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <div className="max-w-3xl space-y-10">
            <RevealBox>
              <h2 className="text-2xl font-bold text-ink">Who we are</h2>
              <p className="mt-4 leading-relaxed text-slate-300">
                Artek Computers LLC is an IT integrated systems company based in Dubai, United Arab
                Emirates. We plan, supply, install and support complete technology environments —
                computer systems, networks, surveillance, telephony and cloud — under one accountable
                team.
              </p>
              <p className="mt-4 leading-relaxed text-slate-300">
                {/* TODO(Artek): confirm founding year and premises history before publishing */}
                Our scope covers eight core services: {coreServices.map((s) => s.title).join(", ")} —
                delivered for customers across {industries.length} industries and the UAE&apos;s
                business community.
              </p>
            </RevealBox>

            <RevealBox>
              <h2 className="text-2xl font-bold text-ink">What drives us</h2>
              <ul className="mt-6 grid gap-5 sm:grid-cols-2">
                {MILESTONES.map((m) => (
                  <li key={m.title} className="rounded-xl border border-white/10 p-5">
                    <m.icon className="size-6 text-accent-600" strokeWidth={1.75} aria-hidden="true" />
                    <h3 className="mt-3 font-semibold text-ink">{m.title}</h3>
                    <p className="mt-1.5 text-sm text-slate-300">{m.body}</p>
                  </li>
                ))}
              </ul>
            </RevealBox>

            <RevealBox>
              <h2 className="text-2xl font-bold text-ink">How we work</h2>
              <ol className="mt-6 space-y-4">
                {[
                  "Survey — we assess your site and requirement first, then quote.",
                  "Proposal — an itemised quotation with the equipment and scope of work.",
                  "Delivery — installation and configuration by our own engineers.",
                  "Support — handover, documentation and optional AMC.",
                ].map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-black">
                      {i + 1}
                    </span>
                    <p className="pt-1 text-sm text-slate-300">{step}</p>
                  </li>
                ))}
              </ol>
            </RevealBox>

            <RevealBox className="rounded-xl bg-slate-safe p-6 text-center">
              <h2 className="text-xl font-bold text-ink">Let&apos;s build something reliable together</h2>
              <p className="mt-2 text-sm text-slate-300">Talk to our team about your site and requirements.</p>
              <Button asChild className="mt-5">
                <Link to="/contact">Request a Free Quote</Link>
              </Button>
            </RevealBox>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-xl border border-white/10 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">At a glance</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-slate-400">Company</dt>
                  <dd className="font-medium text-ink">{company.legalName}</dd>
                </div>
                <div>
                  <dt className="text-slate-400">Location</dt>
                  <dd className="font-medium text-ink">{company.address ?? company.emirateOfOperation}</dd>
                </div>
                <div>
                  <dt className="text-slate-400">Phone</dt>
                  <dd className="font-medium text-ink">
                    <a href={company.phoneHref} className="text-accent-600 hover:underline">{company.phoneDisplay}</a>
                  </dd>
                </div>
                {/* <div>
                  <dt className="text-slate-400">Email</dt>
                  <dd className="font-medium text-ink">
                    {company.email && (
                      <a href={`mailto:${company.email}`} className="block text-accent-600 hover:underline">
                        {company.email}
                      </a>
                    )}
                    {company.salesEmail && company.salesEmail !== company.email && (
                      <a href={`mailto:${company.salesEmail}`} className="block text-accent-600 hover:underline">
                        {company.salesEmail}
                      </a>
                    )}
                  </dd>
                </div> */}
              </dl>
            </div>
            <div className="rounded-xl border border-white/10 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Quick links</h2>
              <ul className="mt-3 space-y-2.5 text-sm">
                <li><Link to="/solutions" className="text-slate-200 hover:text-accent-600">Our solutions</Link></li>
                <li><Link to="/industries" className="text-slate-200 hover:text-accent-600">Industries</Link></li>
                <li><Link to="/locations" className="text-slate-200 hover:text-accent-600">Service locations</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </article>
  );
}
