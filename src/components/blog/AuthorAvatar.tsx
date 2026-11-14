import { cn } from "@/lib/utils";
import type { Author } from "@/types";

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

/** Round author portrait — photo when supplied, monogram otherwise. */
export function AuthorAvatar({
  author,
  className,
}: {
  author: Author;
  className?: string;
}) {
  if (author.image) {
    return (
      <img
        src={author.image}
        alt=""
        loading="lazy"
        decoding="async"
        className={cn("shrink-0 rounded-full object-cover ring-1 ring-white/20", className)}
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
      {initials(author.name)}
    </span>
  );
}
