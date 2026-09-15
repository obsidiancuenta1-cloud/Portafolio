import { Mail, MessageCircle, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contacto" className="section-shell section-space border-t border-[var(--line)]">
      <p className="section-label">Contacto</p>
      <h2 className="section-title">¿Tienes un problema interesante?</h2>
      <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--muted)]">
        Respondo en menos de 24h. Para empresas de Lima y remoto LATAM.
      </p>
      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div className="border-t border-[var(--line)] pt-4">
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
            <p className="flex items-center gap-2 text-[var(--muted)]">
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
              className="rounded-full border border-[var(--line)] px-4 py-2 text-xs font-semibold hover:bg-black/5 dark:hover:bg-white/5"
            >
              GitHub
            </a>
          </div>
        </div>
        {/* Formulario sin backend: reemplaza TU_ID de Formspree cuando lo crees (gratis) */}
        <form
          action="https://formspree.io/f/TU_ID"
          method="POST"
          className="border-t border-[var(--line)] pt-4"
        >
          <label className="block text-xs font-semibold text-zinc-500">NOMBRE</label>
          <input
            name="name"
            required
            placeholder="Empresa / tu nombre"
            className="mt-1 w-full rounded-lg border border-[var(--line)] bg-transparent px-3 py-2 text-sm outline-none focus:border-[#86ad2d]"
          />
          <label className="mt-3 block text-xs font-semibold text-zinc-500">EMAIL</label>
          <input
            name="email"
            type="email"
            required
            placeholder="empresa@correo.com"
            className="mt-1 w-full rounded-lg border border-[var(--line)] bg-transparent px-3 py-2 text-sm outline-none focus:border-[#86ad2d]"
          />
          <label className="mt-3 block text-xs font-semibold text-zinc-500">MENSAJE</label>
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Hola Brayan, tenemos una vacante Jr Full-Stack..."
            className="mt-1 w-full rounded-lg border border-[var(--line)] bg-transparent px-3 py-2 text-sm outline-none focus:border-[#86ad2d]"
          />
          <button
            type="submit"
            className="mt-4 w-full rounded-full bg-[var(--foreground)] py-3 text-sm font-semibold text-[var(--background)] hover:opacity-80"
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
