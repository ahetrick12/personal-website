import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import Logo from '../../media/intro/logo.webp';

const Navbar = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(window.scrollY + window.innerHeight);
  const [scrollStatus, setScrollStatus] = useState('top');

  const navbarRef = useRef<HTMLElement>(null);
  const hamburgerMenuRef = useRef(null);

  const addClass = (c: string) => {
    navbarRef.current?.classList.add(c);
  };

  const removeClass = (c: string) => {
    navbarRef.current?.classList.remove(c);
  };

  const removeAllClasses = () => {
    navbarRef.current?.classList.remove('at-top');
    navbarRef.current?.classList.remove('scrolling-up');
    navbarRef.current?.classList.remove('scrolling-down');
    navbarRef.current?.classList.remove('mobile-menu-active');
  };

  useLayoutEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;

      // Being at top takes priority over scroll directionality
      if (scrollPos <= window.innerHeight) {
        // at top
        setScrollStatus('top');
      } else if (scrollPos > lastScrollPos) {
        // scrolling down
        setScrollStatus('down');
      } else {
        // scrolling up
        setScrollStatus('up');
        setMobileMenuActive(false);
      }

      setLastScrollPos(scrollPos);
    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener('DOMContentLoaded', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('DOMContentLoaded', onScroll);
    };
  }, [lastScrollPos, scrollStatus]);

  // Fired when scroll status is asynchronously updated
  useEffect(() => {
    removeAllClasses();

    switch (scrollStatus) {
      case 'top':
        addClass('at-top');
        break;
      case 'down':
        addClass('scrolling-down');
        break;
      case 'up':
        addClass('scrolling-up');
        break;
      default:
        addClass('at-top');
        break;
    }
  }, [scrollStatus]);

  useEffect(() => {
    if (mobileMenuActive) addClass('mobile-menu-active');
    else removeClass('mobile-menu-active');
  }, [mobileMenuActive]);

  return (
    <section className="section">
      <nav
        className="navbar is-transparent is-fixed-top at-top"
        role="navigation"
        aria-label="main navigation"
        ref={navbarRef}
      >
        <div className="navbar-brand">
          <a href="#introduction">
            <img
              src={Logo}
              alt="logo"
              className="image is-64x64 m-2 is-icon"
            />
          </a>
          <button
            onClick={() => {
              setMobileMenuActive(!mobileMenuActive);
            }}
            className={`navbar-burger ${mobileMenuActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div
          ref={hamburgerMenuRef}
          className={`navbar-menu is-active ${mobileMenuActive ? 'is-expanded' : ''}`}
        >
          <div
            className={`navbar-end ${mobileMenuActive ? 'is-expanded' : ''}`}
            style={{ flexGrow: 1 }}
          >
            <a
              href="#introduction"
              className="navbar-item"
            >
              Home
            </a>
            <a
              href="#about"
              className="navbar-item"
            >
              About
            </a>
            <a
              href="#skillsinterests"
              className="navbar-item"
            >
              Skills/Interests
            </a>
            <a
              href="#projects"
              className="navbar-item"
            >
              Projects
            </a>
            <a
              href="#artwork"
              className="navbar-item"
            >
              Artwork
            </a>
            <a
              href="#contact"
              className="navbar-item"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
