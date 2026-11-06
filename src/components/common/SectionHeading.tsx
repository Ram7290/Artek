import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-xl font-semibold uppercase tracking-[0.18em]",
            dark ? "text-accent-400" : "text-accent-600",
          )}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        className={cn(
          "text-balance text-3xl font-bold tracking-tight sm:text-4xl",
          dark ? "text-white" : "text-slate-900",
        )}
      >
        {title}
      </Tag>
      {description && (
        <p className={cn("mt-4 text-pretty text-base leading-relaxed sm:text-lg", dark ? "text-slate-300" : "text-slate-600")}>
          {description}
        </p>
      )}
    </div>
  );
}
