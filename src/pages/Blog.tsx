import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FeaturedPost, PostRow } from "@/components/blog/PostRow";
import { publishedPosts, categoriesOf } from "@/data/blog";
import { cn } from "@/lib/utils";

/**
 * Insights index — /blog
 *
 * Editorial layout rather than a card grid: one featured story, a textual
 * category filter, and every article as a ruled row. Unfiltered rows stay in
 * the DOM (`hidden`) so crawlers still see every link; the section is a
 * plain list, so hiding items never removes content from the markup.
 */
export default function Blog() {
  const categories = useMemo(() => ["All", ...categoriesOf(publishedPosts)], []);
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? publishedPosts : publishedPosts.filter((p) => p.category === active);
  const featured = publishedPosts.find((p) => p.featured);
  const rest = filtered.filter((p) => p.id !== featured?.id);

  return (
    <article>
      <header className="bg-navy-950 pb-14 pt-32 text-white sm:pb-16">
        <div className="container-page">
          <div className="[&_a]:text-slate-400 [&_span]:text-slate-400">
            <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Insights", to: "/blog" }]} />
          </div>
          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              as="h1"
              align="left"
              eyebrow="Insights"
              title="Field notes from the engineers."
              description="Compliance, networks, hardware and support — written for the decisions UAE businesses actually make, without the sales pitch."
            />
            <p className="shrink-0 text-xs uppercase tracking-[0.18em] text-slate-400">
              {publishedPosts.length} articles
            </p>
          </div>
        </div>
      </header>

      <div className="bg-mist-2 py-14 sm:py-20">
        <div className="container-page">
          {featured && active === "All" && (
            <div className="mb-14">
              <FeaturedPost post={featured} />
            </div>
          )}

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter articles by category">
              {categories.map((c) => {
                const isActive = c === active;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setActive(c)}
                    aria-pressed={isActive}
                    className={cn(
                      "rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors",
                      isActive
                        ? "border-text bg-text text-surface"
                        : "border-white/15 text-text-muted hover:border-white/40 hover:text-text",
                    )}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
            <p role="status" className="text-xs text-text-muted">
              {filtered.length} {filtered.length === 1 ? "article" : "articles"}
              {active !== "All" && ` in ${active}`}
            </p>
          </div>

          {rest.length > 0 ? (
            <ul className="mt-6 border-t border-white/10">
              {rest.map((post, i) => (
                <li key={post.id} className="border-b border-white/10">
                  <PostRow post={post} index={i} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-10 border-t border-white/10 pt-10 text-sm text-text-muted">
              No other articles in this category yet — the featured article above is the one to read.
            </p>
          )}
        </div>
      </div>

      <section className="border-t border-white/[0.06] bg-slate-safe py-14 sm:py-20" aria-labelledby="blog-cta-heading">
        <div className="container-page flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <SectionHeading
            id="blog-cta-heading"
            align="left"
            eyebrow="Need this for your building?"
            title="Have a project in front of you?"
            description="Send us the site details and our engineers will scope it — no obligation."
          />
          <Link
            to="/contact"
            className="group inline-flex h-12 shrink-0 items-center gap-2 rounded-lg bg-paper px-6 text-sm font-semibold text-surface transition-colors hover:bg-white"
          >
            Request a free quote
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </article>
  );
}
