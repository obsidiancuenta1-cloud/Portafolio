import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <hr className="border-zinc-200 dark:border-zinc-800" />
      </div>
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}
