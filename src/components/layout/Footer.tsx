import { Link } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";
import { company } from "@/data/company";
import { coreServices } from "@/data/services";
import { Logo } from "@/components/layout/Logo";

const companyLinks = [
  { label: "About Us", to: "/about" },
  { label: "Industries", to: "/industries" },
  { label: "Service Locations", to: "/locations" },
  { label: "Contact Us", to: "/contact" },
  { label: "Blog", to: "/blog" },
];

/**
 * Site footer. Contact details render only verified information — the
 * email/address lines stay hidden until populated in data/company.ts.
 */
export function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="space-y-4">
          <Logo />
          <p className="text-sm leading-relaxed text-slate-400">
            {company.heroDescription}
          </p>
        </div>

        <nav aria-label="IT Solutions">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">IT Solutions</h3>
          <ul className="space-y-2.5 text-sm">
            {coreServices.map((s) => (
              <li key={s.slug}>
                <Link to={`/solutions/${s.slug}`} className="text-slate-400 transition-colors hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
          <ul className="space-y-2.5 text-sm">
            {companyLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-slate-400 transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={company.phoneHref} className="flex items-center gap-2.5 text-slate-300 transition-colors hover:text-white">
                <Phone className="size-4 shrink-0 text-accent-400" aria-hidden="true" />
                {company.phoneDisplay}
              </a>
            </li>
            {company.email && (
              <li>
                <a href={`mailto:${company.email}`} className="text-slate-400 transition-colors hover:text-white">
                  {company.email}
                </a>
              </li>
            )}
            {company.address && (
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent-400" aria-hidden="true" />
                <span className="text-slate-400">{company.address}</span>
              </li>
            )}
            {!company.address && (
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent-400" aria-hidden="true" />
                <span className="text-slate-400">Dubai, United Arab Emirates</span>
              </li>
            )}
          </ul>
          {company.socials.length > 0 && (
            <ul className="mt-5 flex gap-3">
              {company.socials.map((s) => (
                <li key={s.url}>
                  <a href={s.url} className="text-xs text-slate-400 underline-offset-4 hover:text-white hover:underline" rel=" noopener" target="_blank">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="transition-colors hover:text-white">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="transition-colors hover:text-white">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
