import Link from "next/link";
import PrintButton from "@/components/PrintButton";
import { profile, skills } from "@/data/profile";
import { projects } from "@/data/projects";

export const metadata = {
  title: "CV — Brayan | Full-Stack Jr. React + Node.js",
  description: "CV ATS 1 página: Ing. Sistemas UNH último ciclo, React + Node.js, Perú.",
};

export default function CVPage() {
  return (
    <div className="mx-auto w-full max-w-3xl bg-white px-6 py-10 text-zinc-900 print:py-0 dark:bg-black dark:text-zinc-100 print:bg-white print:text-black">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">{profile.nombre} — Full-Stack Jr.</h1>
          <p className="mt-1 text-sm text-zinc-600">
            {profile.universidad} · {profile.estadoAcademico}
          </p>
          <p className="mt-1 text-sm text-zinc-600">
            {profile.email} · +{profile.whatsapp} · {profile.ubicacion}
          </p>
          <p className="mt-1 text-sm text-zinc-600">
            {profile.github} · {profile.linkedin}
          </p>
        </div>
        <PrintButton />
      </div>

      <h2 className="mt-6 border-b pb-1 text-sm font-bold tracking-wide uppercase">Perfil</h2>
      <p className="mt-2 text-sm leading-6">{profile.tagline}</p>

      <h2 className="mt-6 border-b pb-1 text-sm font-bold tracking-wide uppercase">Skills</h2>
      <div className="mt-2 space-y-1 text-sm">
        {skills.map((g) => (
          <p key={g.grupo}>
            <strong>{g.grupo}:</strong> {g.items.join(" · ")}
          </p>
        ))}
      </div>

      <h2 className="mt-6 border-b pb-1 text-sm font-bold tracking-wide uppercase">Proyectos (reservados)</h2>
      <div className="mt-2 space-y-2 text-sm">
        {projects.map((p) => (
          <p key={p.slug}>
            <strong>{p.titulo}</strong> ({p.estado}) — {p.stack.join(", ")}. {p.descripcion}
          </p>
        ))}
      </div>

      <h2 className="mt-6 border-b pb-1 text-sm font-bold tracking-wide uppercase">Educación</h2>
      <p className="mt-2 text-sm">
        <strong>{profile.universidad}</strong> — {profile.estadoAcademico}. Tesis: sistema web
        prevención de anemia, Hospital de Pampas Tayacaja. Inglés básico.
      </p>

      <div className="mt-8 print:hidden">
        <Link href="/" className="text-sm font-semibold underline underline-offset-4">
          ← Volver al portafolio
        </Link>
      </div>
    </div>
  );
}
