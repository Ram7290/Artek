import { cn } from "@/lib/utils";

/** Inline form/message banner (shadcn has no canonical Alert; this follows the same tokens). */
function Alert({
  tone = "default",
  className,
  ...props
}: React.ComponentProps<"div"> & { tone?: "default" | "destructive" }) {
  return (
    <div
      role="alert"
      data-slot="alert"
      className={cn(
        "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg]:size-4 [&>svg]:translate-y-0.5",
        tone === "destructive"
          ? "border-destructive/30 bg-destructive/5 text-destructive"
          : "bg-card text-foreground",
        className,
      )}
      {...props}
    />
  );
}

export { Alert };
