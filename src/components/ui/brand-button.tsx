import * as React from "react";
import { Button as ShadButton, type ButtonProps as ShadButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * EntityBuild Button — wraps the shadcn/Radix primitive (our "21.dev" baseline)
 * with brand-specific variants. Use `variant="brand"` for the primary indigo CTA
 * and `variant="ghostBrand"` for the secondary outline CTA.
 */
export type ButtonProps = Omit<ShadButtonProps, "variant"> & {
  variant?: ShadButtonProps["variant"] | "brand" | "ghostBrand";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "brand", className, size = "lg", ...props }, ref) => {
    if (variant === "brand") {
      return (
        <ShadButton
          ref={ref}
          size={size}
          variant="default"
          className={cn(
            "bg-brand-indigo text-foreground font-semibold shadow-[0_8px_30px_-12px_rgb(91_110_245_/_0.6)] hover:bg-brand-indigo/90 hover:-translate-y-0.5 transition-all",
            className,
          )}
          {...props}
        />
      );
    }
    if (variant === "ghostBrand") {
      return (
        <ShadButton
          ref={ref}
          size={size}
          variant="outline"
          className={cn(
            "bg-transparent border-border text-foreground hover:bg-surface hover:border-brand-indigo",
            className,
          )}
          {...props}
        />
      );
    }
    return <ShadButton ref={ref} size={size} variant={variant} className={className} {...props} />;
  },
);
Button.displayName = "EBButton";
