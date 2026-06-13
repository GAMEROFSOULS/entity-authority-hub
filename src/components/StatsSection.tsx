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
      gsap.fromTo(
        "[data-stat]",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: { trigger: ref.current, start: "top 90%", once: true },
        },
      );
      gsap.fromTo(
        "[data-testimonial]",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: { trigger: "[data-testimonial]", start: "top 88%", once: true },
        },
      );
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

        <figure
          data-testimonial
          className="relative mt-16 max-w-4xl rounded-2xl border border-brand-indigo/30 bg-background/60 p-8 sm:p-10 overflow-hidden"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(60% 80% at 0% 0%, rgba(91,110,245,0.18), transparent 70%), radial-gradient(50% 80% at 100% 100%, rgba(167,139,250,0.15), transparent 70%)",
            }}
          />
          <div className="relative">
            <span
              aria-hidden
              className="font-display font-extrabold text-7xl leading-none text-brand-indigo/40"
            >
              “
            </span>
            <blockquote className="-mt-4">
              <p className="font-display text-xl lg:text-2xl text-foreground leading-snug">
                Within a quarter of working with EntityBuild, our brand started appearing in ChatGPT
                answers for category-defining queries. It changed the inbound game entirely.
              </p>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-indigo to-brand-violet" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Head of Growth</p>
                  <p className="text-xs text-muted-foreground">B2B SaaS · in-progress engagement</p>
                </div>
              </figcaption>
            </blockquote>
          </div>
        </figure>
      </div>
    </section>
  );
}
