'use client';

// filepath: /home/rodrigo/portafolio/src/app/page.tsx
import { useTheme } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const { toggleSpidermanMode, isSpidermanMode } = useTheme();

  return (
    <>
      <Navbar toggleTheme={toggleSpidermanMode} />
      <main className="pt-16">
        <Hero />
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
