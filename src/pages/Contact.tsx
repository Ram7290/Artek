import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/data/company";
import { ContactForm } from "@/components/common/ContactForm";
import { RevealBox } from "@/components/common/RevealBox";
import { getMapEmbedUrl } from "@/lib/maps";

/** Map is rendered only when a verified office address exists (data/company.ts). */
function MapEmbed({ url, title }: { url: string; title: string }) {
  return (
    <iframe
      src={url}
      title={title}
      loading="lazy"
      className="mt-1 h-80 w-full rounded-xl border border-slate-200"
      referrerPolicy="no-referrer-when-downgrade"
    />
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
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">Contact ARTEK</p>
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
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-slate-900">Contact information</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent-600/10">
                    <Phone className="size-4 text-accent-600" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-medium text-slate-900">Phone</p>
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
                    <p className="font-medium text-slate-900">Email</p>
                    {company.email ? (
                      <a href={`mailto:${company.email}`} className="text-accent-600 underline-offset-4 hover:underline">
                        {company.email}
                      </a>
                    ) : (
                      <span className="text-slate-500">
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
                    <p className="font-medium text-slate-900">Office</p>
                    <p className="text-slate-600">{company.address ?? "Dubai, United Arab Emirates"}</p>
                  </div>
                </li>
                {company.businessHours && (
                  <li className="flex items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent-600/10">
                      <Clock className="size-4 text-accent-600" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-medium text-slate-900">Business hours</p>
                      <p className="text-slate-600">{company.businessHours}</p>
                    </div>
                  </li>
                )}
              </ul>
            </div>

            {company.socials.length > 0 && (
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h2 className="text-sm font-semibold text-slate-900">Follow us</h2>
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
          <RevealBox delay={100} className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-slate-900">Request a free quote</h2>
            <p className="mt-1 text-sm text-slate-600">
              Fill in the form and our team will respond with a tailored proposal.
            </p>
            <ContactForm className="mt-6" />
          </RevealBox>
        </div>
      </section>
    </>
  );
}
