import { useState } from "react";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import IntroductionSection from "../components/IntroductionSection";
import AboutSection from "../components/AboutSection";
import IconMenu from "../components/IconMenu";

function HomePage() {
  return (
    <>
      <div className="main-container">
        <div className="inner-container">
          <IconMenu />
          <NavBar />
          <HeroSection />
          <IntroductionSection />
          {/* <AboutSection /> */}
        </div>
      </div>
    </>
  );
}

export default HomePage;
