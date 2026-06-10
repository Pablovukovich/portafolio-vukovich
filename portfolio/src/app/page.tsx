
"use client";

import Header from "@/components/secciones/header/Header";
import { SobreMi } from "@/components/secciones/aboutMe/SobreMi";
import { Skills } from "@/components/secciones/skills/Skills";
import { Proyectos } from "@/components/secciones/proyectos/Proyectos";

import { Contacto } from "@/components/secciones/contacto/Contacto";
import {
  type SectionKey,
  useSectionNavigation,
} from "@/components/section-navigation";

export default function Home() {
  const { setSectionNode } = useSectionNavigation();

  return (
    <main
      ref={(node) => setSectionNode("top", node)}
      className="mx-auto w-full max-w-6xl px-4 pb-20 pt-10 sm:pt-16"
    >
      <Header />

      <SectionLabel section="sobreMi" label="SOBRE MI" />
      <SobreMi />

      <SectionLabel
        section="skills"
        label="SKILLS"
        className="mt-16"
      />
      <Skills />

      <SectionLabel
        section="proyectos"
        label="PROYECTOS"
        className="mt-16"
      />
      <Proyectos />

      <SectionLabel
        section="contacto"
        label="CONTACTO"
        className="mt-16"
      />
      <Contacto />
    </main>
  );
}

function SectionLabel({
  section,
  label,
  className,
}: {
  section: SectionKey;
  label: string;
  className?: string;
}) {
  const { setSectionNode } = useSectionNavigation();

  return (
    <section
      ref={(node) => setSectionNode(section, node)}
      className={`mt-14 scroll-mt-28 ${className ?? ""}`.trim()}
    >
      <div className="mb-6 flex items-center justify-center">
        <div className="rounded-xl bg-[rgba(20,8,12,0.9)] px-10 py-3 text-sm font-semibold tracking-wide text-[rgba(255,255,255,0.86)] shadow-[0_16px_40px_-22px_rgba(40,10,20,0.25)]">
          {label}
        </div>
      </div>
    </section>
  );
}
