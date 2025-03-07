import { HomeIcon } from "@heroicons/react/24/outline"
import {motion}  from "motion/react"

interface IntroductionSectionProps {
	scrollDirection: string;
  }

const IntroductionSection= ({scrollDirection}: IntroductionSectionProps) => {

  return (
	<motion.section
	transition={{ duration: 2, easing: [0.17, 0.55, 0.55, 1] }}
    initial={{ opacity: scrollDirection === "down" ? 1 : 0 }}
    whileInView={{ opacity: 1 }}
	id='introduction' className='introduction-section pt-20 pb-20 '>
		<div className='custom-container m-auto max-w-6xl pr-16 pl-16'>
			<div className="introduction-content relative max-w-2xl ml-auto max-xl:mr-auto">
				<div className="section-header p-2 border-1 border-neutral-500 rounded-full w-fit flex gap-1 items-center mb-12">
					<HomeIcon className='size-3 text-neutral-500'/>
					<span className="text-xs text-neutral-500">Introduction</span>
				</div>
				<div className="text-5xl md:text-7xl tracking-wide font-light mb-12">
					<div>Hi! I am <span className="text-red-500">Pralav</span>,</div>
					<div>Engineer, Innovator </div>
					<div>and Entrepreneur.</div>
				</div>
				<div className="text-sm text-neutral-500 mb-12">
				I am passionate about creating impactful solutions that bridge technology and user needs, forstering innovation and building sustainable businesses that contribute to the future of Tech.
				</div>
				<div className="flex flex-col sm:flex-row justify-start gap-4 w-fit">
					<div className="w-[150px]">
						<div className="text-7xl text-red-500 mb-2">3+</div>
						<div className="text-sm text-neutral-500">YEARS OF EXPERIENCE</div>
					</div>
					<div className="w-[150px]">
						<div className="text-7xl text-red-500 mb-2">25+</div>
						<div className="text-sm text-neutral-500">PROJECTS COMPELTED</div>
					</div>
					<div className="w-[160px]">
						<div className="text-7xl text-red-500 mb-2">100+</div>
						<div className="text-sm text-neutral-500">CUSTOMER POOL/ BASE</div>
					</div>
				</div>
			</div>
		</div>
	</motion.section>
  )
}

export default IntroductionSection