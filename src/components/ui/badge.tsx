import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border text-xs font-semibold transition-colors [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        brand: "border-brand-200 bg-brand-50 text-brand-700",
        outline: "border-ink-200 bg-white text-foreground/80",
        muted: "border-ink-150 bg-ink-100 text-muted-foreground",
        success: "border-emerald-200 bg-emerald-50 text-emerald-700",
        warning: "border-amber-200 bg-amber-50 text-amber-700",
      },
      size: {
        default: "px-3 py-1",
        sm: "px-2.5 py-0.5 text-[11px]",
      },
    },
    defaultVariants: {
      variant: "brand",
      size: "default",
    },
  }
);

function Badge({
  className,
  variant,
  size,
  uppercase = true,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { uppercase?: boolean }) {
  return (
    <span
      data-slot="badge"
      className={cn(
        badgeVariants({ variant, size }),
        uppercase && "uppercase tracking-[0.12em]",
        className
      )}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
