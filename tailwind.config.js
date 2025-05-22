module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#5B2C6F",       // Royal Purple (buttons, focus)
          "secondary": "#3F51B5",     // Indigo (sub buttons or links)
          "accent": "#FF7043",        // Soft Orange (CTA or highlights)
          "neutral": "#3D4451",       // Dark gray for cards, borders
          "base-100": "#FFFFFF",      // Card background / main surface
          "info": "#3ABFF8",          // For info alerts etc.
          "success": "#36D399",       // Available / green tags
          "warning": "#FBBD23",       // Warnings or notes
          "error": "#F87272",         // Error / delete / red status
        },
      },
      'light', 'dim', 'cupcake' // keep default themes if needed
    ],
  },
};
