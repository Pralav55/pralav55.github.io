import { UserIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

const AboutSection = () => {
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState("down");

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined) {
      const diff = current - previous;
      setScrollDirection(diff > 0 ? "down" : "up");
    }
  });

  return (
    <section id="about" className="about-section pt-20 pb-20">
      <div className="custom-container m-auto max-w-6xl pr-16 pl-16">
        <div className="about-content relative max-w-2xl ml-auto">
          <motion.div
            initial={{ y: scrollDirection === "down" ? 0 : 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.7, easing: [0.17, 0.55, 0.55, 1] }}
            exit={{ y: scrollDirection === "down" ? 0 : 100 }}
            className="section-header p-2 border-1 border-neutral-500 rounded-full w-fit flex gap-1 items-center mb-12"
          >
            <UserIcon className="size-3 text-neutral-500" />
            <span className="text-xs text-neutral-500">About</span>
          </motion.div>
          <motion.div
            initial={{ y: scrollDirection === "down" ? 0 : 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.7, easing: [0.17, 0.55, 0.55, 1] }}
            exit={{ y: scrollDirection === "down" ? 0 : 100 }}
            className="text-5xl tracking-wide font-light mb-10"
          >
            Every great innovation begins with a{" "}
            <span className="text-red-500">bold idea</span> and{" "}
            <span className="text-red-500">the code</span> to bring it to life.
          </motion.div>
          <motion.div
            initial={{ y: scrollDirection === "down" ? 0 : 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.7, easing: [0.17, 0.55, 0.55, 1] }}
            exit={{ y: scrollDirection === "down" ? 0 : 100 }}
            className="text-sm text-neutral-500 mb-12"
          >
            Since joining the startup world 3 years ago, I’ve immersed myself in
            developing innovative applications, driving company growth, and
            building revenue through strategic lead generation. My journey has
            been fueled by a passion for solving complex problems, a knack for
            turning ideas into functional solutions, and a relentless drive to
            create value. I thrive in fast-paced environments, collaborating
            with talented teams to deliver impactful results. Quietly confident,
            endlessly curious, and always learning, I’m committed to pushing
            boundaries one line of code and one lead at a time.
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
