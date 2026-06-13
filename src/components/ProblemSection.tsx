import { ArrowRight } from "lucide-react";

export function ProblemSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-border bg-surface p-8 sm:p-12 lg:p-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground max-w-3xl">
            Search rankings are no longer enough.
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-8 lg:gap-16">
            <p className="text-lg text-foreground/90 leading-relaxed">
              AI is replacing traditional search as the discovery layer.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Invisible to AI answers, losing trust signals, competitors getting cited instead.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-border bg-background/60 p-6">
              <p className="font-mono text-xs text-muted-foreground">// then</p>
              <p className="mt-3 font-display font-bold text-xl text-foreground">
                Searchable on Google
              </p>
              <div className="mt-4 h-1 w-12 rounded bg-border" />
            </div>
            <div className="rounded-xl border border-brand-indigo/40 bg-background/60 p-6 relative overflow-hidden">
              <div
                aria-hidden
                className="absolute inset-0 opacity-60"
                style={{
                  background:
                    "radial-gradient(60% 80% at 100% 0%, rgba(91,110,245,0.18), transparent 70%)",
                }}
              />
              <div className="relative">
                <p className="font-mono text-xs text-brand-indigo flex items-center gap-2">
                  <ArrowRight className="h-3 w-3" /> // now
                </p>
                <p className="mt-3 font-display font-bold text-xl text-foreground">
                  Recommended by AI
                </p>
                <div className="mt-4 h-1 w-20 rounded bg-gradient-to-r from-brand-indigo to-brand-violet" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
