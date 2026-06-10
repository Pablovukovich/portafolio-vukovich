"use client";

import { useSectionNavigation } from "./section-navigation";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const { scrollToSection } = useSectionNavigation();

  return (
    <footer className="mt-20 border-t border-border/40 bg-background/40 px-4 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 text-center text-sm sm:flex-row sm:text-left">
        <p className="m-0 font-medium">Pablo Vukovich</p>
        <button
          type="button"
          onClick={() => scrollToSection("top")}
          className="text-xs font-semibold tracking-wide"
        >
          Volver arriba
        </button>
      </div>
      <p className="mx-auto mt-4 w-full max-w-6xl text-center text-xs text-muted-foreground">
        &copy; {year} Portfolio
      </p>
    </footer>
  );
}
