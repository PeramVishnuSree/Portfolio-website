import { experiences } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-24 pt-12 md:pt-16">
      <div className="flex flex-col gap-4 pb-12">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
          Experience
        </p>
        <h2 className="max-w-3xl text-3xl font-semibold leading-snug text-slate-900 md:text-4xl">
          Shipping alongside product teams, founders, and researchers.
        </h2>
      </div>
      <div className="space-y-6">
        {experiences.map((experience) => (
          <article
            key={experience.company}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {experience.role}
                </h3>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                  {experience.company}
                </p>
              </div>
              <p className="text-sm font-medium text-slate-500">
                {experience.period}
              </p>
            </div>
            <p className="pb-4 text-base leading-7 text-slate-600">
              {experience.summary}
            </p>
            <ul className="space-y-3 text-sm leading-6 text-slate-600">
              {experience.wins.map((win) => (
                <li key={win} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                  <span>{win}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

