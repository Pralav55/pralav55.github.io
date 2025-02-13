
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import IntroductionSection from "../components/IntroductionSection";
import AboutSection from "../components/AboutSection";
import IconMenu from "../components/IconMenu";
import ResumeSection from "../components/ResumeSection";
import ServicesSection from "../components/ServicesSection";
import SkillsSection from "../components/SkillsSection";

function HomePage() {
	return (
		<>
			<div className="main-container">
				<div className="inner-container">
					<IconMenu />
					<NavBar />
					<HeroSection />
					<IntroductionSection />
					<AboutSection />
					<ResumeSection />
					<ServicesSection />
					<SkillsSection />
				</div>
			</div>
		</>
	);
}

export default HomePage;
