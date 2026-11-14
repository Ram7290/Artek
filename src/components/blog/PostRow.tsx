import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { getAuthor } from "@/data/authors";
import { readingMinutes } from "@/data/blog";
import { formatPostDate } from "@/lib/dates";
import { cn } from "@/lib/utils";
import { AuthorAvatar } from "@/components/blog/AuthorAvatar";
import { CoverPlate } from "@/components/blog/CoverPlate";
import type { BlogPost } from "@/types";

/**
 * Article link as a ruled editorial row — no card, no shadow. The date and
 * category sit in a narrow left column, the title and standfirst in the body,
 * and the sequence numeral closes the row. Hover lifts the title and reveals
 * the arrow, matching WhyChooseArtek's list language.
 */
export function PostRow({ post, index }: { post: BlogPost; index: number }) {
  const author = getAuthor(post.authorId);

  return (
    <li>
      <Link
        to={`/blog/${post.slug}`}
        className="group grid gap-x-8 gap-y-3 py-7 sm:grid-cols-[8.5rem_minmax(0,1fr)_auto] sm:items-start sm:py-8"
      >
        <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted sm:block">
          <time dateTime={post.publishedAt} className="block tabular-nums">
            {formatPostDate(post.publishedAt)}
          </time>
          <span className="text-white/25 sm:mt-1.5 sm:block">{post.category}</span>
        </div>

        <div className="min-w-0">
          <h3 className="display-title text-[clamp(1.3rem,1.1rem+0.7vw,1.7rem)] text-text transition-colors duration-300 group-hover:text-white">
            {post.title}
          </h3>
          <p className="mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-text-muted sm:text-[15px]">
            {post.dek}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-text-muted">
            {author && (
              <span className="flex items-center gap-2">
                <AuthorAvatar author={author} className="size-5 text-[8px]" />
                {author.name}
              </span>
            )}
            <span className="text-white/20" aria-hidden="true">
              ·
            </span>
            <span>{readingMinutes(post)} min read</span>
          </div>
        </div>

        <div className="hidden items-center gap-4 self-start pt-1 sm:flex">
          <span
            aria-hidden="true"
            className="font-display text-sm tabular-nums text-white/25 transition-colors group-hover:text-text-muted"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-full border border-white/15 text-text-muted transition-all duration-300 group-hover:border-white/40 group-hover:text-text"
          >
            <ArrowUpRight className="size-4" />
          </span>
        </div>
      </Link>
    </li>
  );
}

/** Large featured article — cover plate beside the headline. */
export function FeaturedPost({ post }: { post: BlogPost }) {
  const author = getAuthor(post.authorId);

  return (
    <Link
      to={`/blog/${post.slug}`}
      className={cn(
        "group grid gap-8 border-b border-white/10 pb-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-14",
      )}
    >
      <CoverPlate word={post.coverWord} category={post.category} index="01" />
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted">
          Featured · {post.category}
        </p>
        <h2 className="display-title mt-4 text-[clamp(1.75rem,1.3rem+1.6vw,2.6rem)] text-text">
          {post.title}
        </h2>
        <p className="mt-4 max-w-xl text-pretty text-[15px] leading-relaxed text-text-muted sm:text-base">
          {post.dek}
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-3 text-xs text-text-muted">
          {author && (
            <span className="flex items-center gap-2">
              <AuthorAvatar author={author} className="size-7 text-[10px]" />
              {author.name}
            </span>
          )}
          <span className="text-white/20" aria-hidden="true">
            ·
          </span>
          <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
          <span className="text-white/20" aria-hidden="true">
            ·
          </span>
          <span>{readingMinutes(post)} min read</span>
        </div>
        <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-text">
          Read the article
          <ArrowUpRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
