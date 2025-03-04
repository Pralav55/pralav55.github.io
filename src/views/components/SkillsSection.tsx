import { RectangleGroupIcon } from "@heroicons/react/24/outline";
import figmaImage from "../../assets/figma.png";
import { motion, MotionConfig } from "motion/react";

interface SkillsSectionProps {
  scrollDirection: string;
}

const SkillsSection = ({ scrollDirection }: SkillsSectionProps) => {
  return (
    <section id="skills" className="skills-section pt-20 pb-20 overflow-hidden">
      <div className="custom-container m-auto max-w-6xl pr-16 pl-16">
        <div className="skills-content relative max-w-2xl ml-auto max-xl:mr-auto">
          <MotionConfig
            transition={{ duration: 0.7, easing: [0.17, 0.55, 0.55, 1] }}
          >
            <motion.div
              initial={{ y: scrollDirection === "down" ? 0 : 100 }}
              whileInView={{ y: 0 }}
              className="section-header p-2 border-1 border-neutral-500 rounded-full w-fit flex gap-1 items-center mb-12"
            >
              <RectangleGroupIcon className="size-3 text-neutral-500" />
              <span className="text-xs text-neutral-500">My Skills</span>
            </motion.div>
            <motion.div
              initial={{ y: scrollDirection === "down" ? 0 : 100 }}
              whileInView={{ y: 0 }}
              className="text-5xl tracking-wide font-light mb-10"
            >
              My <span className="text-red-500">Advantages</span>
            </motion.div>
          </MotionConfig>

          <div className="grid md:grid-cols-4 grid-cols-2 gap-8 ">
            <MotionConfig
              transition={{ duration: 0.7, easing: [0.17, 0.55, 0.55, 1] }}
            >
              <motion.div
                initial={
                  scrollDirection === "down"
                    ? { x: 0, y: 0 }
                    : { x: -100, y: 100 }
                }
                whileInView={{ x: 0, y: 0 }}
                className="w-full"
              >
                <div className="border-1 border-neutral-500 rounded-full pt-10 pb-10 hover:border-red-500 transition-all duration-300 mb-4">
                  <figure className="">
                    <img
                      className="relative mr-auto ml-auto mb-[30px]"
                      src={figmaImage}
                      alt="Pralav"
                    />
                  </figure>
                  <div className="text-red-500 relative w-fit m-auto text-2xl">
                    92%
                  </div>
                </div>
                <div className="text-center">Figma</div>
              </motion.div>
              <motion.div
                initial={
                  scrollDirection === "down"
                    ? { x: 0, y: 0 }
                    : { x: -100, y: 100 }
                }
                whileInView={{ x: 0, y: 0 }}
                className="w-full"
              >
                <div className="border-1 border-neutral-500 rounded-full pt-10 pb-10 hover:border-red-500 transition-all duration-300 mb-4">
                  <figure className="">
                    <img
                      className="relative mr-auto ml-auto mb-[30px]"
                      src={figmaImage}
                      alt="Pralav"
                    />
                  </figure>
                  <div className="text-red-500 relative w-fit m-auto text-2xl">
                    92%
                  </div>
                </div>
                <div className="text-center">Figma</div>
              </motion.div>
              <motion.div
                initial={
                  scrollDirection === "down"
                    ? { x: 0, y: 0 }
                    : { x: 100, y: 100 }
                }
                whileInView={{ x: 0, y: 0 }}
                className="w-full"
              >
                <div className="border-1 border-neutral-500 rounded-full pt-10 pb-10 hover:border-red-500 transition-all duration-300 mb-4">
                  <figure className="">
                    <img
                      className="relative mr-auto ml-auto mb-[30px]"
                      src={figmaImage}
                      alt="Pralav"
                    />
                  </figure>
                  <div className="text-red-500 relative w-fit m-auto text-2xl">
                    92%
                  </div>
                </div>
                <div className="text-center">Figma</div>
              </motion.div>
              <motion.div
                initial={
                  scrollDirection === "down"
                    ? { x: 0, y: 0 }
                    : { x: 100, y: 100 }
                }
                whileInView={{ x: 0, y: 0 }}
                className="w-full"
              >
                <div className="border-1 border-neutral-500 rounded-full pt-10 pb-10 hover:border-red-500 transition-all duration-300 mb-4">
                  <figure className="">
                    <img
                      className="relative mr-auto ml-auto mb-[30px]"
                      src={figmaImage}
                      alt="Pralav"
                    />
                  </figure>
                  <div className="text-red-500 relative w-fit m-auto text-2xl">
                    92%
                  </div>
                </div>
                <div className="text-center">Figma</div>
              </motion.div>
              <motion.div
                initial={{ y: scrollDirection === "down" ? 0 : 100 }}
                whileInView={{ y: 0 }}
                className="w-full"
              >
                <div className="border-1 border-neutral-500 rounded-full pt-10 pb-10 hover:border-red-500 transition-all duration-300 mb-4">
                  <figure className="">
                    <img
                      className="relative mr-auto ml-auto mb-[30px]"
                      src={figmaImage}
                      alt="Pralav"
                    />
                  </figure>
                  <div className="text-red-500 relative w-fit m-auto text-2xl">
                    92%
                  </div>
                </div>
                <div className="text-center">Figma</div>
              </motion.div>
              <motion.div
                initial={{ y: scrollDirection === "down" ? 0 : 100 }}
                whileInView={{ y: 0 }}
                className="w-full"
              >
                <div className="border-1 border-neutral-500 rounded-full pt-10 pb-10 hover:border-red-500 transition-all duration-300 mb-4">
                  <figure className="">
                    <img
                      className="relative mr-auto ml-auto mb-[30px]"
                      src={figmaImage}
                      alt="Pralav"
                    />
                  </figure>
                  <div className="text-red-500 relative w-fit m-auto text-2xl">
                    92%
                  </div>
                </div>
                <div className="text-center">Figma</div>
              </motion.div>
            </MotionConfig>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
