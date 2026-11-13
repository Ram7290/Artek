import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/data/company";
import { coreServices } from "@/data/services";
import { MAP_SHARE_URL } from "@/lib/maps";
import { Logo } from "@/components/layout/Logo";

const companyLinks = [
  { label: "About Us", to: "/about" },
  { label: "Industries", to: "/industries" },
  { label: "Service Locations", to: "/locations" },
  { label: "Contact Us", to: "/contact" },
  { label: "Insights", to: "/blog" },
];

/**
 * Site footer. Contact details render only verified information — the
 * email/address lines stay hidden until populated in data/company.ts.
 * Uses the same page field as the body: the footer is part of the page, not
 * a separate darker block, so the hairline is the only separation.
 */
export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-10 lg:py-16">
        <div className="space-y-5">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-text-muted">
            {company.heroDescription}
          </p>
        </div>

        <nav aria-label="IT Solutions">
          <h2 className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-text">
            IT Solutions
          </h2>
          <ul className="space-y-2.5 text-sm">
            {coreServices.map((s) => (
              <li key={s.slug}>
                <Link to={`/solutions/${s.slug}`} className="text-text-muted transition-colors hover:text-text">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h2 className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-text">Company</h2>
          <ul className="space-y-2.5 text-sm">
            {companyLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-text-muted transition-colors hover:text-text">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-text">Contact</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={company.phoneHref} className="flex items-center gap-2.5 text-text transition-colors hover:text-text-muted">
                <Phone className="size-4 shrink-0 text-text-muted" aria-hidden="true" />
                {company.phoneDisplay}
              </a>
            </li>
            {company.email && (
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 size-4 shrink-0 text-text-muted" aria-hidden="true" />
                <span className="flex flex-col">
                  <a href={`mailto:${company.email}`} className="text-text-muted transition-colors hover:text-text">
                    {company.email}
                  </a>
                  {company.salesEmail && company.salesEmail !== company.email && (
                    <a
                      href={`mailto:${company.salesEmail}`}
                      className="text-text-muted transition-colors hover:text-text"
                    >
                      {company.salesEmail}
                    </a>
                  )}
                </span>
              </li>
            )}
            <li>
              <a
                href={MAP_SHARE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-text-muted transition-colors hover:text-text"
              >
                <MapPin className="mt-0.5 size-4 shrink-0 text-text-muted" aria-hidden="true" />
                <span>{company.address ?? "Dubai, United Arab Emirates"}</span>
                <span className="sr-only"> (opens the place in Google Maps, new tab)</span>
              </a>
            </li>
          </ul>
          {company.socials.length > 0 && (
            <ul className="mt-5 flex gap-3">
              {company.socials.map((s) => (
                <li key={s.url}>
                  <a
                    href={s.url}
                    className="text-xs text-text-muted underline-offset-4 hover:text-text hover:underline"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
          {company.businessHours && (
            <p className="mt-5 text-xs text-text-muted">{company.businessHours}</p>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="transition-colors hover:text-text">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="transition-colors hover:text-text">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
