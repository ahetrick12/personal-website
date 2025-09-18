// postcss.config.cjs
const purgecss = require('@fullhuman/postcss-purgecss').default;

module.exports = {
  plugins: [
    purgecss({
      content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,css,scss}'],
      // grabs things like "flickity-hidden", "is-active", etc.
      defaultExtractor: (content) => (content.match(/[\w-/:%]+/g) || []).filter((str) => !str.endsWith(':')),

      safelist: {
        // exact class names that JS adds at runtime
        standard: [
          'flickity-enabled',
          'flickity-viewport',
          'flickity-slider',
          'is-draggable',
          'is-selected',
          'is-pointer-down',
          'aos-init',
          'aos-animate',
        ],
        // regex-based families to keep wholesale
        deep: [
          /^flickity-/,
          /^os-/,
          /data-aos-delay/,
          /data-aos-duration/,
          /^aos-/, // AOS
        ],
      },

      rejected: false, // flip to true if you want a removal log
    }),
  ],
};
