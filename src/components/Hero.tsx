import { Mail, MapPin, GraduationCap } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="inicio" className="mx-auto w-full max-w-5xl px-4 pt-14 pb-10 sm:px-6 sm:pt-20">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-3 py-1 font-medium text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">
              <GraduationCap size={14} />
              {profile.estadoAcademico}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-3 py-1 font-medium text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">
              <MapPin size={14} />
              Perú · Remoto LATAM
            </span>
          </div>
          <h1 className="text-4xl leading-[1.1] font-bold tracking-tight text-balance sm:text-5xl">
            {profile.nombre} — {profile.rol}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg dark:text-zinc-400">
            {profile.tagline}
          </p>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">{profile.universidad}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#proyectos"
              className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              Ver proyectos
            </a>
            <a
              href={profile.cvUrl}
              className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              Ver CV
            </a>
            <div className="flex items-center gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-zinc-300 p-2.5 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
              >
                <GitHubIcon size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-zinc-300 p-2.5 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="rounded-full border border-zinc-300 p-2.5 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="grid shrink-0 grid-cols-3 gap-3 md:w-64 md:grid-cols-1">
          {[
            { n: "React + Node.js", d: "Stack principal" },
            { n: "UNH Huancavelica", d: "Ing. de Sistemas" },
            { n: "3 slots", d: "Proyectos reservados" },
          ].map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-zinc-200 bg-white p-4 text-center dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="text-sm font-bold">{s.n}</div>
              <div className="mt-1 text-xs text-zinc-500">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
