import { RectangleGroupIcon } from "@heroicons/react/24/outline";
import figmaImage from "../../assets/figma.png";

interface SkillsSectionProps {
  scrollDirection: string;
}


const SkillsSection = ({} : SkillsSectionProps) => {
  return (
    <section id="skills" className="skills-section pt-20 pb-20">
      <div className="custom-container m-auto max-w-6xl pr-16 pl-16">
        <div className="skills-content relative max-w-2xl ml-auto max-xl:mr-auto">
          <div className="section-header p-2 border-1 border-neutral-500 rounded-full w-fit flex gap-1 items-center mb-12">
            <RectangleGroupIcon className="size-3 text-neutral-500" />
            <span className="text-xs text-neutral-500">My Skills</span>
          </div>
          <div className="text-5xl tracking-wide font-light mb-10">
            My <span className="text-red-500">Advantages</span>
          </div>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-8 ">
            <div className="w-full">
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
            </div>
            <div className="w-full">
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
            </div>
            <div className="w-full">
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
            </div>
            <div className="w-full">
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
            </div>
            <div className="w-full">
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
            </div>
            <div className="w-full">
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
            </div>
            


          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
