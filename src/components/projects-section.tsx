"use client";

import { useMemo, useState } from "react";

import {
  projectFilters,
  projects,
  type Project,
  type ProjectFilterId,
} from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

const filterProject = (id: ProjectFilterId, project: Project) => {
  switch (id) {
    case "full-stack":
      return project.category === "Full Stack";
    case "machine-learning":
      return project.category === "Machine Learning";
    case "deployed":
      return project.status === "deployed";
    default:
      return true;
  }
};

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterId>("all");

  const filteredProjects = useMemo(() => {
    return projects
      .filter((project) => filterProject(activeFilter, project))
      .sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return Number(b.year) - Number(a.year);
      });
  }, [activeFilter]);

  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-6 pb-24">
      <div className="flex flex-col gap-4 pb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
          Featured Work
        </p>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl text-3xl font-semibold leading-snug text-slate-900 md:text-4xl">
            A spectrum of shipping: from production-ready platforms to active
            ML experiments.
          </h2>
          <div className="flex flex-wrap gap-2">
            {projectFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`rounded-full border px-4 py-2 text-xs font-medium tracking-[0.2em] transition ${
                  activeFilter === filter.id
                    ? "border-slate-900 bg-slate-900 text-white shadow-lg shadow-slate-900/10"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      {filteredProjects.length ? (
        <div className="grid gap-8 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-[var(--shadow-soft)]">
          <p className="text-base font-medium text-slate-600">
            More work is in flight—check back soon.
          </p>
        </div>
      )}
    </section>
  );
}

