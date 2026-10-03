import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { CurrentlyBuilding } from "@/components/sections/CurrentlyBuilding";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { UpcomingProjects } from "@/components/sections/UpcomingProjects";
import { LearningJourney } from "@/components/sections/LearningJourney";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <CurrentlyBuilding />
        <Skills />
        <Projects />
        <UpcomingProjects />
        <LearningJourney />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
