import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * Button — one radius, one height per size, one accent (paper white).
 *
 * Variants are named by SURFACE, so a button on a light band uses the
 * `paper*` variants rather than having its colours patched at the call site.
 * The light-surface variants carry `.on-paper` focus handling via the parent.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold transition-[background-color,border-color,color,box-shadow] duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        /* primary — paper white on dark surfaces */
        default: "bg-paper text-surface hover:bg-white",
        /* secondary — hairline outline on dark surfaces */
        outline:
          "border border-white/20 bg-transparent text-text hover:border-white/45 hover:bg-white/[0.04]",
        /* for use inside `.on-paper` bands */
        paper: "bg-surface text-paper hover:bg-[#1D1D20]",
        paperOutline:
          "border border-slate-900/20 text-slate-900 hover:border-slate-900/45 hover:bg-slate-900/[0.04]",
        ghost: "text-text-muted hover:text-text",
        link: "text-text underline-offset-4 hover:underline rounded-none",
      },
      size: {
        default: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-[15px] sm:px-7",
        sm: "h-9 px-3.5 text-sm",
        icon: "size-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { buttonVariants };
