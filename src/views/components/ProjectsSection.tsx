import { BuildingOfficeIcon } from "@heroicons/react/24/outline"

const ProjectsSection = () => {
  return (
    <section id='projects' className="projects-section pt-20 pb-20">
      <div className="custom-container m-auto max-w-6xl pr-16 pl-16">
        <div className="projects-content relative max-w-2xl ml-auto">
          <div className="section-header p-2 border-1 border-neutral-500 rounded-full w-fit flex gap-1 items-center mb-12">
            <BuildingOfficeIcon className="size-3 text-neutral-500" />
            <span className="text-xs text-neutral-500">Projects</span>
          </div>
          <div className="text-5xl tracking-wide font-light mb-10">
            Featured {" "}
            <span className="text-red-500">Projects</span> 
          </div>
          <div className="">
        
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection