import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stages = [
  { id: "brand", label: "Brand Entity" },
  { id: "schema", label: "Structured Data" },
  { id: "citations", label: "Citations" },
  { id: "training", label: "AI Training / Inference" },
  { id: "answer", label: "AI Answer (brand cited)" },
];

export function EntityExplainer() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-stage]",
        { y: 16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: { trigger: ref.current, start: "top 90%", once: true },
        },
      );
      gsap.fromTo(
        "[data-connector]",
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left center",
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: { trigger: ref.current, start: "top 90%", once: true },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="explainer" className="px-6 py-24" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground max-w-3xl">
          How AI Systems Decide Who to Recommend
        </h2>

        <div className="mt-12 rounded-2xl border border-border bg-surface p-6 sm:p-10">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4">
            {stages.map((s, i) => (
              <div key={s.id} className="flex lg:flex-1 lg:items-center gap-4 lg:gap-3 w-full">
                <div
                  data-stage
                  className="flex-1 rounded-xl border border-border bg-background p-4 text-center"
                >
                  <p className="font-mono text-xs text-brand-indigo">{`0${i + 1}`}</p>
                  <p className="mt-2 font-display font-bold text-foreground">{s.label}</p>
                </div>
                {i < stages.length - 1 && (
                  <div
                    data-connector
                    aria-hidden
                    className="hidden lg:block h-px flex-1 bg-gradient-to-r from-brand-indigo to-brand-violet"
                    style={{ filter: "drop-shadow(0 0 6px rgba(91,110,245,0.6))" }}
                  />
                )}
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-muted-foreground leading-relaxed">
            AI systems don't crawl pages the way search engines did. They reason over entities,
            structured signals, and the citation graph that surrounds them. EntityBuild engineers
            every layer of that pipeline so the answer ends with your name.
          </p>
        </div>
      </div>
    </section>
  );
}
