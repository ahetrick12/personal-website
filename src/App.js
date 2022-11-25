import React from "react";

import Introduction from "./components/sections/Introduction";
import About from "./components/sections/About";
import SkillsInterests from "./components/sections/SkillsInterests";
import Projects from "./components/sections/Projects";
import Artwork from "./components/sections/Artwork";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Navbar from "./components/sections/Navbar";

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
