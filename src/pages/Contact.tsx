import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/data/company";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ContactForm } from "@/components/common/ContactForm";
import { RevealBox } from "@/components/common/RevealBox";
import { getMapEmbedUrl, MAP_SHARE_URL } from "@/lib/maps";

/**
 * Map is rendered only when a verified office address exists (data/company.ts),
 * with the full address printed beneath it for copying into a sat-nav.
 */
function MapEmbed({ url, title }: { url: string; title: string }) {
  return (
    <figure>
      <iframe
        src={url}
        title={title}
        loading="lazy"
        allowFullScreen
        className="h-80 w-full rounded-xl border border-white/10"
        referrerPolicy="strict-origin-when-cross-origin"
      />
      <figcaption className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <p className="text-sm text-slate-300">{company.address}</p>
        <a
          href={MAP_SHARE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-sm font-medium text-accent-600 underline-offset-4 hover:underline"
        >
          View on map
          <span className="sr-only"> (opens Google Maps in a new tab)</span>
        </a>
      </figcaption>
    </figure>
  );
}

/** Contact page — hero, contact info, quote form, (conditional) map. */
export default function Contact() {
  const mapUrl = getMapEmbedUrl(company.address);

  return (
    <>
      {/* page header */}
      <section className="bg-navy-950 pb-14 pt-32 text-white sm:pb-16">
        <div className="container-page">
          <div className="[&_a]:text-slate-400 [&_span]:text-slate-400">
            <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact", to: "/contact" }]} />
          </div>
          <p className="mb-3 mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">Contact ARTEK</p>
          <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s discuss your IT &amp; security requirements.
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-base text-slate-300 sm:text-lg">
            Looking for CCTV installation, IT infrastructure, networking or technical support in Dubai?
            Contact ARTEK and tell us what your business needs.
          </p>
        </div>
      </section>

      <section className="bg-slate-safe py-14 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_minmax(0,1.3fr)] lg:gap-14">
          {/* contact information */}
          <RevealBox className="space-y-5">
            <div className="rounded-xl border border-white/10 bg-mist-2 p-6">
              <h2 className="text-lg font-semibold text-ink">Contact information</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent-600/10">
                    <Phone className="size-4 text-accent-600" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-medium text-ink">Phone</p>
                    <a href={company.phoneHref} className="text-accent-600 underline-offset-4 hover:underline">
                      {company.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent-600/10">
                    <Mail className="size-4 text-accent-600" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-medium text-ink">Email</p>
                    {company.email ? (
                      <div className="flex flex-col">
                        <a href={`mailto:${company.email}`} className="text-accent-600 underline-offset-4 hover:underline">
                          {company.email}
                        </a>
                        {company.salesEmail && company.salesEmail !== company.email && (
                          <a
                            href={`mailto:${company.salesEmail}`}
                            className="text-accent-600 underline-offset-4 hover:underline"
                          >
                            {company.salesEmail}
                          </a>
                        )}
                      </div>
                    ) : (
                      <span className="text-slate-400">
                        To be published — call us directly for now.
                      </span>
                    )}
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent-600/10">
                    <MapPin className="size-4 text-accent-600" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-medium text-ink">Office</p>
                    <p className="text-slate-300">{company.address ?? "Dubai, United Arab Emirates"}</p>
                  </div>
                </li>
                {company.businessHours && (
                  <li className="flex items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent-600/10">
                      <Clock className="size-4 text-accent-600" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-medium text-ink">Business hours</p>
                      <p className="text-slate-300">{company.businessHours}</p>
                    </div>
                  </li>
                )}
              </ul>
            </div>

            {company.socials.length > 0 && (
              <div className="rounded-xl border border-white/10 bg-mist-2 p-6">
                <h2 className="text-sm font-semibold text-ink">Follow us</h2>
                <ul className="mt-3 flex flex-wrap gap-3">
                  {company.socials.map((s) => (
                    <li key={s.url}>
                      <a href={s.url} target="_blank" rel="noopener" className="text-sm text-accent-600 hover:underline">
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {mapUrl && (
              <MapEmbed url={mapUrl} title={`Map showing the location of ${company.name}`} />
            )}
          </RevealBox>

          {/* quote form */}
          <RevealBox delay={100} className="rounded-xl border border-white/10 bg-mist-2 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-ink">Request a free quote</h2>
            <p className="mt-1 text-sm text-slate-300">
              Fill in the form and our team will respond with a tailored proposal.
            </p>
            <ContactForm className="mt-6" />
          </RevealBox>
        </div>
      </section>
    </>
  );
}
