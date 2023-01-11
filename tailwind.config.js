/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent-red": "hsl(356, 100%, 66%)",
        "light-red": "hsl(355, 100%, 74%)",
        "dark-blue": "hsl(208, 49%, 24%)",
        white: "hsl(0, 0%, 100%)",
        gray: "hsl(240, 2%, 79%)",
        "grayish-blue": "hsl(207, 13%, 34%)",
        "dark-black-blue": "hsl(240, 10%, 16%)",
        "hero-light-red": "hsl(13, 100%, 72%)",
        "hero-accent-red": "hsl(353, 100%, 62%)",
        "feat-dark-blue": "hsl(237, 17%, 21%)",
        "feat-desaturated-blue": "hsl(237, 23%, 32%)",
      },
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
