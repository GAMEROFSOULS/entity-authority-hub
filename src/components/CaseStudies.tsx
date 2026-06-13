import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Case = {
  client: string;
  industry: string;
  metric: string;
  metricLabel: string;
  summary: string;
  quote: string;
  author: string;
};

const cases: Case[] = [
  {
    client: "Northwind Analytics",
    industry: "B2B SaaS · Data Infrastructure",
    metric: "12×",
    metricLabel: "increase in AI citations across ChatGPT & Perplexity in 90 days",
    summary:
      "Re-architected entity graph, deployed schema across 240 product pages, and seeded category citations.",
    quote:
      "We went from invisible to being the default answer when AI tools are asked about real-time analytics.",
    author: "VP Marketing, Northwind Analytics",
  },
  {
    client: "Helio Health",
    industry: "Healthcare · Patient Acquisition",
    metric: "0 → 47",
    metricLabel: "branded mentions across Google AI Overviews & Gemini",
    summary:
      "Built medically-reviewed answer architecture, citation network, and Organization knowledge graph.",
    quote:
      "EntityBuild gave us infrastructure no agency had ever offered — AI is now a real acquisition channel.",
    author: "Head of Growth, Helio Health",
  },
  {
    client: "Forge Capital",
    industry: "Financial Services · Advisory",
    metric: "+38%",
    metricLabel: "inbound qualified leads attributed to AI-driven discovery",
    summary:
      "Established authority entities for partners, layered structured data, and monitored citation drift weekly.",
    quote:
      "Prospects show up already pre-sold because the AI told them we were the firm to talk to.",
    author: "Managing Partner, Forge Capital",
  },
];

export function CaseStudies() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-case]",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
        },
      );
      gsap.fromTo(
        "[data-case-metric]",
        { scale: 0.85, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.6)",
          immediateRender: false,
          scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="cases" className="px-6 py-24 scroll-mt-20" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="font-mono text-xs text-brand-indigo">// proof_of_visibility</p>
            <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground max-w-3xl">
              Case Studies
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              Brands engineered into the answers AI gives. Real outcomes from real engagements.
            </p>
          </div>
          <a
            href="#audit"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-indigo hover:text-brand-violet transition-colors"
          >
            See if your brand qualifies <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {cases.map((c) => (
            <article
              key={c.client}
              data-case
              className="group relative rounded-2xl border border-border bg-surface p-6 overflow-hidden transition-all duration-300 hover:border-brand-indigo/60 hover:-translate-y-1 hover:shadow-[0_30px_80px_-30px_rgb(91_110_245_/_0.45)]"
            >
              <div
                aria-hidden
                className="absolute -top-20 -right-20 h-48 w-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(circle, rgba(167,139,250,0.25), transparent 70%)",
                }}
              />
              <div className="relative">
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {c.industry}
                </p>
                <h3 className="mt-1 font-display font-bold text-xl text-foreground">
                  {c.client}
                </h3>

                <div
                  data-case-metric
                  className="mt-6 inline-block"
                >
                  <span className="font-display font-extrabold text-5xl lg:text-6xl bg-gradient-to-br from-brand-indigo to-brand-violet bg-clip-text text-transparent leading-none">
                    {c.metric}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {c.metricLabel}
                </p>

                <p className="mt-6 text-sm text-foreground/80 leading-relaxed">{c.summary}</p>

                <div className="mt-6 pt-6 border-t border-border">
                  <Quote className="h-4 w-4 text-brand-indigo" aria-hidden />
                  <p className="mt-2 text-sm italic text-foreground/90 leading-relaxed">
                    “{c.quote}”
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground">— {c.author}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
