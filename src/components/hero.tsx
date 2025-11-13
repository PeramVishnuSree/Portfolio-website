import Link from "next/link";

export function Hero() {
  return (
    <section
      id="about"
      className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-20 pt-24 sm:pt-28"
    >
      <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
        Full Stack · ML Engineering
      </p>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)] lg:items-start">
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
            Shipping thoughtful products that make complex systems feel simple.
          </h1>
          <p className="text-lg leading-8 text-slate-600">
            I&apos;m Vishnu, a product-minded engineer blending full stack craft
            with applied machine learning. I help teams design reliable,
            observable systems from the first commit through the nth
            iteration—whether we&apos;re launching a new product or scaling one
            that’s already loved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#projects"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-700 hover:shadow-xl"
            >
              View featured work
            </Link>
            <a
              href="mailto:vishnu@example.com"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white"
            >
              <span>Book a call</span>
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[var(--shadow-soft)]">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Currently
          </h2>
          <div className="mt-4 space-y-5 text-sm text-slate-600">
            <div>
              <p className="font-semibold text-slate-800">
                Building Atlas Launchpad
              </p>
              <p>Helping teams ship with confidence using curated DevOps flows.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-800">Exploring agent ops</p>
              <p>Designing evaluation loops for production LLM workflows.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-800">Open for collaboration</p>
              <p>Ideal fits: product infra, ML developer experience, data tooling.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

