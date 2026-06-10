"use client";

import { useSectionNavigation, type SectionKey } from "./section-navigation";

const navItems = [
  { label: "Sobre Mi", section: "sobreMi" },
  { label: "Skills", section: "skills" },
  { label: "Proyectos", section: "proyectos" },
  { label: "Contacto", section: "contacto" },
] as const satisfies ReadonlyArray<{ label: string; section: SectionKey }>;

export function SiteNav() {
  const { scrollToSection } = useSectionNavigation();

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-4">
        <button
          type="button"
          onClick={() => scrollToSection("top")}
          className="flex items-center gap-2 no-underline"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-sm font-semibold shadow-sm">
            PV
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:inline">
            Portfolio
          </span>
        </button>

        <div className="flex items-center gap-4 text-sm font-medium">
          {navItems.map((item) => (
            <button
              key={item.section}
              type="button"
              onClick={() => scrollToSection(item.section)}
              className="nav-link"
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
