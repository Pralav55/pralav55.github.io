import { GlobeAltIcon, RectangleStackIcon } from "@heroicons/react/24/outline";

const ServicesSection = () => {
  return (
    <section id="services" className="services-section pt-20 pb-20">
      <div className="custom-container m-auto max-w-6xl pr-16 pl-16">
        <div className="services-content relative max-w-2xl ml-auto">
          <div className="section-header p-2 border-1 border-neutral-500 rounded-full w-fit flex gap-1 items-center mb-12">
            <RectangleStackIcon className="size-3 text-neutral-500" />
            <span className="text-xs text-neutral-500">Services</span>
          </div>
          <div className="text-5xl tracking-wide font-light mb-10">
            My <span className="text-red-500">Specializations</span>
          </div>
          <div className="flex w-full flex-col gap-4">
            <div className="border-1 border-neutral-500 rounded-[30px] p-8 hover:border-red-500 transition-all duration-300">
              <div className="relative text-2xl mb-2">
                Website Design
                <div className="absolute top-0 right-0">
                  <GlobeAltIcon className="text-red-500 size-8" />
                </div>
              </div>
              <div className="text-sm text-neutral-500 mb-8">
                I created digital products with unique ideas use Figma & Framer
              </div>
              <div className="text-sm">24 projects</div>
            </div>
            <div className="border-1 border-neutral-500 rounded-[30px] p-8 hover:border-red-500 transition-all duration-300">
              <div className="relative text-2xl mb-2">
              Development
                <div className="absolute top-0 right-0">
                  <GlobeAltIcon className="text-red-500 size-8" />
                </div>
              </div>
              <div className="text-sm text-neutral-500 mb-8">
              I build website go live with Framer, Webflow or WordPress
              </div>
              <div className="text-sm">126 projects</div>
            </div>
            <div className="border-1 border-neutral-500 rounded-[30px] p-8 hover:border-red-500 transition-all duration-300">
              <div className="relative text-2xl mb-2">
              SEO/Marketing
                <div className="absolute top-0 right-0">
                  <GlobeAltIcon className="text-red-500 size-8" />
                </div>
              </div>
              <div className="text-sm text-neutral-500 mb-8">
              Increase the traffic for your website with SEO optimized
              </div>
              <div className="text-sm">8 projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
