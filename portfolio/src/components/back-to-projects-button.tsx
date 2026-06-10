"use client";

import { ArrowLeft } from "lucide-react";

import { useSectionNavigation } from "./section-navigation";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export function BackToProjectsButton() {
  const { scrollToSection } = useSectionNavigation();

  return (
    <button
      type="button"
      onClick={() => scrollToSection("proyectos")}
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "mb-6 text-muted-foreground hover:text-foreground",
      )}
    >
      <ArrowLeft />
      Volver a proyectos
    </button>
  );
}
