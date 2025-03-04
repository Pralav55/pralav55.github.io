import { useScrollDirectionHook } from "@/customhooks/useScrollDirectionHook";

import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import IntroductionSection from "../components/IntroductionSection";
import AboutSection from "../components/AboutSection";
import IconMenu from "../components/IconMenu";
import ResumeSection from "../components/ResumeSection";
import ServicesSection from "../components/ServicesSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import { AnimatePresence } from "motion/react";

function HomePage() {

  const scrollDirection = useScrollDirectionHook();

  return (
    <>
      <div className="main-container">
        <div className="inner-container">
          <IconMenu />
          <NavBar />

          <HeroSection scrollDirection={scrollDirection}/>
          <IntroductionSection />
          <AboutSection scrollDirection={scrollDirection} />
          <ResumeSection scrollDirection={scrollDirection} />
          <ServicesSection scrollDirection={scrollDirection} />
          <SkillsSection scrollDirection={scrollDirection} />
          <ProjectsSection scrollDirection={scrollDirection} />
        </div>
      </div>
    </>
  );
}

export default HomePage;
