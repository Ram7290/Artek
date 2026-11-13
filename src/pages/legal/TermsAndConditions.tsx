import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { company } from "@/data/company";
import { TODAY } from "@/lib/strings";

/**
 * Terms & Conditions — DRAFT TEMPLATE.
 * ⚠ Review with the company before publishing.
 */
export default function TermsAndConditions() {
  return (
    <article className="bg-mist-2 py-14 pt-32 sm:py-20">
      <div className="container-page max-w-3xl">
        <div className="[&_a]:text-slate-400 [&_span]:text-slate-400">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Terms & Conditions", to: "/terms-and-conditions" }]} />
        </div>
        <h1 className="mt-6 text-3xl font-bold text-ink sm:text-4xl">Terms &amp; Conditions</h1>
        <p className="mt-3 text-sm text-slate-400">Last updated: {TODAY} · Draft awaiting company review</p>

        <div className="prose-slate mt-10 space-y-8 text-[15px] leading-relaxed text-slate-300">
          <section>
            <h2 className="text-xl font-semibold text-ink">1. About these terms</h2>
            <p className="mt-3">
              These terms govern the use of this website operated by {company.legalName} (“ARTEK”) and
              any quotations or services arranged through it. {/* TODO(Artek): legal review */}
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-ink">2. Website content</h2>
            <p className="mt-3">
              Content on this site is provided for general information. It does not constitute a
              binding offer; quotations issued by ARTEK govern any purchase or engagement.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-ink">3. Quotations and orders</h2>
            <p className="mt-3">
              Quotations are provided in writing and are subject to confirmation of scope,
              availability of equipment and site conditions. Any purchase or service engagement is
              governed by the quotation and applicable service agreement.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-ink">4. Intellectual property</h2>
            <p className="mt-3">All content on this site (text, design, graphics) belongs to ARTEK or its licensors and may not be reused without permission.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-ink">5. Third-party content</h2>
            <p className="mt-3">Product names and brands mentioned are the property of their respective owners and are used for identification purposes only.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-ink">6. Governing law</h2>
            <p className="mt-3">These terms are governed by the laws of the Emirate of Dubai and the applicable federal laws of the United Arab Emirates.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-ink">7. Contact</h2>
            <p className="mt-3">Questions about these terms? Call {company.phoneDisplay}.</p>
          </section>
        </div>
      </div>
    </article>
  );
}
