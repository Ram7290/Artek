import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import type { Faq } from "@/types";
import { cn } from "@/lib/utils";

/**
 * Accessible accordion (shadcn-style) for FAQ lists — reused across pages.
 * Styled as ruled rows rather than a boxed panel, so it can sit on any band.
 * Answers use `text-text-muted` on dark bands so they stay legible; the
 * previous slate-300 answer text on near-black was both too bright and too
 * low-contrast to read as secondary copy.
 */
export function FAQAccordion({
  faqs,
  className,
  tone = "dark",
}: {
  faqs: readonly Faq[];
  className?: string;
  /** surface the accordion sits on */
  tone?: "dark" | "paper";
}) {
  if (!faqs.length) return null;
  const paper = tone === "paper";

  return (
    <Accordion.Root
      type="single"
      collapsible
      className={cn("border-t", paper ? "border-slate-900/15" : "border-white/10", className)}
    >
      {faqs.map((faq, i) => (
        <Accordion.Item
          key={i}
          value={`faq-${i}`}
          className={cn("border-b", paper ? "border-slate-900/15" : "border-white/10")}
        >
          <Accordion.Header className="flex">
            <Accordion.Trigger
              className={cn(
                "group flex flex-1 items-center justify-between gap-6 py-5 text-left text-[15px] font-semibold tracking-tight outline-none transition-colors sm:text-base",
                paper
                  ? "text-slate-900 hover:text-slate-600"
                  : "text-text hover:text-white/80",
              )}
            >
              {faq.question}
              <span
                className={cn(
                  "flex size-7 shrink-0 items-center justify-center rounded-full border transition-colors duration-200",
                  paper
                    ? "border-slate-900/20 text-slate-600 group-hover:border-slate-900/50 group-hover:text-slate-900"
                    : "border-white/15 text-text-muted group-hover:border-white/35 group-hover:text-text",
                )}
                aria-hidden="true"
              >
                <Plus className="size-3.5 transition-transform duration-300 group-data-[state=open]:rotate-45" />
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-[accordion-up_0.2s_ease-out] data-[state=open]:animate-[accordion-down_0.25s_ease-out]">
            <p
              className={cn(
                "max-w-2xl pb-6 pr-10 text-sm leading-relaxed sm:text-[15px]",
                paper ? "text-slate-600" : "text-text-muted",
              )}
            >
              {faq.answer}
            </p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
