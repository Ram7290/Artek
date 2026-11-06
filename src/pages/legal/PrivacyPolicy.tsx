import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { company } from "@/data/company";
import { TODAY } from "@/lib/strings";

/**
 * Privacy Policy — DRAFT TEMPLATE.
 * ⚠ Review with the company (and UAE PDPL requirements) before publishing.
 * Placeholders to fill: registered address, email, data-controller details.
 */
export default function PrivacyPolicy() {
  return (
    <article className="bg-mist-2 py-14 pt-32 sm:py-20">
      <div className="container-page max-w-3xl">
        <div className="[&_a]:text-slate-400 [&_span]:text-slate-400">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Privacy Policy", to: "/privacy-policy" }]} />
        </div>
        <h1 className="mt-6 text-3xl font-bold text-ink sm:text-4xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-slate-400">Last updated: {TODAY} · Draft awaiting company review</p>

        <div className="prose-slate mt-10 space-y-8 text-[15px] leading-relaxed text-slate-300">
          <section>
            <h2 className="text-xl font-semibold text-ink">1. Who we are</h2>
            <p className="mt-3">
              {company.legalName} (“ARTEK”, “we”) is an IT integrated systems company based in Dubai,
              United Arab Emirates. This policy explains how we handle personal information collected
              through this website and our services. {/* TODO(Artek): add registered address + trade licence details */}
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-ink">2. Information we collect</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li><strong>Enquiry details</strong> you submit through our forms: name, company name, email address, phone number, location and your message.</li>
              <li><strong>Usage data</strong> collected automatically (e.g. through analytics) about how visitors use the site.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-ink">3. How we use your information</h2>
            <p className="mt-3">We use enquiry details solely to respond to your request, prepare quotations and provide the services you ask for. We do not sell personal information.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-ink">4. Sharing and processing</h2>
            <p className="mt-3">
              We share information only with service providers strictly as needed to operate our
              business (e.g. hosting, communications tools), under confidentiality obligations, or
              where required by UAE law.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-ink">5. Retention and security</h2>
            <p className="mt-3">Enquiry records are retained only as long as needed for the purposes above or as required by law. We apply reasonable technical and organisational measures to protect personal data.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-ink">6. Your rights</h2>
            <p className="mt-3">
              You may request access to, correction of, or deletion of your personal information by
              contacting us at {company.phoneHref.replace("tel:", "")}. {/* TODO(Artek): add privacy contact email */}
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-ink">7. Cookies</h2>
            <p className="mt-3">
              This site uses only cookies/storage necessary for your browsing experience unless
              analytics are enabled by the company. {/* TODO(Artek): confirm analytics setup and update */}
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-ink">8. Changes</h2>
            <p className="mt-3">We may update this policy from time to time; the latest version will always be available on this page.</p>
          </section>
        </div>
      </div>
    </article>
  );
}
