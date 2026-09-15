import Link from "next/link";
import { ExternalLink, Lock } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { projects, statusMeta } from "@/data/projects";

export default function Projects() {
  return (
    <section id="proyectos" className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Proyectos</h2>
          <p className="mt-1 text-sm text-zinc-500">
            3 espacios reservados. Subo mi tesis y 2 proyectos de apoyo — la estructura ya está lista.
          </p>
        </div>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {projects.map((p) => {
          const meta = statusMeta[p.estado];
          const listo = p.estado === "completo";
          return (
            <article
              key={p.slug}
              className={`flex flex-col rounded-2xl border p-5 transition-shadow ${
                p.destacado
                  ? "border-zinc-900 bg-zinc-900 text-white dark:border-white dark:bg-white dark:text-black"
                  : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
              }`}
            >
              <span
                className={`w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${meta.styles} ${
                  p.destacado ? "opacity-90" : ""
                }`}
              >
                {meta.label}
              </span>
              <h3 className="mt-3 font-bold">{p.titulo}</h3>
              <p className={`text-xs ${p.destacado ? "opacity-70" : "text-zinc-500"}`}>{p.subtitulo}</p>
              <p className={`mt-2 text-sm leading-6 ${p.destacado ? "opacity-90" : "text-zinc-600 dark:text-zinc-400"}`}>
                {p.descripcion}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      p.destacado
                        ? "bg-white/15 dark:bg-black/10"
                        : "bg-zinc-100 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
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
      <p className="mt-4 rounded-xl bg-zinc-50 p-3 text-xs leading-5 text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
        ¿Cómo agrego un proyecto? Sube el repo a GitHub → abre <code>src/data/projects.ts</code> → pega
        <code> githubUrl</code> y <code>demoUrl</code> → cambia <code>estado</code> a
        <code> &quot;completo&quot;</code>. Sin tocar diseño.
      </p>
    </section>
  );
}
