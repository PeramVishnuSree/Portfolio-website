import { Github, Linkedin, Mail, X as XLogo } from "lucide-react";

const socials = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:vishnusree416@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vishnu-sree-peram/",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/PeramVishnuSree",
  },
  {
    icon: XLogo,
    label: "X",
    href: "https://x.com/vishnu",
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-6xl px-6 pb-24 pt-12 md:pt-16"
    >
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 px-8 py-14 shadow-[var(--shadow-soft)] md:px-12">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
              Let&apos;s collaborate
            </p>
            <h2 className="text-3xl font-semibold leading-snug text-slate-900 md:text-4xl">
              Building something ambitious? I’d love to hear about it.
            </h2>
            <p className="text-base leading-7 text-slate-600">
              Whether you need an engineer to lead product infrastructure,
              launch an ML initiative, or pair on developer experience—I’m open
              to contract, advisory, or full-time collaborations.
            </p>
            <a
              href="mailto:vishnu@example.com"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-700"
            >
              <Mail className="h-4 w-4" />
              <span>Start the conversation</span>
            </a>
          </div>
          <div className="grid gap-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-inner">
            {socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                className="flex items-center justify-between rounded-2xl border border-transparent px-4 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-200 hover:bg-slate-50"
              >
                <div className="flex items-center gap-3">
                  <social.icon className="h-4 w-4" />
                  <span>{social.label}</span>
                </div>
                <span aria-hidden className="text-slate-400">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-10 text-center text-xs uppercase tracking-[0.3em] text-slate-400">
        © {new Date().getFullYear()} Vishnu K. Crafted with care.
      </p>
    </section>
  );
}

