import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-6xl px-6 pb-24 pt-10 md:pt-16"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
            Capabilities
          </p>
          <h2 className="text-3xl font-semibold leading-snug text-slate-900 md:text-4xl">
            From product discovery to production readiness—with an eye on data.
          </h2>
          <p className="text-base leading-7 text-slate-600">
            I help teams shape product experiences, set quality bars, and build
            the systems and ML models that carry them to production. My toolkit
            blends dependable delivery with curiosity for new research.
          </p>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              How I work
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>• Product-first discovery and technical roadmapping</li>
              <li>• Pragmatic experiments with measurable outcomes</li>
              <li>• Strong developer experience and documentation hygiene</li>
            </ul>
          </div>
        </div>
        <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-[var(--shadow-soft)] sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                {group.title}
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                {group.items.map((item) => (
                  <li key={item} className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

