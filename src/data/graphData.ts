// Hero entity graph data. Tweak node positions (0–100 viewBox %) to restyle.
export type GraphNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  type: "brand" | "ai";
};

export type GraphEdge = { from: string; to: string; id: string };

export const nodes: GraphNode[] = [
  { id: "brand", label: "Your Brand", x: 50, y: 50, type: "brand" },
  { id: "chatgpt", label: "ChatGPT", x: 12, y: 22, type: "ai" },
  { id: "gemini", label: "Gemini", x: 88, y: 22, type: "ai" },
  { id: "claude", label: "Claude", x: 8, y: 78, type: "ai" },
  { id: "perplexity", label: "Perplexity", x: 92, y: 78, type: "ai" },
  { id: "googleaio", label: "Google AIO", x: 50, y: 8, type: "ai" },
];

export const edges: GraphEdge[] = [
  { id: "e1", from: "brand", to: "chatgpt" },
  { id: "e2", from: "brand", to: "gemini" },
  { id: "e3", from: "brand", to: "claude" },
  { id: "e4", from: "brand", to: "perplexity" },
  { id: "e5", from: "brand", to: "googleaio" },
];
