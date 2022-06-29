import Introduction from "./components/Introduction";
import About from "./components/About";
import SkillsInterests from "./components/SkillsInterests";
import Projects from "./components/Projects";
import Artwork from "./components/Artwork";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
	AOS.init({ once: true });
	AOS.refresh();

	return (
		<div className="app">
			<Navbar />
			<Introduction />
			<About />
			<SkillsInterests />
			<Projects />
			<Artwork />
			<Footer />
		</div>
	);
}

export default App;
