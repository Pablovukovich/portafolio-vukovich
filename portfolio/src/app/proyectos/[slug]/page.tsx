import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  CheckCircle2,
  ExternalLink,
  FileText,
  Layers,
  Rocket,
  Server,
  Sparkles,
} from "lucide-react";
import { notFound } from "next/navigation";

import { BackToProjectsButton } from "@/components/back-to-projects-button";
import { buttonVariants } from "@/components/ui/button";
import { getProjectBySlug, projects, type Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado",
    };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-[calc(100vh-9rem)] w-full max-w-6xl px-4 py-10 sm:py-14">
      <BackToProjectsButton />

      <section className="grid min-h-[72vh] overflow-hidden rounded-lg border border-border/50 bg-card/72 shadow-[0_28px_70px_-34px_rgba(40,10,20,0.42)] backdrop-blur md:grid-cols-[0.9fr_1.1fr]">
        <ProjectVisual project={project} />
        <ProjectContent project={project} />
      </section>
    </main>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  const projectHref = project.projectUrl ?? `/proyectos/${project.slug}`;
  const documentationHref =
    project.documentationUrl ?? `/proyectos/${project.slug}#documentacion`;

  return (
    <aside className="relative min-h-88 overflow-hidden bg-[rgba(20,8,12,0.94)] md:min-h-full">
      <Image
        src={project.image}
        alt={`Vista previa de ${project.title}`}
        fill
        priority
        sizes="(min-width: 768px) 45vw, 100vw"
        className="object-cover opacity-70 transition duration-700 hover:scale-[1.03] hover:blur-[1px]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,8,12,0.2)_0%,rgba(20,8,12,0.62)_58%,rgba(20,8,12,0.94)_100%)]" />
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={projectHref}
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "rounded-full shadow-[0_18px_38px_-18px_rgba(0,0,0,0.8)]"
            )}
          >
            <ExternalLink />
            Ver proyecto
          </Link>
          <Link
            href={documentationHref}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-full border-[rgba(240,166,188,0.34)] bg-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.9)] shadow-[0_18px_38px_-18px_rgba(0,0,0,0.8)] backdrop-blur hover:bg-[rgba(255,255,255,0.18)] hover:text-white"
            )}
          >
            <FileText />
            Documentacion
          </Link>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <span className="inline-flex items-center gap-2 rounded-lg border border-[rgba(240,166,188,0.28)] bg-[rgba(255,255,255,0.1)] px-3 py-2 text-xs font-bold uppercase text-[rgba(255,255,255,0.78)] backdrop-blur">
          <Sparkles className="size-4" />
          Proyecto destacado
        </span>
        <h1 className="mt-4 font-display text-5xl font-black text-[rgba(240,166,188,0.96)] sm:text-6xl">
          {project.title}
        </h1>
      </div>
    </aside>
  );
}

function ProjectContent({ project }: { project: Project }) {
  return (
    <div className="max-h-none overflow-y-auto px-5 py-6 sm:px-8 sm:py-8 md:max-h-[72vh]">
      <SectionTitle icon={<Layers className="size-5" />} title="Descripción" />
      <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
        {project.description}
      </p>

      <SectionTitle
        className="mt-8"
        icon={<CheckCircle2 className="size-5" />}
        title="Características principales"
      />
      <div className="mt-4 grid gap-3">
        {project.features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-lg border border-border/60 bg-background/55 p-4"
          >
            <h2 className="text-sm font-extrabold text-primary">
              {feature.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {feature.description}
            </p>
          </article>
        ))}
      </div>

      <SectionTitle
        className="mt-8"
        icon={<Server className="size-5" />}
        title="Tecnologías utilizadas"
      />
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <TechnologyGroup
          title="Frontend"
          technologies={project.details.frontend}
        />
        <TechnologyGroup title="Backend" technologies={project.details.backend} />
      </div>

      <SectionTitle
        className="mt-8"
        icon={<Rocket className="size-5" />}
        title="Documentacion"
      />
      <div id="documentacion" className="scroll-mt-24">
        <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
          {project.details.objective}
        </p>
      </div>
    </div>
  );
}

function SectionTitle({
  title,
  icon,
  className,
}: {
  title: string;
  icon: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 border-b border-border/70 pb-3",
        className
      )}
    >
      <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        {icon}
      </span>
      <h2 className="text-lg font-black uppercase text-foreground">{title}</h2>
    </div>
  );
}

function TechnologyGroup({
  title,
  technologies,
}: {
  title: string;
  technologies: string[];
}) {
  return (
    <div className="rounded-lg border border-border/60 bg-background/55 p-4">
      <h3 className="text-sm font-extrabold text-primary">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-lg border border-[rgba(240,166,188,0.32)] bg-[rgba(240,166,188,0.13)] px-3 py-1.5 text-xs font-bold text-foreground"
          >
            {technology}
          </span>
        ))}
      </div>
    </div>
  );
}
