import { Button } from "@/components/ui/brand-button";
import { HeroGraph } from "@/components/HeroGraph";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background ambient gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 20% 20%, rgba(91,110,245,0.18), transparent 70%), radial-gradient(45% 40% at 90% 80%, rgba(167,139,250,0.12), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <p className="font-mono text-xs text-muted-foreground mb-6">
            // ai_visibility.engineered
          </p>
          <h1 className="font-display font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.05] text-foreground">
            Make AI Systems{" "}
            <span className="bg-gradient-to-r from-brand-indigo to-brand-violet bg-clip-text text-transparent">
              Recommend Your Brand
            </span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            EntityBuild engineers your digital authority so ChatGPT, Gemini, Perplexity, and Google
            AI cite and surface your brand — not your competitors.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a href="#audit">Get Your AI Visibility Audit</a>
            </Button>
            <Button variant="ghostBrand" asChild>
              <a href="#how">See How It Works</a>
            </Button>
          </div>
          <p className="mt-8 text-xs uppercase tracking-[0.15em] text-muted-foreground">
            Cited across ChatGPT · Gemini · Perplexity · Google AI Overviews · Claude
          </p>
        </div>

        <div className="relative aspect-square w-full max-w-xl mx-auto">
          <div
            aria-hidden
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at center, rgba(91,110,245,0.15), transparent 65%)",
            }}
          />
          <HeroGraph />
        </div>
      </div>
    </section>
  );
}
