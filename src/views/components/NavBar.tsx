import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  RectangleStackIcon,
  RectangleGroupIcon,
  BuildingOfficeIcon,
  // EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="navbar hidden xl:fixed top-1/2 -translate-y-1/2 right-12 border-1 border-neutral-500 rounded-full xl:flex flex-col items-center gap-6 pt-6 pb-6 text-center w-[55px]">
      <ScrollLink
        key="introduction"
        to="introduction"
        delay={200}
        smooth={true}
        duration={700}
        spy={true}
        className={`${
          activeSection === "introduction" ? "*:!text-red-500" : ""
        }`}
        ignoreCancelEvents={false}
      >
        <HomeIcon className="navbar-icon" />
      </ScrollLink>
      <ScrollLink
        key="about"
        to="about"
        delay={200}
        smooth={true}
        duration={700}
        spy={true}
        className={`${activeSection === "about" ? "*:!text-red-500" : ""}`}
        ignoreCancelEvents={false}
      >
        <UserIcon className="navbar-icon" />
      </ScrollLink>
      <ScrollLink
        key="resume"
        to="resume"
        delay={200}
        smooth={true}
        duration={700}
        spy={true}
        className={`${activeSection === "resume" ? "*:!text-red-500" : ""}`}
        ignoreCancelEvents={false}
      >
        <BriefcaseIcon className="navbar-icon" />
      </ScrollLink>
      <ScrollLink
        key="services"
        to="services"
        delay={200}
        smooth={true}
        duration={700}
        spy={true}
        className={`${activeSection === "services" ? "*:!text-red-500" : ""}`}
        ignoreCancelEvents={false}
      >
        <RectangleStackIcon className="navbar-icon" />
      </ScrollLink>
      <ScrollLink
        key="skills"
        to="skills"
        delay={200}
        smooth={true}
        duration={700}
        spy={true}
        className={`${activeSection === "skills" ? "*:!text-red-500" : ""}`}
        ignoreCancelEvents={false}
      >
        <RectangleGroupIcon className="navbar-icon" />
      </ScrollLink>
      <ScrollLink
        key="projects"
        to="projects"
        delay={200}
        smooth={true}
        duration={700}
        spy={true}
        className={`${
          activeSection === "projects" ? "*:!text-red-500" : ""
        }`}
        ignoreCancelEvents={false}
      >
        <BuildingOfficeIcon className="navbar-icon" />
      </ScrollLink>
      {/* <ScrollLink key="home" to="home" delay={200} smooth={true} duration={700} spy={true} activeClass="!text-red-500">
        <EnvelopeIcon className="navbar-icon" />
      </ScrollLink> */}
    </div>
  );
};

export default NavBar;
