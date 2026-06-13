import { Button } from "@/components/ui/brand-button";

export function CtaSection() {
  return (
    <section id="audit" className="px-6 py-24">
      <div
        className="mx-auto max-w-7xl rounded-3xl overflow-hidden relative p-10 sm:p-16 text-center"
        style={{
          background:
            "linear-gradient(135deg, #5B6EF5 0%, #A78BFA 100%)",
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4), transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.25), transparent 50%)",
          }}
        />
        <div className="relative">
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white">
            Is Your Brand Invisible to AI?
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-white/90 text-lg leading-relaxed">
            Get a free AI Visibility Audit — we'll show you exactly where you stand across ChatGPT,
            Gemini, Perplexity, and Google AI.
          </p>
          <div className="mt-10">
            <Button
              variant="default"
              size="lg"
              className="bg-white text-background hover:bg-white/90 font-semibold"
            >
              Book Your Free Audit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
