import { Mail, MessageCircle, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contacto" className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
      <h2 className="text-2xl font-bold tracking-tight">Contacto</h2>
      <p className="mt-1 text-sm text-zinc-500">
        Respondo en menos de 24h. Para empresas de Lima y remoto LATAM.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
          <div className="space-y-3 text-sm">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 font-medium hover:underline">
              <Mail size={16} /> {profile.email}
            </a>
            <a
              href={`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent("Hola Brayan, vi tu portafolio y queremos conversar.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-medium hover:underline"
            >
              <MessageCircle size={16} /> WhatsApp +{profile.whatsapp}
            </a>
            <p className="flex items-center gap-2 text-zinc-500">
              <MapPin size={16} /> {profile.ubicacion}
            </p>
          </div>
          <div className="mt-4 flex gap-2">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#0A66C2] px-4 py-2 text-xs font-semibold text-white hover:opacity-90"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-300 px-4 py-2 text-xs font-semibold hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              GitHub
            </a>
          </div>
        </div>
        {/* Formulario sin backend: reemplaza TU_ID de Formspree cuando lo crees (gratis) */}
        <form
          action="https://formspree.io/f/TU_ID"
          method="POST"
          className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
        >
          <label className="block text-xs font-semibold text-zinc-500">NOMBRE</label>
          <input
            name="name"
            required
            placeholder="Empresa / tu nombre"
            className="mt-1 w-full rounded-xl border border-zinc-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-zinc-900 dark:border-zinc-700"
          />
          <label className="mt-3 block text-xs font-semibold text-zinc-500">EMAIL</label>
          <input
            name="email"
            type="email"
            required
            placeholder="empresa@correo.com"
            className="mt-1 w-full rounded-xl border border-zinc-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-zinc-900 dark:border-zinc-700"
          />
          <label className="mt-3 block text-xs font-semibold text-zinc-500">MENSAJE</label>
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Hola Brayan, tenemos una vacante Jr Full-Stack..."
            className="mt-1 w-full rounded-xl border border-zinc-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-zinc-900 dark:border-zinc-700"
          />
          <button
            type="submit"
            className="mt-4 w-full rounded-full bg-zinc-900 py-2.5 text-sm font-semibold text-white hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Enviar mensaje
          </button>
          <p className="mt-2 text-center text-[11px] text-zinc-400">
            Crea tu ID gratis en formspree.io y reemplaza TU_ID en el código.
          </p>
        </form>
      </div>
    </section>
  );
}
