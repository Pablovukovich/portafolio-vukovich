"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useSectionNavigation } from "@/components/section-navigation";


export default function Header() {
  const { scrollToSection } = useSectionNavigation();

  return (
    <section className="relative overflow-hidden rounded-3xl px-4 py-12 sm:px-10 sm:py-16 ">
        <div className="pointer-events-none absolute inset-0 opacity-80 [background:radial-gradient(900px_420px_at_25%_15%,rgba(255,255,255,0.9),transparent_60%),radial-gradient(800px_420px_at_80%_20%,rgba(140,52,78,0.24),transparent_62%)] dark:hidden" />
        <div className="pointer-events-none absolute inset-0 hidden opacity-85 dark:block " />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-4 text-xs font-extrabold tracking-[0.28em] text-muted-foreground">
              DEVELOPER
            </p>
            <h1 className="font-display mb-2 text-5xl leading-[0.92] font-bold tracking-tight sm:text-7xl">
              PABLO VUKOVICH
            </h1>
            <p className="mb-7 max-w-xl text-base font-semibold text-muted-foreground sm:text-lg">
              Full stack Developer. Productos con foco.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                className="rounded-full px-6"
                onClick={() => scrollToSection("proyectos")}
              >
                Ver proyectos
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-6"
                onClick={() => scrollToSection("contacto")}
              >
                Contacto
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-muted-foreground">
              <a href="https://www.linkedin.com/in/pablo-vukovich/" target="_blank">
                <Badge variant="secondary" className="rounded-full px-3 py-1">
                  LinkedIn
                </Badge>
              </a>

              <a href="https://github.com/Pablovukovich" target="_blank">
              <Badge variant="secondary" className="rounded-full px-3 py-1">
                GitHub
              </Badge>

              </a>
              <Badge variant="secondary" className="rounded-full px-3 py-1">
                Descargar CV
              </Badge>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -right-6 -top-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(140,52,78,0.22),transparent_66%)] blur-sm sm:-right-10 sm:-top-12 sm:h-72 sm:w-72 dark:bg-[radial-gradient(circle,rgba(240,166,188,0.18),transparent_66%)]" />
            <div className="pointer-events-none absolute -bottom-10 -left-12 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.8),transparent_66%)] blur-sm sm:-bottom-14 sm:h-72 sm:w-72 dark:bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_66%)]" />
            <div className="relative h-full w-full ">
              <img
                src="/logo-def-1.png"
                alt="logo"
                className="h-full w-full  object-cover object-top  opacity-0 animate-logo 
             hover:scale-105 transition-transform duration-300"
                
              />
            </div>
          </div>
        </div>
      </section>
  )
}

