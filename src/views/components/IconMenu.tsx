import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  RectangleStackIcon,
  RectangleGroupIcon,
  BuildingOfficeIcon,
  XMarkIcon,
  // EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { Link as ScrollLink } from "react-scroll";

const IconMenu = () => {
  const [expanded, setExpanded] = useState(false);

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
    <>
      <div className="icon-menu-button " onClick={() => setExpanded(!expanded)}>
        <span className="icon-menu-button-bar"></span>
        <span className="icon-menu-button-bar"></span>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full z-40 fixed top-0 left-0 bg-[rgba(80,80,80,0.2)] "
            onClick={() => setExpanded(false)}
          />
        )}
      </AnimatePresence>
      <aside
        id="sidebar"
        className={`fixed top-0 right-0 z-40 w-xs h-screen transition-transform ${
          expanded ? "" : "translate-x-full"
        } duration-300 `}
        aria-label="Sidebar"
      >
        <div className="h-full pt-16 overflow-y-auto dark:bg-black]">
          <ul className="menu-wrapper w-[46%] m-auto relative">
            <XMarkIcon
              className="absolute top-2 right-2 size-4 text-neutral-500 hover:text-red-500 transition-colors duration-300 cursor-pointer"
              onClick={() => setExpanded(false)}
            />
            <p className="text-xl font-medium text-neutral-500 mb-4">Menu</p>

            <ul className="py-4 mb-4 flex flex-col gap-6">
              <ScrollLink
                key="introduction"
                to="introduction"
                delay={200}
                smooth={true}
                duration={700}
                spy={true}
                ignoreCancelEvents={false}
                onClick={() => setExpanded(false)}
              >
                <li className="text-sm group cursor-pointer font-medium text-neutral-500 flex gap-2 items-center justify-start">
                  <HomeIcon
                    className={`navbar-icon group-hover:text-red-500 ${
                      activeSection === "introduction" ? "!text-red-500" : ""
                    }`}
                  />
                  <span
                    className={`group-hover:text-white transition-colors duration-300 ${
                      activeSection === "introduction" ? "!text-white" : ""
                    }`}
                  >
                    Introduction
                  </span>
                </li>
              </ScrollLink>

              <ScrollLink
                key="about"
                to="about"
                delay={200}
                smooth={true}
                duration={700}
                spy={true}
                ignoreCancelEvents={false}
                onClick={() => setExpanded(false)}
              >
                <li className="text-sm group cursor-pointer font-medium text-neutral-500 flex gap-2 items-center justify-start">
                  <UserIcon
                    className={`navbar-icon group-hover:text-red-500 ${
                      activeSection === "about" ? "!text-red-500" : ""
                    }`}
                  />
                  <span
                    className={`group-hover:text-white transition-colors duration-300 ${
                      activeSection === "about" ? "!text-white" : ""
                    }`}
                  >
                    About
                  </span>
                </li>
              </ScrollLink>
              <ScrollLink
                key="resume"
                to="resume"
                delay={200}
                smooth={true}
                duration={700}
                spy={true}
                ignoreCancelEvents={false}
                onClick={() => setExpanded(false)}
              >
                <li className="text-sm group cursor-pointer font-medium text-neutral-500 flex gap-2 items-center justify-start">
                  <BriefcaseIcon
                    className={`navbar-icon group-hover:text-red-500 ${
                      activeSection === "resume" ? "!text-red-500" : ""
                    }`}
                  />
                  <span
                    className={`group-hover:text-white transition-colors duration-300 ${
                      activeSection === "resume" ? "!text-white" : ""
                    }`}
                  >
                    Resume
                  </span>
                </li>
              </ScrollLink>
              <ScrollLink
                key="services"
                to="services"
                delay={200}
                smooth={true}
                duration={700}
                spy={true}
                ignoreCancelEvents={false}
                onClick={() => setExpanded(false)}
              >
                <li className="text-sm group cursor-pointer font-medium text-neutral-500 flex gap-2 items-center justify-start">
                  <RectangleStackIcon
                    className={`navbar-icon group-hover:text-red-500 ${
                      activeSection === "services" ? "!text-red-500" : ""
                    }`}
                  />
                  <span
                    className={`group-hover:text-white transition-colors duration-300 ${
                      activeSection === "services" ? "!text-white" : ""
                    }`}
                  >
                    Serivces
                  </span>
                </li>
              </ScrollLink>
              <ScrollLink
                key="skills"
                to="skills"
                delay={200}
                smooth={true}
                duration={700}
                spy={true}
                ignoreCancelEvents={false}
                onClick={() => setExpanded(false)}
              >
                <li className="text-sm group cursor-pointer font-medium text-neutral-500 flex gap-2 items-center justify-start">
                  <RectangleGroupIcon
                    className={`navbar-icon group-hover:text-red-500 ${
                      activeSection === "skills" ? "!text-red-500" : ""
                    }`}
                  />
                  <span
                    className={`group-hover:text-white transition-colors duration-300 ${
                      activeSection === "skills" ? "!text-white" : ""
                    }`}
                  >
                    Skills
                  </span>
                </li>
              </ScrollLink>
              <ScrollLink
                key="projects"
                to="projects"
                delay={200}
                smooth={true}
                duration={700}
                spy={true}
                ignoreCancelEvents={false}
                onClick={() => setExpanded(false)}
              >
                <li className="text-sm group cursor-pointer font-medium text-neutral-500 flex gap-2 items-center justify-start">
                  <BuildingOfficeIcon
                    className={`navbar-icon group-hover:text-red-500 ${
                      activeSection === "projects" ? "!text-red-500" : ""
                    }`}
                  />
                  <span
                    className={`group-hover:text-white transition-colors duration-300 ${
                      activeSection === "projects" ? "!text-white" : ""
                    }`}
                  >
                    Portfolio
                  </span>
                </li>
              </ScrollLink>
            </ul>
            <p className="text-l font-medium text-neutral-500 mb-4">Socials</p>
            <div className="flex gap-4 justify-start items-center">
            <div className=" cursor-pointer hover:border-red-500 transition-all duration-300 hover:*:fill-red-500">
          <svg
            className="size-3 fill-neutral-500 transition-all duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
          </svg>
        </div>
        <div className=" cursor-pointer hover:border-red-500 transition-all duration-300 hover:*:fill-red-500">
          <svg
            className="size-3 fill-neutral-500 transition-all duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
        </div>
        <div className=" cursor-pointer hover:border-red-500 transition-all duration-300 hover:*:fill-red-500">
          <svg
            className="size-3 fill-neutral-500 transition-all duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
          </svg>
        </div>
        <div className=" cursor-pointer hover:border-red-500 transition-all duration-300 hover:*:fill-red-500">
          <svg
            className="size-3 fill-neutral-500 transition-all duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
          >
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
          </svg>
        </div>
            </div>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default IconMenu;
