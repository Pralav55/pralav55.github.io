import { BuildingOfficeIcon } from "@heroicons/react/24/outline"
import { motion, MotionConfig } from "motion/react";


interface ProjectsSectionProps {
  scrollDirection: string;
}

const ProjectsSection = ({scrollDirection} : ProjectsSectionProps) => {
  return (
    <section id='projects' className="projects-section pt-20 pb-20">
      <div className="custom-container m-auto max-w-6xl pr-16 pl-16">
        <div className="projects-content relative max-w-2xl ml-auto max-xl:mr-auto">
        <MotionConfig
            transition={{ duration: 0.7, easing: [0.17, 0.55, 0.55, 1] }}
          >
            <motion.div
              initial={{ y: scrollDirection === "down" ? 0 : 100 }}
              whileInView={{ y: 0 }} className="section-header p-2 border-1 border-neutral-500 rounded-full w-fit flex gap-1 items-center mb-12">
            <BuildingOfficeIcon className="size-3 text-neutral-500" />
            <span className="text-xs text-neutral-500">Projects</span>
          </motion.div>
          <motion.div
              initial={{ y: scrollDirection === "down" ? 0 : 100 }}
              whileInView={{ y: 0 }}
              className="text-5xl tracking-wide font-light mb-10">
            Featured {" "}
            <span className="text-red-500">Projects</span> 
          </motion.div>
          </MotionConfig>

          <div className="">
        
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection