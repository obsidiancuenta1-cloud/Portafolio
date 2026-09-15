import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="section-shell flex flex-col items-center justify-between gap-2 py-7 text-xs text-[var(--muted)] sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.nombre} · {profile.universidad}
        </p>
        
      </div>
    </footer>
  );
}
