import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { RevealBox } from "@/components/common/RevealBox";
import { cn } from "@/lib/utils";
import { testimonials } from "@/data/testimonials";
import type { Testimonial } from "@/types";

/**
 * Homepage — client quotes, one at a time.
 *
 * A single featured quote with a round client portrait, plus a round-avatar
 * rail to jump between clients. No cards, stars or borders: the quote is the
 * layout, the portrait is the proof.
 *
 * ⚠ The quotes in src/data/testimonials.ts are PLACEHOLDER data. Add a square
 * `image` per entry once you have the client's permission; entries without
 * one fall back to a monogram, never a broken image.
 */
function initialsOf(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

/** Round portrait — photo when supplied, monogram otherwise. */
function Avatar({ person, className }: { person: Testimonial; className?: string }) {
  if (person.image) {
    return (
      <img
        src={person.image}
        alt=""
        loading="lazy"
        decoding="async"
        className={cn(
          "shrink-0 rounded-full object-cover grayscale ring-1 ring-white/20",
          className,
        )}
      />
    );
  }
  return (
    <span
      aria-hidden="true"
      className={cn(
        "grid shrink-0 place-items-center rounded-full bg-white/[0.06] font-display font-medium text-text-muted ring-1 ring-white/15",
        className,
      )}
    >
      {initialsOf(person.name)}
    </span>
  );
}

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [announcement, setAnnouncement] = useState("");
  const count = testimonials.length;

  if (!count) return null;

  const active = testimonials[index % count];

  const select = (next: number) => {
    const target = (next + count) % count;
    setIndex(target);
    // Only the short summary is announced — never the whole quote.
    setAnnouncement(`Testimonial ${target + 1} of ${count}: ${testimonials[target].name}`);
  };

  return (
    <section className="border-y border-white/[0.06] band" aria-labelledby="testimonials-heading">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16 xl:gap-24">
          <SectionHeading
            id="testimonials-heading"
            align="left"
            eyebrow="Client Stories"
            title="What clients say after the work is done."
            className="lg:sticky lg:top-28 lg:self-start"
          />

          <RevealBox className="min-w-0">
            <figure key={active.id} className="animate-fade-up">
              <span
                aria-hidden="true"
                className="block font-display text-6xl leading-[0.7] text-white/15"
              >
                &ldquo;
              </span>
              <blockquote
                id="testimonial-quote"
                className="mt-4 max-w-2xl text-pretty text-[clamp(1.35rem,1.05rem+1.1vw,2rem)] font-medium leading-[1.42] tracking-[-0.01em] text-text"
              >
                {active.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <Avatar person={active} className="size-16 text-lg" />
                <div>
                  <p className="text-sm font-semibold text-text">{active.name}</p>
                  <p className="mt-0.5 text-xs leading-snug text-text-muted">
                    {active.role} · {active.company}
                  </p>
                </div>
              </figcaption>
            </figure>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-6">
              <div className="flex items-center gap-2.5" role="group" aria-label="Select a testimonial">
                {testimonials.map((person, i) => {
                  const isActive = person.id === active.id;
                  return (
                    <button
                      key={person.id}
                      type="button"
                      onClick={() => select(i)}
                      aria-label={`Show testimonial from ${person.name}`}
                      aria-current={isActive ? "true" : undefined}
                      aria-controls="testimonial-quote"
                      className={cn(
                        "rounded-full transition-opacity duration-300 focus-visible:opacity-100",
                        isActive
                          ? "opacity-100 ring-2 ring-text ring-offset-2 ring-offset-surface"
                          : "opacity-40 hover:opacity-90",
                      )}
                    >
                      <Avatar person={person} className="size-9 text-[11px]" />
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => select(index - 1)}
                  aria-label="Previous testimonial"
                  aria-controls="testimonial-quote"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 text-text transition-colors hover:border-white/40 hover:bg-white/[0.04]"
                >
                  <ChevronLeft className="size-4" aria-hidden="true" />
                </button>
                <span
                  aria-hidden="true"
                  className="min-w-16 text-center font-display text-sm tabular-nums text-text-muted"
                >
                  {String((index % count) + 1).padStart(2, "0")}
                  <span className="mx-1 text-white/25">/</span>
                  {String(count).padStart(2, "0")}
                </span>
                <button
                  type="button"
                  onClick={() => select(index + 1)}
                  aria-label="Next testimonial"
                  aria-controls="testimonial-quote"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 text-text transition-colors hover:border-white/40 hover:bg-white/[0.04]"
                >
                  <ChevronRight className="size-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <p role="status" className="sr-only">
              {announcement}
            </p>
          </RevealBox>
        </div>
      </div>
    </section>
  );
}
