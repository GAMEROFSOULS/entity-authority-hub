import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { StatsSection } from "@/components/StatsSection";
import { CaseStudies } from "@/components/CaseStudies";
import { EntityExplainer } from "@/components/EntityExplainer";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EntityBuild — Make AI Systems Recommend Your Brand" },
      {
        name: "description",
        content:
          "EntityBuild engineers your digital authority so ChatGPT, Gemini, Perplexity, and Google AI cite and surface your brand — not your competitors.",
      },
      { property: "og:title", content: "EntityBuild — Make AI Systems Recommend Your Brand" },
      {
        property: "og:description",
        content:
          "Engineering the brands AI recommends. Entity engineering, GEO, AEO, schema, and citation infrastructure.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <ServicesGrid />
        <HowItWorks />
        <StatsSection />
        <CaseStudies />
        <EntityExplainer />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
