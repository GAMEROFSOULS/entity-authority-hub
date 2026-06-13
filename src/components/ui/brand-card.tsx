import * as React from "react";
import { Card as ShadCard } from "@/components/ui/card";
import { cn } from "@/lib/utils";

/**
 * EntityBuild Card — wraps shadcn Card with the dark surface treatment:
 * subtle border, surface bg, and an indigo hover outline + violet gradient accent.
 */
export const BrandCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { interactive?: boolean }
>(({ className, interactive = true, children, ...props }, ref) => {
  return (
    <ShadCard
      ref={ref}
      className={cn(
        "relative bg-surface border border-border rounded-xl overflow-hidden",
        interactive &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-brand-indigo/60 hover:shadow-[0_20px_60px_-20px_rgb(91_110_245_/_0.35)]",
        "before:content-[''] before:absolute before:inset-0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:pointer-events-none before:bg-[radial-gradient(circle_at_top_right,rgb(167_139_250_/_0.12),transparent_60%)]",
        className,
      )}
      {...props}
    >
      {children}
    </ShadCard>
  );
});
BrandCard.displayName = "BrandCard";
