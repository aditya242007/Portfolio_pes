import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroStrip from "@/components/IntroStrip";
import Projects from "@/components/Projects";
import DataSection from "@/components/DataSection";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Github from "@/components/Github";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="flex-1 flex flex-col">
        <Hero />
        <IntroStrip />
        <Projects />
        <DataSection />
        <Skills />
        <About />
        <Experience />
        <Education />
        <Certifications />
        <Achievements />
        <Github />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
