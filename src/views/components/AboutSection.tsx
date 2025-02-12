import { UserIcon } from "@heroicons/react/24/outline";

const AboutSection = () => {
  return (
    <div className="about-section pt-20 pb-20">
      <div className="custom-container m-auto max-w-6xl pr-16 pl-16">
        <div className="about-content relative max-w-2xl ml-auto">
          <div className="section-header p-2 border-1 border-neutral-500 rounded-full w-fit flex gap-1 items-center mb-12">
            <UserIcon className="size-3 text-neutral-500" />
            <span className="text-xs text-neutral-500">About</span>
          </div>
          <div className="text-5xl tracking-wide font-light mb-10">
            Every great innovation begins with a{" "}
            <span className="text-red-500">bold idea</span> and{" "}
            <span className="text-red-500">the code</span> to bring it to life.
          </div>
          <div className="text-sm text-neutral-500 mb-12">
          Since joining the startup world 3 years ago, I’ve immersed myself in developing innovative applications, driving company growth, and building revenue through strategic lead generation. My journey has been fueled by a passion for solving complex problems, a knack for turning ideas into functional solutions, and a relentless drive to create value. I thrive in fast-paced environments, collaborating with talented teams to deliver impactful results. Quietly confident, endlessly curious, and always learning, I’m committed to pushing boundaries—one line of code and one lead at a time.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
