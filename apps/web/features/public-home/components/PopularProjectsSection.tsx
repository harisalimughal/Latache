"use client";

import { SectionHeader } from "@/components/motion/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { usePopularProjects } from "../hooks/usePopularProjects";
import { ProjectCard } from "./ProjectCard";
import { useTranslations } from "next-intl";

export function PopularProjectsSection() {
  const { data: projects, isPending, isError } = usePopularProjects();
  const t = useTranslations("projects");

  return (
    <section className="relative bg-background py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title={t("title")}
          titleClassName="font-display font-normal uppercase text-[#501B0E]"
          titleStyle={{
            fontSize: "clamp(32px, 3.5vw, 48px)",
            lineHeight: "134%",
            letterSpacing: "2px",
          }}
        />

        {isPending && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="rounded-2xl bg-muted animate-pulse h-56" />
            ))}
          </div>
        )}

        {isError && (
          <p className="text-center py-12 text-gray-500">
            Failed to load projects. Please try again later.
          </p>
        )}

        {!isPending && !isError && projects && projects.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {projects.map((project, i) => (
              <Reveal key={project.id} delay={i * 50}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
