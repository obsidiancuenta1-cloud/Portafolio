import Link from "next/link";
import { profile } from "@/data/profile";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#habilidades", label: "Skills" },
  { href: "#educacion", label: "Educación" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/85 backdrop-blur dark:border-zinc-800 dark:bg-black/70">
      <nav className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href="#inicio" className="text-sm font-bold tracking-tight">
          {profile.nombre} <span className="text-zinc-500">· Full-Stack Jr.</span>
        </Link>
        <div className="hidden items-center gap-5 text-sm text-zinc-600 md:flex dark:text-zinc-300">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-black dark:hover:text-white">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {profile.disponible && (
            <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
              ● Disponible
            </span>
          )}
          <a
            href="#contacto"
            className="rounded-full bg-zinc-900 px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Contrátame
          </a>
        </div>
      </nav>
    </header>
  );
}
