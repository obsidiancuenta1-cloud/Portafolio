import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="inicio" className="section-shell section-space pt-16 sm:pt-24">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <div className="mb-5 flex items-center gap-2 text-xs font-medium text-[var(--muted)]">
            <span className="h-2 w-2 rounded-full bg-[#8dbb2f]" />
            Disponible para oportunidades junior · Perú / remoto LATAM
          </div>
          <h1 className="max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.055em] text-balance sm:text-7xl">
            Construyo productos web <span className="text-[#86ad2d]">claros y útiles.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
            {profile.tagline}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#proyectos"
              className="rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-[var(--background)] transition hover:opacity-80"
            >
              Explorar proyectos
            </a>
            <a
              href={profile.cvUrl}
              className="rounded-full border border-[var(--line)] px-5 py-3 text-sm font-semibold transition hover:bg-black/5 dark:hover:bg-white/5"
            >
              Ver CV
            </a>
            <div className="flex items-center gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-[var(--line)] p-2.5 text-[var(--muted)] transition hover:text-[var(--foreground)]"
              >
                <GitHubIcon size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-[var(--line)] p-2.5 text-[var(--muted)] transition hover:text-[var(--foreground)]"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="rounded-full border border-[var(--line)] p-2.5 text-[var(--muted)] transition hover:text-[var(--foreground)]"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="grid gap-3 border-t border-[var(--line)] pt-5 lg:mb-1">
          {[
            { n: "React + Node.js", d: "Stack principal" },
            { n: "Último ciclo", d: "Ingeniería de Sistemas · UNH" },
            { n: "Tesis aplicada", d: "Prevención de anemia · Hospital de Pampas" },
          ].map((s) => (
            <div
              key={s.n}
              className="flex items-baseline justify-between gap-4 border-b border-[var(--line)] py-3 first:pt-0 last:border-0"
            >
              <div className="text-sm font-bold">{s.n}</div>
              <div className="text-right text-xs text-[var(--muted)]">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
