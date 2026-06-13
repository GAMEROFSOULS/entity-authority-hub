import { useEffect, useRef } from "react";
import gsap from "gsap";
import { nodes, edges, type GraphNode } from "@/data/graphData";

/**
 * Hero entity graph. SVG primary, with a canvas fallback stub exported separately.
 * Animations:
 *   - Brand node pulses (scale + glow)
 *   - Edge pulses via stroke-dashoffset traveling outward, staggered
 * Tweak timings in TIMINGS below. Graph nodes/edges live in src/data/graphData.ts.
 */

const TIMINGS = {
  brandPulseDuration: 1.8,
  edgePulseDuration: 1.6,
  edgeStagger: 0.18,
  hoverScale: 1.08,
};

const VB = 100; // viewBox is 0..100 on both axes

function getNode(id: string): GraphNode {
  const n = nodes.find((x) => x.id === id);
  if (!n) throw new Error(`Missing node ${id}`);
  return n;
}

export function HeroGraph() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return; // static render — glow is CSS-driven

    const ctx = gsap.context(() => {
      // Brand pulse
      gsap.to("[data-brand-core]", {
        scale: TIMINGS.hoverScale,
        transformOrigin: "center",
        duration: TIMINGS.brandPulseDuration / 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to("[data-brand-halo]", {
        opacity: 0.35,
        scale: 1.2,
        transformOrigin: "center",
        duration: TIMINGS.brandPulseDuration / 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Edge pulses via stroke-dashoffset
      const edgeEls = svgRef.current!.querySelectorAll<SVGPathElement>("[data-edge]");
      edgeEls.forEach((el, i) => {
        const len = el.getTotalLength();
        el.style.strokeDasharray = `${len * 0.15} ${len}`;
        el.style.strokeDashoffset = `${len}`;
        gsap.to(el, {
          strokeDashoffset: -len * 0.15,
          duration: TIMINGS.edgePulseDuration,
          repeat: -1,
          ease: "none",
          delay: i * TIMINGS.edgeStagger,
        });
      });
    }, svgRef);

    return () => ctx.revert();
  }, []);

  const brand = getNode("brand");

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${VB} ${VB}`}
      role="img"
      aria-labelledby="hero-graph-title hero-graph-desc"
      className="w-full h-full"
    >
      <title id="hero-graph-title">Entity graph</title>
      <desc id="hero-graph-desc">
        An animated network connecting Your Brand to ChatGPT, Gemini, Claude, Perplexity, and Google
        AI Overviews.
      </desc>

      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="brandGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#5B6EF5" />
        </radialGradient>
      </defs>

      {/* Edges */}
      {edges.map((e) => {
        const a = getNode(e.from);
        const b = getNode(e.to);
        return (
          <g key={e.id}>
            <line
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="#1E2130"
              strokeWidth={0.4}
            />
            <path
              data-edge
              d={`M ${a.x} ${a.y} L ${b.x} ${b.y}`}
              stroke="#5B6EF5"
              strokeWidth={0.7}
              strokeLinecap="round"
              fill="none"
              filter="url(#glow)"
            />
          </g>
        );
      })}

      {/* AI nodes */}
      {nodes
        .filter((n) => n.type === "ai")
        .map((n) => (
          <AiNode key={n.id} node={n} />
        ))}

      {/* Brand node */}
      <g>
        <circle
          data-brand-halo
          cx={brand.x}
          cy={brand.y}
          r={7}
          fill="#5B6EF5"
          opacity={0.18}
        />
        <circle
          data-brand-core
          cx={brand.x}
          cy={brand.y}
          r={4}
          fill="url(#brandGrad)"
          filter="url(#glow)"
        />
        <text
          x={brand.x}
          y={brand.y + 11}
          textAnchor="middle"
          fontSize={3}
          fill="#F0F2FF"
          fontFamily="Inter, sans-serif"
          fontWeight={600}
        >
          {brand.label}
        </text>
      </g>
    </svg>
  );
}

function AiNode({ node }: { node: GraphNode }) {
  const ref = useRef<SVGGElement>(null);
  const handleEnter = () => {
    gsap.to(ref.current, { scale: TIMINGS.hoverScale, transformOrigin: "center", duration: 0.2 });
  };
  const handleLeave = () => {
    gsap.to(ref.current, { scale: 1, transformOrigin: "center", duration: 0.2 });
  };
  return (
    <g
      ref={ref}
      tabIndex={0}
      role="button"
      aria-label={`${node.label} citation node`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
      style={{ cursor: "pointer", transformBox: "fill-box", transformOrigin: "center" }}
    >
      <circle cx={node.x} cy={node.y} r={2.5} fill="#0F1117" stroke="#5B6EF5" strokeWidth={0.5} />
      <circle cx={node.x} cy={node.y} r={1} fill="#C7D2FE" />
      <text
        x={node.x}
        y={node.y - 4}
        textAnchor="middle"
        fontSize={2.6}
        fill="#F0F2FF"
        fontFamily="Inter, sans-serif"
      >
        {node.label}
      </text>
    </g>
  );
}

/**
 * Canvas fallback stub — wire up when a perf heuristic decides SVG is too heavy
 * (e.g., low-end device, very large graph). Mirror the visual style above.
 */
export function HeroGraphCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  // TODO: implement canvas render path with same nodes/edges + pulse
  return <canvas ref={ref} className="w-full h-full" aria-hidden />;
}
