import Link from "next/link";
import { ExternalLink, Lock } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { projects, statusMeta } from "@/data/projects";

export default function Projects() {
  return (
    <section id="proyectos" className="section-shell section-space border-t border-[var(--line)]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-label">Trabajo seleccionado</p>
          <h2 className="section-title">Proyectos que convierten problemas en interfaces.</h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-[var(--muted)]">Una selección en crecimiento: tesis aplicada, backend y producto frontend.</p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {projects.map((p) => {
          const meta = statusMeta[p.estado];
          const listo = p.estado === "completo";
          return (
            <article
              key={p.slug}
              className={`flex flex-col rounded-[1.25rem] border p-6 transition duration-200 hover:-translate-y-1 ${
                p.destacado
                  ? "border-[#a7ce51] bg-[#c9f36a] text-[#171717]"
                  : "border-[var(--line)] bg-transparent"
              }`}
            >
              <span
                className={`w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${meta.styles} ${
                  p.destacado ? "opacity-90" : ""
                }`}
              >
                {meta.label}
              </span>
              <h3 className="mt-5 text-lg font-bold tracking-tight">{p.titulo}</h3>
              <p className={`mt-1 text-xs ${p.destacado ? "opacity-70" : "text-[var(--muted)]"}`}>{p.subtitulo}</p>
              <p className={`mt-4 text-sm leading-6 ${p.destacado ? "opacity-80" : "text-[var(--muted)]"}`}>
                {p.descripcion}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      p.destacado
                        ? "bg-black/10 text-[#171717]"
                        : "bg-black/5 text-[var(--muted)] dark:bg-white/5"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 pt-1">
                {listo ? (
                  <>
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors hover:opacity-80 border-current"
                    >
                      <GitHubIcon size={14} /> Código
                    </a>
                    <a
                      href={p.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold bg-green-600 text-white hover:bg-green-500"
                    >
                      <ExternalLink size={14} /> Demo
                    </a>
                  </>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed px-3 py-1.5 text-xs font-medium opacity-60 border-current">
                    <Lock size={14} /> Links disponibles al subir el proyecto
                  </span>
                )}
                <Link href={`/projects/${p.slug}`} className="ml-auto text-xs font-semibold underline underline-offset-4 hover:opacity-80">
                  Detalle →
                </Link>
              </div>
            </article>
          );
        })}
      </div>
      <p className="mt-5 text-xs leading-5 text-[var(--muted)]">
        Los proyectos pueden ampliarse desde <code className="rounded bg-black/5 px-1.5 py-0.5 dark:bg-white/5">src/data/projects.ts</code> sin tocar la presentación.
      </p>
    </section>
  );
}
