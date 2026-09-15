import { GraduationCap, BookOpen, ExternalLink } from "lucide-react";
import { profile, formacionComplementaria } from "@/data/profile";

export default function Education() {
  return (
    <section id="educacion" className="section-shell section-space border-t border-[var(--line)]">
      <p className="section-label">Formación</p>
      <h2 className="section-title">Aprender también es parte del producto.</h2>
      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
          <div className="flex items-center gap-2 text-sm font-bold">
            <GraduationCap size={18} />
            Educación universitaria
          </div>
          <div className="mt-4 font-semibold">{profile.universidad}</div>
          <div className="text-sm text-[var(--muted)]">{profile.estadoAcademico}</div>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-6 text-[var(--muted)]">
            <li>Tesis: sistema web para prevención de la anemia — Hospital de Pampas, Tayacaja</li>
            <li>Cursos relevantes: Base de Datos, Ingeniería de Software, Desarrollo Web</li>
            <li>Inglés básico — portafolio en español, versión inglés en roadmap</li>
          </ul>
        </div>
        <div className="border-t border-[var(--line)] pt-4">
          <div className="flex items-center gap-2 text-sm font-bold">
            <BookOpen size={18} />
            Formación complementaria
          </div>
          <p className="mt-2 text-xs text-[var(--muted)]">
            Sin certificaciones pagadas — aprendizaje verificable con práctica.
          </p>
          <div className="mt-3 space-y-3">
            {formacionComplementaria.map((c) => (
              <a
                key={c.titulo}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-between gap-2 border-b border-[var(--line)] py-4 text-sm transition-colors hover:text-[#86ad2d]"
              >
                <span>
                  <span className="font-semibold">{c.titulo}</span>
                  <span className="mt-1 block text-xs text-[var(--muted)]">{c.detalle}</span>
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
