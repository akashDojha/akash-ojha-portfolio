import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import WordPressExpertise from "./sections/WordPressExpertise";
import ThemesPlugins from "./sections/ThemesPlugins";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import CaseStudies from "./sections/CaseStudies";
import Services from "./sections/Services";
import Experience from "./sections/Experience";
import Process from "./sections/Process";
import WhyWorkWithMe from "./sections/WhyWorkWithMe";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";

function getInitialDark() {
  if (typeof window === "undefined") return false;
  try {
    const stored = localStorage.getItem("ao-theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  } catch {
    return false;
  }
}

export default function App() {
  const [dark, setDark] = useState(getInitialDark);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("ao-theme", dark ? "dark" : "light");
    } catch {}
  }, [dark]);

  return (
    <div className="min-h-screen bg-paper text-ink dark:bg-dark dark:text-[#eceae4]">
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <About />
        <WordPressExpertise />
        <ThemesPlugins />
        <Skills />
        <Projects />
        <CaseStudies />
        <Services />
        <Experience />
        <Process />
        <WhyWorkWithMe />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
