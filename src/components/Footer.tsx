import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-zinc-500 sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.nombre} · {profile.universidad}
        </p>
        
      </div>
    </footer>
  );
}
