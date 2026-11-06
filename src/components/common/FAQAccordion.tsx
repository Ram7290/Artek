import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import type { Faq } from "@/types";
import { cn } from "@/lib/utils";

/** Accessible accordion (shadcn-style) for FAQ lists — reused across pages. */
export function FAQAccordion({
  faqs,
  className,
  dark = false,
}: {
  faqs: readonly Faq[];
  className?: string;
  dark?: boolean;
}) {
  if (!faqs.length) return null;
  return (
    <Accordion.Root
      type="single"
      collapsible
      className={cn(
        "divide-y overflow-hidden rounded-xl border divide-white/10",
        dark ? "border-white/10 divide-white/10" : "border-white/10 divide-white/10",
        className,
      )}
    >
      {faqs.map((faq, i) => (
        <Accordion.Item key={i} value={`faq-${i}`}>
          <Accordion.Header className="flex">
            <Accordion.Trigger
              className={cn(
                "group flex flex-1 items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-medium outline-none transition-colors sm:px-6",
                dark
                  ? "text-white hover:bg-white/10"
                  : "text-ink hover:bg-white/10",
              )}
            >
              {faq.question}
              <ChevronDown
                className={cn(
                  "size-4 shrink-0 text-slate-400 transition-transform duration-200 group-data-[state=open]:rotate-180",
                  dark ? "text-slate-400" : "text-slate-400",
                )}
                aria-hidden="true"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-[accordion-up_0.2s_ease-out] data-[state=open]:animate-[accordion-down_0.25s_ease-out]">
            <p
              className={cn(
                "px-5 pb-5 text-sm leading-relaxed sm:px-6",
                dark ? "text-slate-300" : "text-slate-300",
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
