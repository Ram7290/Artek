import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  function Input({ className, ...props }, ref) {
    return (
      <input
        ref={ref}
        className={cn(
          "h-11 w-full rounded-lg border border-white/20 bg-mist-2 px-3.5 text-sm text-ink placeholder:text-slate-400 transition-colors focus:border-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-600/20 disabled:opacity-50",
          className,
        )}
        {...props}
      />
    );
  },
);

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
  function Textarea({ className, ...props }, ref) {
    return (
      <textarea
        ref={ref}
        className={cn(
          "min-h-[7rem] w-full rounded-lg border border-white/20 bg-mist-2 px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-400 transition-colors focus:border-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-600/20 disabled:opacity-50",
          className,
        )}
        {...props}
      />
    );
  },
);
