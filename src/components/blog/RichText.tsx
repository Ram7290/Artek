import { Fragment, type ReactNode } from "react";
import { Link } from "react-router-dom";

/**
 * Minimal inline formatting for typed article copy: `**bold**` and
 * `[label](/internal/path)`. Deliberately not a Markdown parser — article
 * body content is typed data (see src/data/blog.ts), so this only has to
 * cover the two marks authors actually use.
 */
const INLINE = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

export function RichText({ text }: { text: string }) {
  const parts = text.split(INLINE).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-slate-900">
              {part.slice(2, -2)}
            </strong>
          );
        }
        const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
        if (link) {
          const [, label, href] = link as unknown as [string, string, string];
          return (
            <Link
              key={i}
              to={href}
              className="font-medium text-slate-900 underline decoration-slate-900/30 decoration-1 underline-offset-[3px] transition-colors hover:decoration-slate-900"
            >
              {label}
            </Link>
          );
        }
        return <Fragment key={i}>{part as ReactNode}</Fragment>;
      })}
    </>
  );
}
