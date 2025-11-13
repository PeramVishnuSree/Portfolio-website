"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 backdrop-blur bg-white/80">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="#top"
          className="text-lg font-semibold tracking-tight text-slate-900"
        >
          Vishnu Sree Peram
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:vishnu@example.com"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700"
          >
            Let&apos;s talk
          </a>
        </nav>
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {isOpen ? (
        <nav className="md:hidden">
          <div className="space-y-1 border-t border-slate-200 bg-white px-6 pb-6 pt-2 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:vishnu@example.com"
              className="mt-2 flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700"
            >
              Contact
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

