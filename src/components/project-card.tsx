import Image from "next/image";

import { ArrowUpRight, Github, Globe } from "lucide-react";

import type { Project } from "@/data/projects";

const statusCopy: Record<Project["status"], { label: string; tone: string }> = {
  deployed: {
    label: "Deployed",
    tone: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  },
  "in-progress": {
    label: "In Progress",
    tone: "bg-amber-50 text-amber-700 ring-amber-200",
  },
  upcoming: {
    label: "Upcoming",
    tone: "bg-slate-100 text-slate-600 ring-slate-200",
  },
};

export function ProjectCard({ project }: { project: Project }) {
  const status = statusCopy[project.status];

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 w-full overflow-hidden border-b border-slate-100 bg-slate-950/90">
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover transition duration-500 group-hover:scale-105"
            priority={project.featured}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 text-slate-200">
            <span className="text-lg font-semibold">{project.title}</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-6 p-7">
        <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-slate-500">
          <span>{project.category}</span>
          <span className="rounded-full bg-slate-200/60 px-3 py-1 font-semibold tracking-[0.2em] text-slate-600">
            {project.year}
          </span>
          <span
            className={`rounded-full px-3 py-1 text-[10px] tracking-[0.3em] ring-1 ring-inset ${status.tone}`}
          >
            {status.label}
          </span>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-slate-900">
            {project.title}
          </h3>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500">
            {project.tagline}
          </p>
          <p className="text-base leading-7 text-slate-600">
            {project.description}
          </p>
        </div>
        <ul className="space-y-2">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-3 text-sm leading-6 text-slate-600"
            >
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap gap-3 pt-4">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-700"
            >
              <Globe className="h-4 w-4" />
              <span>View live</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : null}
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white"
            >
              <Github className="h-4 w-4" />
              <span>Source</span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
