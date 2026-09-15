import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { projects, statusMeta } from "@/data/projects";

// Next.js 16: params es async -> hay que hacer await
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const meta = statusMeta[project.estado];
  const listo = project.estado === "completo";

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <Link href="/#proyectos" className="text-sm font-semibold text-zinc-500 hover:underline">
        ← Volver a proyectos
      </Link>
      <span className={`mt-4 inline-block rounded-full px-3 py-1 text-xs font-semibold ${meta.styles}`}>
        {meta.label}
      </span>
      <h1 className="mt-2 text-3xl font-bold tracking-tight">{project.titulo}</h1>
      <p className="mt-1 text-sm text-zinc-500">{project.subtitulo}</p>
      <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">{project.descripcion}</p>

      <h2 className="mt-8 font-bold">Problema que resuelve</h2>
      <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{project.problema}</p>

      <h2 className="mt-6 font-bold">Stack</h2>
      <div className="mt-2 flex flex-wrap gap-2">
        {project.stack.map((t) => (
          <span
            key={t}
            className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium dark:bg-zinc-900"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {listo ? (
          <>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white dark:bg-white dark:text-black"
            >
              <GitHubIcon size={16} /> Ver código
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white"
            >
              <ExternalLink size={16} /> Ver demo
            </a>
          </>
        ) : (
          <div className="w-full rounded-2xl border border-dashed border-zinc-300 p-5 text-sm text-zinc-500 dark:border-zinc-700">
            <strong>Espacio reservado.</strong> Cuando subas este proyecto a GitHub, edita{" "}
            <code>src/data/projects.ts</code>: pega <code>githubUrl</code> y <code>demoUrl</code> y
            cambia <code>estado</code> a <code>&quot;completo&quot;</code>. Esta página mostrará los
            botones automáticamente.
          </div>
        )}
      </div>
    </div>
  );
}
