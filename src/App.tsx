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
import { BrowserContext, Browser } from './BrowserContext';

function App() {
  const [browser, setBrowser] = useState<Browser>(Browser.Unknown);

  useEffect(() => {
    function detectBrowser() {
      const userAgent = navigator.userAgent;

      if (userAgent.indexOf('Chrome') > -1) {
        return Browser.Chrome;
      } else if (userAgent.indexOf('Firefox') > -1) {
        return Browser.Firefox;
      } else if (userAgent.indexOf('Safari') > -1) {
        return Browser.Safari;
      } else if (userAgent.indexOf('Opera') > -1) {
        return Browser.Opera;
      } else if (userAgent.indexOf('MSIE') > -1 || userAgent.indexOf('Trident') > -1) {
        return Browser.InternetExplorer;
      } else {
        return Browser.Unknown;
      }
    }

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
    };

    // Use default scrollbars on safari
    const browser = detectBrowser();
    setBrowser(browser);

    if (browser !== Browser.Safari) {
      initOverlayScrollbars();
    }

    // Init after overlay scrollbars, since overlay scrollbars causes a reflow
    AOS.init({
      once: true,
      anchorPlacement: 'center-center',
    });
  }, []);

  return (
    <div className={`app`}>
      <BrowserContext.Provider value={browser}>
        <Navbar />
        <Introduction />
        <About />
        <SkillsInterests />
        <Projects />
        <Artwork />
        <Contact />
        <Footer />
      </BrowserContext.Provider>
    </div>
  );
}

export default App;
