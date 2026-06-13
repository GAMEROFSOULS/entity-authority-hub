import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, Map, Hammer, LineChart, type LucideIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Step = { title: string; description: string; Icon: LucideIcon };

const steps: Step[] = [
  {
    title: "Entity Audit",
    description: "Discover how (or if) AI systems currently perceive your brand",
    Icon: Search,
  },
  {
    title: "Authority Architecture",
    description: "Map the citation network, schema needs, and content gaps",
    Icon: Map,
  },
  {
    title: "Infrastructure Build",
    description: "Deploy entity signals, structured data, and AI-readable assets",
    Icon: Hammer,
  },
  {
    title: "Visibility Monitoring",
    description: "Track citations, recommendations, and presence across AI engines",
    Icon: LineChart,
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-step]",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.12,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: { trigger: ref.current, start: "top 90%", once: true },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="how" className="px-6 py-24" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground max-w-3xl">
          From Unknown to AI-Recommended
        </h2>

        <ol className="mt-16 relative grid gap-8 md:grid-cols-4">
          {/* Horizontal connector */}
          <div
            aria-hidden
            className="hidden md:block absolute top-5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-indigo/40 to-transparent"
          />
          {steps.map((s, i) => (
            <li key={s.title} data-step className="relative">
              <div className="flex md:flex-col items-start md:items-center gap-4 md:gap-0 md:text-center">
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-brand-indigo/40 bg-background text-brand-indigo">
                  <span className="font-mono text-sm">0{i + 1}</span>
                </div>
                <div className="md:mt-5">
                  <div className="md:flex md:justify-center text-brand-violet">
                    <s.Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-2 font-display font-bold text-lg text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed max-w-xs md:mx-auto">
                    {s.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
