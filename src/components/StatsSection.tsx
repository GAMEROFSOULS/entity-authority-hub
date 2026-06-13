import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "62%", label: "of consumers now use AI for product discovery" },
  { value: "0 citations", label: "what most brands have in AI answers today" },
  { value: "3–6 months", label: "typical time to establish AI entity presence" },
];

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-stat]", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="why" className="px-6 py-24" ref={ref}>
      <div className="mx-auto max-w-7xl rounded-2xl border border-border bg-surface p-8 sm:p-12 lg:p-16">
        <div className="grid gap-10 md:grid-cols-3">
          {stats.map((s) => (
            <div key={s.value} data-stat>
              <p className="font-display font-extrabold text-5xl lg:text-6xl bg-gradient-to-br from-foreground to-brand-violet bg-clip-text text-transparent leading-none">
                {s.value}
              </p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <blockquote className="mt-16 border-l-2 border-brand-indigo pl-6 max-w-3xl">
          <p className="font-display text-xl lg:text-2xl text-foreground leading-snug">
            “Within a quarter of working with EntityBuild, our brand started appearing in ChatGPT
            answers for category-defining queries. It changed the inbound game entirely.”
          </p>
          <footer className="mt-4 text-sm text-muted-foreground">
            {/* TODO: replace with real testimonial */}
            — Head of Growth, B2B SaaS (in-progress engagement)
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
