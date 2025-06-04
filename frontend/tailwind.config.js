// tailwind.config.js
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}", // If you're using a React project
    "./public/index.html",        // Include HTML if needed
  ],
  theme: {
    extend: {
       colors: {
      softbeige: '#fdf6ee',
      forestgreen: '#228b22',
    },
    },
  },
};
