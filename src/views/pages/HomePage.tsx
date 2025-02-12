
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import IntroductionSection from "../components/IntroductionSection";
import AboutSection from "../components/AboutSection";
import IconMenu from "../components/IconMenu";
import ResumeSection from "../components/ResumeSection";

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
				</div>
			</div>
		</>
	);
}

export default HomePage;
