import { GraduationCap, BookOpen, ExternalLink } from "lucide-react";
import { profile, formacionComplementaria } from "@/data/profile";

export default function Education() {
  return (
    <section id="educacion" className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
      <h2 className="text-2xl font-bold tracking-tight">Educación</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
          <div className="flex items-center gap-2 text-sm font-bold">
            <GraduationCap size={18} />
            Educación universitaria
          </div>
          <div className="mt-3 font-semibold">{profile.universidad}</div>
          <div className="text-sm text-zinc-500">{profile.estadoAcademico}</div>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
            <li>Tesis: sistema web para prevención de la anemia — Hospital de Pampas, Tayacaja</li>
            <li>Cursos relevantes: Base de Datos, Ingeniería de Software, Desarrollo Web</li>
            <li>Inglés básico — portafolio en español, versión inglés en roadmap</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
          <div className="flex items-center gap-2 text-sm font-bold">
            <BookOpen size={18} />
            Formación complementaria
          </div>
          <p className="mt-1 text-xs text-zinc-500">
            Sin certificaciones pagadas — aprendizaje verificable con práctica.
          </p>
          <div className="mt-3 space-y-3">
            {formacionComplementaria.map((c) => (
              <a
                key={c.titulo}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-between gap-2 rounded-xl bg-zinc-50 p-3 text-sm transition-colors hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800"
              >
                <span>
                  <span className="font-semibold">{c.titulo}</span>
                  <span className="block text-xs text-zinc-500">{c.detalle}</span>
                </span>
                <ExternalLink size={16} className="mt-0.5 shrink-0 text-zinc-400" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
