import { Network, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border px-6 py-16 mt-12">
      <div className="mx-auto max-w-7xl grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-display font-extrabold text-xl">
            <Network className="h-5 w-5 text-brand-indigo" aria-hidden />
            <span>
              <span className="text-brand-indigo">E</span>ntityBuild
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Engineering the brands AI recommends.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            {["Services", "About", "Blog", "Contact"].map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-foreground transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex md:justify-end items-start gap-3">
          <a
            href="#"
            aria-label="LinkedIn"
            className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-brand-indigo transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="Twitter / X"
            className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-brand-indigo transition-colors"
          >
            <Twitter className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-12 pt-6 border-t border-border text-xs text-muted-foreground">
        © 2025 EntityBuild. All rights reserved.
      </div>
    </footer>
  );
}
