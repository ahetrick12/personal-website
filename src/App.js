import React, { useEffect } from "react";

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

import "overlayscrollbars/styles/overlayscrollbars.css";
import { useOverlayScrollbars } from "overlayscrollbars-react";

export const ThemeContext = React.createContext({
	heroLoaded: false,
	toggleHeroLoaded: () => {},
});

function App() {
	const [initBodyOverlayScrollbars] = useOverlayScrollbars({
		defer: true,
		paddingAbsolute: true,
		options: {
			scrollbars: {
				theme: "os-theme-custom",
				autoHide: "move",
				autoHideDelay: 700,
			},
		},
	});

	useEffect(() => {
		initBodyOverlayScrollbars(document.body);
	}, [initBodyOverlayScrollbars]);

	AOS.init({ once: true, anchorPlacement: "center-center" });
	AOS.refresh();

	window.addEventListener("load", AOS.refresh);

	// useEffect(() => {
	// 	OverlayScrollbars(document.body, {
	// 		plugins: {
	// 			ScrollbarsHiding: { autoHide: "scroll" },
	// 			SizeObserver: {},
	// 			ClickScroll: {},
	// 		},
	// 	});
	// }, []);

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
