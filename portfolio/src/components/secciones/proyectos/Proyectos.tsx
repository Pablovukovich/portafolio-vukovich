"use client";

import { BookOpenText, ExternalLink, FileText } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projects, type Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

export const Proyectos = () => {
  return (
    <>
      <div className="p-6 text-center text-lg font-light text-muted-foreground">
        Un conjunto de plataformas integradas que comparten datos,
        funcionalidades y una misma visión.
      </div>

      <section className="grid gap-5 md:grid-cols-2 lg:auto-rows-[17rem]">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.45,
              delay: index * 0.08,
              ease: "easeOut",
            }}
            whileHover={{ y: -6 }}
            className={project.featured ? "md:col-span-2" : ""}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.45,
            delay: projects.length * 0.08,
            ease: "easeOut",
          }}
          whileHover={{ y: -6 }}
        >
          <DocumentationCard />
        </motion.div>
      </section>
    </>
  );
};

function ProjectCard({ project }: { project: Project }) {
  const projectHref = `/proyectos/${project.slug}`;
  const documentationHref =
    project.documentationUrl ?? `${projectHref}#documentacion`;

  return (
    <Card className="relative h-full min-h-72 overflow-hidden rounded-lg border-border/40 bg-[rgba(20,8,12,0.9)] p-0 text-[rgba(255,255,255,0.82)] shadow-[0_26px_52px_-22px_rgba(40,10,20,0.3)] transition-shadow duration-300 hover:shadow-[0_32px_70px_-24px_rgba(40,10,20,0.44)]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-42 transition duration-500 group-hover/card:scale-105 group-hover/card:opacity-55"
        style={{ backgroundImage: `url(${project.image})` }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(20,8,12,0.28)_0%,rgba(20,8,12,0.72)_50%,rgba(20,8,12,0.96)_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-80 [background:radial-gradient(circle_at_50%_20%,rgba(240,166,188,0.24),transparent_62%)]" />

      <div className="relative flex h-full flex-col justify-between gap-6 p-6 sm:p-7">
        <div>
          <p className="mb-3 text-xs font-extrabold tracking-[0.34em] text-[rgba(255,255,255,0.58)]">
            PROYECTO
          </p>
          <h3 className="text-3xl font-black tracking-normal text-[rgba(240,166,188,0.94)] sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-[rgba(255,255,255,0.78)] sm:text-base">
            {project.description}
          </p>
        </div>

        <div className="space-y-5">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-[rgba(240,166,188,0.28)] bg-[rgba(255,255,255,0.08)] px-3 py-1 text-xs font-bold text-[rgba(255,255,255,0.74)] backdrop-blur"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href={projectHref}
              className={buttonVariants({
                variant: "secondary",
                className: "rounded-full",
              })}
            >
              <ExternalLink />
              Ver proyecto
            </Link>
            <Link
              href={documentationHref}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-full border-[rgba(240,166,188,0.34)] bg-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.86)] hover:bg-[rgba(255,255,255,0.16)] hover:text-white"
              )}
            >
              <FileText />
              Documentacion
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}

function DocumentationCard() {
  return (
    <Card className="relative flex h-full min-h-84 flex-col justify-between overflow-hidden rounded-3xl border-border/40 bg-[rgba(20,8,12,0.92)] p-6 text-[rgba(255,255,255,0.82)] shadow-[0_26px_52px_-22px_rgba(40,10,20,0.3)] transition-shadow duration-300 hover:shadow-[0_32px_70px_-24px_rgba(40,10,20,0.44)] sm:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(240,166,188,0.18),transparent_48%,rgba(255,255,255,0.08))]" />
      <div className="relative">
        <p className="mb-3 text-xs font-extrabold tracking-[0.34em] text-[rgba(255,255,255,0.58)]">
          RECURSOS
        </p>
        <div className="flex size-14 items-center justify-center rounded-2xl border border-[rgba(240,166,188,0.3)] bg-[rgba(255,255,255,0.08)]">
          <BookOpenText className="size-7 text-[rgba(240,166,188,0.94)]" />
        </div>
        <h3 className="mt-5 text-3xl font-black tracking-normal text-[rgba(240,166,188,0.94)] sm:text-4xl">
          Documentacion de los proyectos
        </h3>
      </div>

      <Link
        href="/proyectos/blog-knews#documentacion"
        className={cn(
          buttonVariants({ variant: "secondary" }),
          "relative w-fit rounded-full"
        )}
      >
        <FileText />
        Ver documentacion
      </Link>
    </Card>
  );
}
