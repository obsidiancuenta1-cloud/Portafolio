// ============================================================
// CÓMO AGREGAR UN PROYECTO (2 min, sin tocar diseño):
// 1. Sube tu código a GitHub
// 2. Copia uno de los bloques de abajo, cambia slug/titulo/stack/links
// 3. Cambia estado a "completo" y listo: la card + página detalle se generan solas.
// Estados: "en-desarrollo" | "proximamente" | "completo"
// ============================================================

export type ProjectStatus = "en-desarrollo" | "proximamente" | "completo";

export interface Project {
  slug: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  problema: string;
  stack: string[];
  estado: ProjectStatus;
  destacado: boolean;
  githubUrl: string;
  demoUrl: string;
}

export const projects: Project[] = [
  {
    slug: "sistema-anemia-pampas",
    titulo: "Sistema Web Prevención de Anemia",
    subtitulo: "Hospital de Pampas, Tayacaja — Huancavelica · Tesis UNH",
    descripcion:
      "Espacio reservado para tu tesis: registro de pacientes, tamizaje de hemoglobina, seguimiento y reportes para personal de salud.",
    problema:
      "Las acciones de prevención de la anemia en el hospital se gestionan en papel/Excel, sin seguimiento oportuno ni reportes consolidados.",
    stack: ["React", "Node.js", "Express", "PostgreSQL"],
    estado: "en-desarrollo",
    destacado: true,
    githubUrl: "", // TODO: pega aquí tu repo cuando lo subas a GitHub
    demoUrl: "", // TODO: pega aquí tu demo en Vercel/Render
  },
  {
    slug: "api-rest-node",
    titulo: "API REST Profesional",
    subtitulo: "Proyecto de apoyo · Backend puro",
    descripcion:
      "Espacio reservado: API con documentación Swagger, validaciones, auth JWT y tests. Ideal para ofertas Backend Jr.",
    problema: "Reservado para tu segundo proyecto: ej. API de inventario/ventas.",
    stack: ["Node.js", "Express", "PostgreSQL", "Swagger", "Jest"],
    estado: "proximamente",
    destacado: false,
    githubUrl: "",
    demoUrl: "",
  },
  {
    slug: "dashboard-nextjs",
    titulo: "Dashboard / E-commerce Frontend",
    subtitulo: "Proyecto de apoyo · Frontend moderno",
    descripcion:
      "Espacio reservado: app en Next.js 16 + Tailwind con dashboard, deploy en Vercel. Ideal para ofertas Frontend Jr.",
    problema: "Reservado para tu tercer proyecto: ej. dashboard SaaS o tienda.",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS"],
    estado: "proximamente",
    destacado: false,
    githubUrl: "",
    demoUrl: "",
  },
];

export const statusMeta: Record<ProjectStatus, { label: string; styles: string }> = {
  completo: {
    label: "Completo",
    styles: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  },
  "en-desarrollo": {
    label: "En desarrollo · Tesis UNH",
    styles: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  },
  proximamente: {
    label: "Próximamente",
    styles: "bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
  },
};
