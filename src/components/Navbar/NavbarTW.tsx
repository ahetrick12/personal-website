import React, { useState, useRef, useLayoutEffect } from 'react';
import { Link } from 'react-scroll';
import Logo from '../../media/intro/logo.webp';

enum ScrollStatus {
  Top = 'top',
  Up = 'up',
  Down = 'down',
}

const NavbarTW = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(window.scrollY + window.innerHeight);
  const [scrollStatus, setScrollStatus] = useState<ScrollStatus>(ScrollStatus.Top);

  const navbarRef = useRef<HTMLElement>(null);

  const sections = [
    { name: 'Home', to: 'introduction' },
    { name: 'About', to: 'about' },
    { name: 'Skills/Interests', to: 'skillsinterests' },
    { name: 'Projects', to: 'projects' },
    { name: 'Artwork', to: 'artwork' },
    { name: 'Contact', to: 'contact' },
  ];

  useLayoutEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;

      if (scrollPos <= window.innerHeight) {
        setScrollStatus(ScrollStatus.Top);
      } else if (scrollPos > lastScrollPos) {
        setScrollStatus(ScrollStatus.Down);
        setMobileMenuActive(false);
      } else {
        setScrollStatus(ScrollStatus.Up);
      }

      setLastScrollPos(scrollPos);
    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener('DOMContentLoaded', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('DOMContentLoaded', onScroll);
    };
  }, [lastScrollPos]);

  const NavLink = ({
    index,
    to,
    children,
    onClick,
  }: {
    index: number;
    to: string;
    children: React.ReactNode;
    onClick?: () => void;
  }) => (
    <Link
      to={to}
      smooth={true}
      className={`
        tw-mx-3 tw-px-2 tw-py-2 tw-flex tw-items-center tw-leading-6
        tw-text-foreground-primary tw-relative
        tw-transition-all tw-duration-300
        after:tw-content-[''] after:tw-absolute after:tw-bottom-0 after:tw-left-1/2 after:tw-w-0 after:tw-h-[3px] after:tw-bg-accent after:tw-transition-all after:tw-duration-300 hover:after:tw-w-full hover:after:tw-left-0
        tw-animate-[mobile-nav-link-appear_0.6s_ease-out]
        lg:tw-animate-none
      `}
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'backwards' }}
      onClick={onClick}
    >
      {children}
    </Link>
  );

  return (
    <nav
      ref={navbarRef}
      className={`
        tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-z-50
        tw-transition-navbar tw-duration-500
        ${scrollStatus === ScrollStatus.Top ? 'tw-py-4' : 'tw-py-1'}
        ${scrollStatus === ScrollStatus.Down ? 'tw--translate-y-full' : ''}
        ${
          scrollStatus === ScrollStatus.Up
            ? 'tw-bg-background-primary/60 tw-backdrop-blur-navbar tw-shadow-lg'
            : 'tw-bg-transparent'
        }
        ${mobileMenuActive && scrollStatus === ScrollStatus.Top ? 'tw-backdrop-blur-navbar tw-shadow-lg' : ''}
      `}
    >
      <div className="tw-px-4 tw-flex-row tw-justify-between tw-items-stretch lg:tw-flex">
        {/* Logo and hamburger menu */}
        <div className="tw-flex tw-justify-between tw-items-center">
          {/* Logo */}
          <Link
            to="introduction"
            smooth={true}
          >
            <img
              src={Logo}
              alt="logo"
              className="tw-w-16 tw-h-16 tw-m-2 tw-transition-[transform,box-shadow] tw-duration-300 hover:tw-scale-110
                hover:tw-shadow-[0_0_0_5px_var(--background-primary),0_0_0_9px_var(--accent)] tw-rounded-full"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuActive(!mobileMenuActive)}
            className="lg:tw-invisible lg:tw-absolute tw-text-foreground-primary tw-p-2"
            aria-label="menu"
          >
            <div className="tw-w-5 tw-h-0.5 tw-bg-current tw-mb-1 tw-transition-all"></div>
            <div className="tw-w-5 tw-h-0.5 tw-bg-current tw-mb-1 tw-transition-all"></div>
            <div className="tw-w-5 tw-h-0.5 tw-bg-current tw-transition-all"></div>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`
            tw-block lg:tw-flex tw-left-0 tw-right-0
            tw-bg-transparent
            tw-transition-all tw-duration-300
            tw-overflow-hidden lg:tw-overflow-visible
            tw-items-stretch
            ${mobileMenuActive ? 'tw-h-auto' : 'tw-h-0'}
            lg:tw-h-auto
          `}
        >
          <div className="tw-flex tw-flex-col tw-gap-1 lg:tw-flex-row tw-items-stretch">
            {sections.map((item, index) => (
              <NavLink
                index={index}
                key={item.name}
                to={item.to}
                onClick={() => setMobileMenuActive(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarTW;
