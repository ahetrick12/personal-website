import React from "react";

import Introduction from "./components/Introduction";
import About from "./components/About";
import SkillsInterests from "./components/SkillsInterests";
import Projects from "./components/Projects";
import Artwork from "./components/Artwork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import AOS from "aos";
import "aos/dist/aos.css";

export const ThemeContext = React.createContext({
	heroLoaded: false,
	toggleHeroLoaded: () => {},
});

function App() {
	AOS.init({ once: true, anchorPlacement: "center-center" });
	AOS.refresh();

	window.addEventListener("load", AOS.refresh);

	return (
		<div className="app">
			<Navbar />
			<Introduction />
			<About />
			<SkillsInterests />
			<Projects />
			<Artwork />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
