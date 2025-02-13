import { BriefcaseIcon } from "@heroicons/react/24/outline";

const ResumeSection = () => {
  return (
    <section id="resume" className="resume-section pt-20 pb-20">
      <div className="custom-container m-auto max-w-6xl pr-16 pl-16">
        <div className="resume-content relative max-w-2xl ml-auto">
          <div className="section-header p-2 border-1 border-neutral-500 rounded-full w-fit flex gap-1 items-center mb-12">
            <BriefcaseIcon className="size-3 text-neutral-500" />
            <span className="text-xs text-neutral-500">Resume</span>
          </div>
          <div className="text-5xl tracking-wide font-light mb-10">
            Education & <span className="text-red-500">Experience</span>
          </div>
          <div className="">
            <ul
              aria-label="Changelog feed"
              role="feed"
              className="relative flex flex-col gap-12 after:absolute after:top-2 after:bottom-2 after:border-s after:-translate-x-1/2 after:border-neutral-500 "
            >
              <li
                role="article"
                className="relative pl-6 before:absolute before:z-10 before:left-0 before:top-2 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-neutral-500 before:ring-1 before:ring-neutral-500 group hover:before:bg-red-500 hover:before:ring-red-500 before:transition-all before:duration-300 " 
              >
                <div className="flex flex-col flex-1 gap-4">
                  <h4 className="text-lg font-medium text-red-500">
                    v1.2.6{" "}
                    <span className="text-lg font-normal text-neutral-500 group-hover:text-red-500 transition-all duration-300">
                      {" "}
                      - 2023-02-08
                    </span>{" "}
                  </h4>
                  <p className=" text-neutral-500">
                    This provides a very significant 
                  </p>
                </div>
              </li>
              <li
                role="article"
                className="relative pl-6 before:absolute before:z-10 before:left-0 before:top-2 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-neutral-500 before:ring-1 before:ring-neutral-500 group hover:before:bg-red-500 hover:before:ring-red-500 before:transition-all before:duration-300 "
              >
                <div className="flex flex-col flex-1 gap-4">
                  <h4 className="text-lg font-medium text-red-500">
                    v1.2.5{" "}
                    <span className="text-lg font-normal text-neutral-500 group-hover:text-red-500 transition-all duration-300">
                      {" "}
                      - 2023-01-21
                    </span>{" "}
                  </h4>
                  <p className="text-neutral-500">
                    Pass extended color palette to theme closures so it can be
                    used without installing Tailwind when using npx tailwindcss.
                  </p>
                  <ul className="pl-5 list-disc text-neutral-500 marker:text-red-500">
                    <li>Remove outdated focus style fix in Preflight</li>
                    <li>Fix error when not using a config file with postcss</li>
                    <li>
                      Fix issue with resolveConfig not being importable in
                      Next.js
                    </li>
                  </ul>
                </div>
              </li>
              <li
                role="article"
                className="relative pl-6 before:absolute before:z-10 before:left-0 before:top-2 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-neutral-500 before:ring-1 before:ring-neutral-500 group hover:before:bg-red-500 hover:before:ring-red-500 before:transition-all before:duration-300 "
              >
                <div className="flex flex-col flex-1 gap-4">
                  <h4 className="text-lg font-medium text-red-500">
                    v1.2.4{" "}
                    <span className="text-lg font-normal text-neutral-500 group-hover:text-red-500 transition-all duration-300">
                      {" "}
                      - 2023-01-18
                    </span>{" "}
                  </h4>
                  <p className="text-neutral-500">
                    Although this is a bugfix it could affect your site if you
                    were working around the bug in your own code by not
                    prefixing the group class.{" "}
                  </p>
                  <ul className="pl-5 list-disc text-neutral-500 marker:text-red-500">
                    <li>Added utilities for screenreader visibility</li>
                    <li>First, last, even, and odd child variants</li>
                    <li>Disabled variant</li>
                    <li>Visited variant</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
