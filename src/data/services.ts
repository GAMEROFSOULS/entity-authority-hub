import {
  Network,
  Sparkles,
  MessageSquareQuote,
  Code2,
  Quote,
  FileCode,
  type LucideIcon,
} from "lucide-react";

export type Service = { title: string; description: string; Icon: LucideIcon };

export const services: Service[] = [
  {
    title: "Entity Engineering",
    description: "Build structured identity networks that AI models understand and trust",
    Icon: Network,
  },
  {
    title: "GEO (Generative Engine Optimization)",
    description: "Optimize content to appear in AI-generated answers",
    Icon: Sparkles,
  },
  {
    title: "AEO (Answer Engine Optimization)",
    description: "Structure your brand to answer queries AI systems are asked",
    Icon: MessageSquareQuote,
  },
  {
    title: "Schema & Structured Data",
    description: "Implement machine-readable markup across your digital presence",
    Icon: Code2,
  },
  {
    title: "Citation Ecosystem Building",
    description:
      "Create the web of references that makes AI systems confident in recommending you",
    Icon: Quote,
  },
  {
    title: "AI-Readable Content Architecture",
    description: "Design semantic content systems built for how LLMs parse meaning",
    Icon: FileCode,
  },
];
