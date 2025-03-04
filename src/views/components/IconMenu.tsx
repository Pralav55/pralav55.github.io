import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const IconMenu = () => {
  const [expanded, setExpanded] = useState(false);
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
            transition={{duration: 0.3}}
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
        <div className="h-full pt-16 overflow-y-auto dark:bg-gray-950">
          <ul className="menu-wrapper w-[46%] m-auto">
            <p className="text-xl font-medium text-neutral-400 mb-4">Menu</p>
            <li className="text-sm font-medium text-neutral-400">hello</li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default IconMenu;
