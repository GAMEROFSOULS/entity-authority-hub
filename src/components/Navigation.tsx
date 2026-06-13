import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Network } from "lucide-react";
import gsap from "gsap";
import { Button } from "@/components/ui/brand-button";
import { cn } from "@/lib/utils";

const links = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how" },
  { label: "Why AI Visibility", href: "#why" },
  { label: "Case Studies", href: "#cases" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // GSAP mobile menu open/close
  useEffect(() => {
    if (!mobileRef.current) return;
    const items = mobileRef.current.querySelectorAll("[data-mobile-item]");
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (open) {
      gsap.set(mobileRef.current, { display: "flex" });
      gsap.fromTo(
        mobileRef.current,
        { autoAlpha: 0, y: -8 },
        { autoAlpha: 1, y: 0, duration: prefersReduced ? 0 : 0.25, ease: "power2.out" },
      );
      gsap.fromTo(
        items,
        { autoAlpha: 0, y: 8 },
        {
          autoAlpha: 1,
          y: 0,
          duration: prefersReduced ? 0 : 0.3,
          stagger: prefersReduced ? 0 : 0.05,
          ease: "power2.out",
          delay: prefersReduced ? 0 : 0.05,
        },
      );
    } else {
      gsap.to(mobileRef.current, {
        autoAlpha: 0,
        duration: 0.15,
        onComplete: () => gsap.set(mobileRef.current, { display: "none" }),
      });
    }
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
      >
        <Link to="/" className="flex items-center gap-2 font-display font-extrabold text-xl">
          <Network className="h-5 w-5 text-brand-indigo" aria-hidden />
          <span>
            <span className="text-brand-indigo">E</span>ntityBuild
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-foreground transition-colors focus-visible:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button size="default" asChild>
            <a href="#audit">Get an AI Visibility Audit</a>
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden p-2 text-foreground"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        ref={mobileRef}
        style={{ display: "none" }}
        className="md:hidden flex-col gap-2 border-t border-border bg-background/95 backdrop-blur-xl px-6 py-6"
      >
        {links.map((l) => (
          <a
            key={l.href}
            data-mobile-item
            href={l.href}
            onClick={() => setOpen(false)}
            className="block py-2 text-base text-foreground/90 hover:text-brand-indigo"
          >
            {l.label}
          </a>
        ))}
        <div data-mobile-item className="pt-2">
          <Button className="w-full" asChild>
            <a href="#audit" onClick={() => setOpen(false)}>
              Get an AI Visibility Audit
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
