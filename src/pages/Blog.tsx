import { PenLine } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { RevealBox } from "@/components/common/RevealBox";

/**
 * Blog — structural placeholder. No articles exist yet; ARTEK supplies real
 * content before launch (see README). The route stays live so the internal
 * linking structure remains intact.
 */
export default function Blog() {
  return (
    <article>
      <header className="bg-navy-950 pb-14 pt-32 text-white sm:pb-16">
        <div className="container-page">
          <div className="[&_a]:text-slate-400 [&_span]:text-slate-500">
            <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Blog", to: "/blog" }]} />
          </div>
          <h1 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl">ARTEK Blog</h1>
          <p className="mt-4 max-w-2xl text-pretty text-base text-slate-300 sm:text-lg">
            Guidance and insights on IT infrastructure, surveillance and networking for UAE businesses — coming soon.
          </p>
        </div>
      </header>
      <section className="bg-slate-safe py-16 sm:py-24">
        <div className="container-page">
          <RevealBox className="mx-auto max-w-xl rounded-xl border border-slate-200 bg-white p-10 text-center">
            <PenLine className="mx-auto size-8 text-accent-600" aria-hidden="true" />
            <h2 className="mt-4 text-lg font-semibold text-slate-900">Content is being prepared</h2>
            <p className="mt-2 text-sm text-slate-600">
              We&apos;re writing our first articles covering CCTV best practices, office network
              planning and Microsoft 365 adoption. In the meantime, our{" "}
              <Link to="/solutions" className="text-accent-600 hover:underline">solution pages</Link> and{" "}
              <Link to="/solutions/cctv-security-dubai" className="text-accent-600 hover:underline">FAQs</Link>{" "}
              answer the most common questions.
            </p>
          </RevealBox>
        </div>
      </section>
    </article>
  );
}
