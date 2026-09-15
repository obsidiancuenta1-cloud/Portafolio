"use client";

import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#habilidades", label: "Skills" },
  { href: "#educacion", label: "Educación" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    const shouldBeDark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", shouldBeDark);
    document.documentElement.classList.toggle("light", !shouldBeDark);
  }, []);

  function toggleTheme() {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.classList.toggle("light", !next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
  }

  function closeMenu() { setOpen(false); }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color:var(--background)]/90 backdrop-blur-md">
      <nav className="section-shell flex min-h-16 items-center justify-between gap-4">
        <Link href="#inicio" onClick={closeMenu} className="text-sm font-bold tracking-tight">
          {profile.nombre}<span className="ml-1 text-[#86ad2d]">/</span><span className="ml-1 text-[var(--muted)]">developer</span>
        </Link>
        <div className="hidden items-center gap-6 text-sm text-[var(--muted)] md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-[var(--foreground)]">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {profile.disponible && (
            <span className="hidden items-center gap-1.5 rounded-full border border-[var(--line)] px-2.5 py-1 text-xs font-medium text-[var(--muted)] sm:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8dbb2f]" /> Disponible
            </span>
          )}
          <button type="button" onClick={toggleTheme} aria-label={dark ? "Activar modo claro" : "Activar modo oscuro"} className="rounded-full border border-[var(--line)] p-2 text-[var(--muted)] transition hover:text-[var(--foreground)]">
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="#contacto"
            className="hidden rounded-full bg-[var(--foreground)] px-4 py-2 text-xs font-semibold text-[var(--background)] transition hover:opacity-80 sm:inline-flex"
          >
            Hablemos
          </a>
          <button type="button" onClick={() => setOpen(!open)} aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} className="rounded-full border border-[var(--line)] p-2 md:hidden">
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-[var(--line)] px-5 py-4 md:hidden">
          <div className="section-shell flex flex-col gap-1 px-0 text-sm">
            {links.map((l) => <a key={l.href} href={l.href} onClick={closeMenu} className="rounded-lg px-3 py-3 text-[var(--muted)] hover:bg-black/5 hover:text-[var(--foreground)] dark:hover:bg-white/5">{l.label}</a>)}
          </div>
        </div>
      )}
    </header>
  );
}
