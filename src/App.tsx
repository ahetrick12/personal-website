import React, { Suspense, useEffect, useRef, useState } from 'react';

import Introduction from './components/Introduction/Introduction';
import About from './components/About/About';
import SkillsInterests from './components/SkillsInterests/SkillsInterests';
import Projects from './components/Projects/Projects';
import Artwork from './components/Artwork/Artwork';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

import { OverlayScrollbars } from 'overlayscrollbars';
import 'overlayscrollbars/styles/overlayscrollbars.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    const initOverlayScrollbars = async () => {
      OverlayScrollbars(document.body, {
        scrollbars: {
          theme: 'os-theme-custom',
          autoHide: 'move',
          autoHideDelay: 700,
        },
        update: {
          debounce: 100,
        },
      });

      AOS.init({
        once: true,
        anchorPlacement: 'center-center',
      });
    };

    initOverlayScrollbars();
  }, []);

  return (
    <div className={`app`}>
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
