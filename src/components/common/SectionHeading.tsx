import { cn } from "@/lib/utils";

/**
 * Section heading.
 *
 * `tone` describes the SURFACE the heading sits on, not the colour of the
 * text — passing the wrong one is what produced flat, low-contrast copy on
 * dark bands before. Only the title uses the display serif; the eyebrow and
 * description stay in the grotesk so the serif keeps its job.
 */
const TONE = {
  dark: {
    eyebrow: "text-text-muted",
    title: "text-text",
    description: "text-text-muted",
    rule: "bg-white/15",
  },
  paper: {
    eyebrow: "text-slate-600",
    title: "text-slate-900",
    description: "text-slate-600",
    rule: "bg-slate-900/15",
  },
} as const;

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
  className,
  as: Tag = "h2",
  id,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  /** surface the heading sits on — "dark" (site default) or "paper" */
  tone?: keyof typeof TONE;
  className?: string;
  as?: "h1" | "h2";
  id?: string;
}) {
  const t = TONE[tone];
  const centred = align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl",
        centred ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] sm:text-xs",
            t.eyebrow,
            centred && "justify-center",
          )}
        >
          {centred && <span className={cn("h-px w-6", t.rule)} aria-hidden="true" />}
          {eyebrow}
          {centred && <span className={cn("h-px w-6", t.rule)} aria-hidden="true" />}
        </p>
      )}
      <Tag
        id={id}
        className={cn(
          "display-title mt-4 text-[clamp(1.85rem,1.35rem+1.6vw,2.9rem)]",
          t.title,
        )}
      >
        {title}
      </Tag>
      {description && (
        <p
          className={cn(
            "mt-4 text-pretty text-base leading-relaxed sm:text-[17px]",
            t.description,
            centred && "mx-auto max-w-2xl",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
