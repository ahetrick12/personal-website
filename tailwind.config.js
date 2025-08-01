/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  prefix: 'tw-',
  theme: {
    extend: {
      transitionProperty: {
        navbar: 'transform, backdrop-filter, box-shadow, background-color, padding',
      },
      backdropBlur: {
        navbar: '10px',
      },
      colors: {
        // custom colors from variables.scss
        accent: {
          DEFAULT: '#4576b7',
          alt: '#6ea5ec',
          semitransparent: '#4576b776',
        },
        background: {
          primary: '#1b262e',
          secondary: '#2c3a49',
          'secondary-alt': '#697684',
          'primary-shadow': '#13191e',
        },
        foreground: {
          primary: '#ececec',
          secondary: '#cbcbcb',
          inverted: '#2c2c2c',
        },
        text: {
          input: '#1e1e1e',
          'input-placeholder': '#a2a2a2',
        },
      },
      animation: {
        'banner1-slide': 'banner1-slide var(--intro-slide-anim-dur)',
        'banner2-slide': 'banner2-slide var(--intro-slide-anim-dur)',
        'banner3-slide': 'banner3-slide var(--intro-slide-anim-dur)',
        typing: 'typing 0.8s steps(4, end), blink-caret 0.75s infinite',
        'view-more': 'key-links-appear 1.5s 4.5s backwards ease-out',
        'intro-icon': 'key-links-appear 1s backwards ease-out',
      },
      height: {
        banner1: 'var(--banner1-height)',
        banner2: 'var(--banner2-height)',
      },
      transitionDuration: {
        'intro-slide': 'var(--intro-slide-anim-dur)',
      },
      spacing: {
        'art-image-border': 'var(--art-image-border-offset)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        hando: ['Hando', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        angelos: ['Angelos', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.bg-hr': {
          backgroundImage: '-webkit-linear-gradient(left, transparent, var(--background-secondary-alt), transparent)',
        },
        '.bg-secondary': {
          backgroundColor: 'var(--background-secondary)',
        },
      });
    },
  ],
};
