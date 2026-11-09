import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { RevealBox } from "@/components/common/RevealBox";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

const VISIBLE_AT_ONCE = { base: 1, lg: 3 } as const;

/**
 * Homepage testimonials — paged carousel of client quotes.
 * Dummy data lives in src/data/testimonials.ts; swap in real quotes later.
 * Controls: prev/next buttons + dot pagination; pauses-free, CSS-free paging
 * so it stays robust under SSR/prerender.
 */
export function TestimonialsSection() {
  const perPage = VISIBLE_AT_ONCE.lg;
  const pageCount = Math.max(1, Math.ceil(testimonials.length / perPage));
  const [page, setPage] = useState(0);

  const go = (dir: 1 | -1) => setPage((p) => (p + dir + pageCount) % pageCount);

  // widen grid to page-sized slices so the visible set stays stable
  const start = page * perPage;
  const visible = testimonials.slice(start, start + perPage);

  return (
    <section
      className="border-y border-white/5 bg-mist-2 py-16 sm:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Client Stories"
          title="What Our Clients Say"
          description="Real feedback from businesses and homeowners across Dubai and the UAE."
        />

        <div className="relative mt-12">
          <ul
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
            aria-live="polite"
            aria-label={`Testimonials, page ${page + 1} of ${pageCount}`}
          >
            {visible.map((t, i) => (
              <RevealBox as="li" key={t.id} delay={(i % 3) * 90}>
                <figure className="group flex h-full flex-col rounded-2xl border border-white/10 bg-mist p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-card-hover sm:p-7">
                  <Quote
                    className="size-7 text-white/20 transition-colors duration-300 group-hover:text-white/40"
                    aria-hidden="true"
                  />
                  <div
                    className="mt-3 flex items-center gap-0.5"
                    role="img"
                    aria-label={`Rated ${t.rating} out of 5 stars`}
                  >
                    {Array.from({ length: 5 }, (_, s) => (
                      <Star
                        key={s}
                        className={cn(
                          "size-4",
                          s < t.rating ? "fill-amber-400 text-amber-400" : "text-white/20",
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/85">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-5 border-t border-white/10 pt-4">
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="mt-0.5 text-xs leading-snug text-slate-400">
                      {t.role} · {t.company}
                    </p>
                  </figcaption>
                </figure>
              </RevealBox>
            ))}
          </ul>

          {pageCount > 1 && (
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonials"
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 bg-mist text-ink transition-colors hover:border-white/40 hover:bg-mist-2"
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
              </button>
              <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial pages">
                {Array.from({ length: pageCount }, (_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === page}
                    aria-label={`Go to testimonials page ${i + 1}`}
                    onClick={() => setPage(i)}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      i === page ? "w-7 bg-white" : "w-2 bg-white/25 hover:bg-white/50",
                    )}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonials"
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 bg-mist text-ink transition-colors hover:border-white/40 hover:bg-mist-2"
              >
                <ChevronRight className="size-5" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
