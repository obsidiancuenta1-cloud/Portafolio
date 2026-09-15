import { skills } from "@/data/profile";

export default function Skills() {
  return (
    <section id="habilidades" className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
      <h2 className="text-2xl font-bold tracking-tight">Habilidades técnicas</h2>
      <p className="mt-1 text-sm text-zinc-500">
        Nivel Junior honesto: lo que domino y uso en proyectos reales.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {skills.map((g) => (
          <div
            key={g.grupo}
            className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <h3 className="text-sm font-bold tracking-wide text-zinc-500 uppercase">{g.grupo}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
