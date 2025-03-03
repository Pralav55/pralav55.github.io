// import { useState } from "react";
// import {useScroll, useMotionValueEvent } from "motion/react";

// import {useScrollDirectionHook} from "@/customhooks/useScrollDirectionHook";
import {useScrollDirectionHook} from "@/customhooks/useScrollDirectionHook";


import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import IntroductionSection from "../components/IntroductionSection";
import AboutSection from "../components/AboutSection";
import IconMenu from "../components/IconMenu";
import ResumeSection from "../components/ResumeSection";
import ServicesSection from "../components/ServicesSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";


function HomePage() {
  // const { scrollY } = useScroll();
  // const [scrollDirection, setScrollDirection] = useState("down");
  const scrollDirection = useScrollDirectionHook()

  // useMotionValueEvent(scrollY, "change", (current) => {
  //   const previous = scrollY.getPrevious();
  //   if (previous !== undefined) {
  //     const diff = current - previous;
  //     setScrollDirection(diff > 0 ? "down" : "up");
	//   console.log(scrollDirection);
  //   }else{
	//   setScrollDirection("down");
	// }
  // });
  
  

  return (
    <>
      <div className="main-container">
        <div className="inner-container">
          <IconMenu />
          <NavBar />
          <HeroSection />
          <IntroductionSection />
          <AboutSection scrollDirection={scrollDirection}/>
          <ResumeSection scrollDirection={scrollDirection}/>
          <ServicesSection scrollDirection={scrollDirection}/>
          <SkillsSection scrollDirection={scrollDirection}/>
          <ProjectsSection scrollDirection={scrollDirection}/>
        </div>
      </div>
    </>
  );
}

export default HomePage;
