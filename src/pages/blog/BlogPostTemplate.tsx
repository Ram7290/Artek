import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, List, Phone } from "lucide-react";
import { getPostBySlug, publishedPosts } from "@/data/blog";
import { getAuthor } from "@/data/authors";
import { company } from "@/data/company";
import { getServiceBySlug } from "@/data/services";
import { formatPostDate } from "@/lib/dates";
import { readingMinutes } from "@/data/blog";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQAccordion } from "@/components/common/FAQAccordion";
import { AuthorAvatar } from "@/components/blog/AuthorAvatar";
import { CoverPlate } from "@/components/blog/CoverPlate";
import { PostBody, tocOf } from "@/components/blog/PostBody";
import NotFound from "@/pages/NotFound";

/**
 * Blog article template — /blog/:slug
 * One template renders every published post; copy, metadata, JSON-LD and
 * FAQ structured data all come from src/data/blog.ts.
 */
export default function BlogPostTemplate() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <NotFound />;

  const author = getAuthor(post.authorId);
  const toc = tocOf(post.body);
  const related = publishedPosts.filter((p) => p.id !== post.id).slice(0, 3);
  const services = post.relatedServices
    .map((id) => getServiceBySlug(id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const index = publishedPosts.findIndex((p) => p.id === post.id);

  return (
    <article>
      {/* header */}
      <header className="band border-b border-white/[0.06] pb-10 pt-32 sm:pt-36">
        <div className="container-page">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Insights", to: "/blog" },
              { label: post.title, to: `/blog/${post.slug}` },
            ]}
          />
          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end lg:gap-14">
            <div>
              <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted">
                <span className="text-text">{post.category}</span>
                <span className="text-white/25" aria-hidden="true">/</span>
                <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
                <span className="text-white/25" aria-hidden="true">/</span>
                <span>{readingMinutes(post)} min read</span>
              </p>
              <h1 className="display-title mt-5 max-w-4xl text-[clamp(2rem,1.5rem+2vw,3.25rem)] text-text">
                {post.title}
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-text-muted sm:text-[17px]">
                {post.dek}
              </p>
              {author && (
                <div className="mt-7 flex items-center gap-3">
                  <AuthorAvatar author={author} className="size-10 text-xs" />
                  <div>
                    <p className="text-sm font-semibold text-text">{author.name}</p>
                    <p className="text-xs text-text-muted">{author.role}</p>
                  </div>
                </div>
              )}
            </div>
            <CoverPlate
              word={post.coverWord}
              category={`Insight ${String(index + 1).padStart(2, "0")}`}
              className="hidden lg:block"
            />
          </div>
        </div>
      </header>

      {/* body on the paper surface */}
      <div className="on-paper bg-paper text-slate-900">
        <div className="container-page py-14 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-16">
            <div className="min-w-0 max-w-[46rem]">
              <PostBody blocks={post.body} />

              {post.faqs && post.faqs.length > 0 && (
                <div className="mt-14 border-t border-slate-900/15 pt-10">
                  <h2 className="display-title text-2xl text-slate-900">Frequently asked questions</h2>
                  <FAQAccordion faqs={post.faqs} tone="paper" className="mt-5" />
                </div>
              )}

              <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-slate-900/15 pt-6 text-sm">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 font-semibold text-slate-900 hover:text-slate-600"
                >
                  <ArrowLeft className="size-4" aria-hidden="true" />
                  All insights
                </Link>
                <p className="text-slate-600">
                  Published {formatPostDate(post.publishedAt)}
                  {post.updatedAt && ` · Updated ${formatPostDate(post.updatedAt)}`}
                </p>
              </div>

              {author && (
                <div className="mt-10 flex gap-4 border border-slate-900/12 p-5">
                  <AuthorAvatar
                    author={author}
                    className="size-12 bg-slate-900/[0.06] text-sm text-slate-600 ring-slate-900/15"
                  />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{author.name}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{author.bio}</p>
                  </div>
                </div>
              )}
            </div>

            {/* sidebar */}
            <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
              {toc.length > 1 && (
                <nav aria-label="On this page">
                  <h2 className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-900">
                    <List className="size-3.5" aria-hidden="true" />
                    On this page
                  </h2>
                  <ol className="mt-4 space-y-2.5 border-t border-slate-900/15 pt-4 text-sm">
                    {toc.map((item, i) => (
                      <li key={item.id} className="flex gap-2.5">
                        <span className="font-display tabular-nums text-slate-400">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <a
                          href={`#${item.id}`}
                          className="text-slate-600 underline-offset-4 transition-colors hover:text-slate-900 hover:underline"
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              <div className="border border-slate-900/15 p-5">
                <p className="text-sm font-semibold text-slate-900">Need this done properly?</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Send the site details and our engineers will scope the work — no obligation.
                </p>
                <Link
                  to="/contact"
                  className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 text-sm font-semibold text-paper transition-colors hover:bg-black"
                >
                  Request a free quote
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </Link>
                <a
                  href={company.phoneHref}
                  className="mt-2 flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-slate-900/20 text-sm font-medium text-slate-900 transition-colors hover:border-slate-900/50"
                >
                  <Phone className="size-3.5" aria-hidden="true" />
                  {company.phoneDisplay}
                </a>
              </div>

              {services.length > 0 && (
                <nav aria-label="Related services" className="border-t border-slate-900/15 pt-5">
                  <h2 className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-900">
                    Related services
                  </h2>
                  <ul className="mt-3 space-y-2 text-sm">
                    {services.map((s) => (
                      <li key={s.id}>
                        <Link
                          to={`/solutions/${s.slug}`}
                          className="text-slate-600 underline-offset-4 transition-colors hover:text-slate-900 hover:underline"
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </aside>
          </div>
        </div>
      </div>

      {/* related reading */}
      {related.length > 0 && (
        <section className="border-t border-white/[0.06] band" aria-labelledby="related-heading">
          <div className="container-page">
            <h2 id="related-heading" className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted">
              Keep reading
            </h2>
            <ul className="mt-6 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
              {related.map((p) => (
                <li key={p.id} className="bg-surface">
                  <Link to={`/blog/${p.slug}`} className="group flex h-full flex-col gap-3 p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted">
                      {p.category}
                    </p>
                    <h3 className="display-title text-lg text-text transition-colors group-hover:text-white">
                      {p.title}
                    </h3>
                    <span className="mt-auto flex items-center gap-1.5 pt-2 text-xs text-text-muted">
                      {formatPostDate(p.publishedAt)}
                      <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </article>
  );
}
