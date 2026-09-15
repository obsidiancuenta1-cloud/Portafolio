import { skills } from "@/data/profile";

export default function Skills() {
  return (
    <section id="habilidades" className="section-shell section-space border-t border-[var(--line)]">
      <p className="section-label">Herramientas</p>
      <h2 className="section-title">Un stack práctico para construir de punta a punta.</h2>
      <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--muted)]">
        Nivel Junior honesto: lo que domino y uso en proyectos reales.
      </p>
      <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2">
        {skills.map((g) => (
          <div
            key={g.grupo}
            className="border-t border-[var(--line)] pt-4"
          >
            <h3 className="text-sm font-bold tracking-wide text-[var(--muted)] uppercase">{g.grupo}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-[var(--line)] px-3 py-1 text-sm font-medium"
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
