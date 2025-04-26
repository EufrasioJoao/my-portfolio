import { Skills } from "@/components/home/Skills";
import { About } from "@/components/home/About";
import { CallToAction } from "@/components/home/CallToAction";
import { Projects } from "@/components/home/Projects";
import { Experience } from "@/components/home/Experience";
import Hero from "@/components/home/Hero";

/**
 * Home page component
 * Landing page for the developer portfolio
 * Features futuristic cyberpunk design elements
 */
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Hero />
        <Skills />
        <About />
        <CallToAction />
        <Projects />
        <Experience />
      </main>
    </div>
  );
}
