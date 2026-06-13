import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrandCard } from "@/components/ui/brand-card";
import { services } from "@/data/services";

gsap.registerPlugin(ScrollTrigger);

export function ServicesGrid() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-service-card]",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: { trigger: ref.current, start: "top 90%", once: true },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="px-6 py-24" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs text-muted-foreground">// entity_build_services</p>
        <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground max-w-3xl">
          The Infrastructure Behind AI Visibility
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ title, description, Icon }) => (
            <BrandCard key={title} data-service-card className="p-6">
              <div className="relative">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-brand-indigo/10 border border-brand-indigo/30 text-brand-indigo">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display font-bold text-lg text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </BrandCard>
          ))}
        </div>
      </div>
    </section>
  );
}
