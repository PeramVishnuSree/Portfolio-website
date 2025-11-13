"use client";

import { useMemo, useState } from "react";
import {
  Project,
  ProjectDiscipline,
  disciplineLabels,
  statusLabels,
} from "@/data/projects";
import { cn } from "@/lib/utils";
import { ProjectCard } from "@/components/project-card";

type FilterKey = "all" | ProjectDiscipline | "deployed";

const filterOptions: { id: FilterKey; label: string; description: string }[] =
  [
    {
      id: "all",
      label: "All",
      description: "Every featured build and experiment.",
    },
    {
      id: "full-stack",
      label: disciplineLabels["full-stack"],
      description: "Product work, platforms, and web experiences.",
    },
    {
      id: "machine-learning",
      label: disciplineLabels["machine-learning"],
      description: "ML systems, research, and applied AI.",
    },
    {
      id: "deployed",
      label: statusLabels.deployed,
      description: "Shipped products with live demos.",
    },
  ];

type ProjectGalleryProps = {
  projects: Project[];
};

export function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filteredProjects = useMemo(() => {
    const sorted = [...projects].sort((a, b) => b.year - a.year);
    if (activeFilter === "all") return sorted;
    if (activeFilter === "deployed") {
      return sorted.filter((project) => project.status === "deployed");
    }
    return sorted.filter((project) =>
      project.disciplines.includes(activeFilter),
    );
  }, [activeFilter, projects]);

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap items-center gap-3">
        {filterOptions.map((option) => {
          const isActive = activeFilter === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => setActiveFilter(option.id)}
              className={cn(
                "relative rounded-full border px-4 py-2 text-sm font-medium transition-all",
                {
                  "border-transparent bg-[#111827] text-white shadow-lg shadow-slate-500/20":
                    isActive,
                  "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900":
                    !isActive,
                },
              )}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <p className="text-sm text-slate-500">
        {filterOptions.find((option) => option.id === activeFilter)?.description}
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}

