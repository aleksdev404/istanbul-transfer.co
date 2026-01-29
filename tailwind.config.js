/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      screens: {
        // desktop base (без префикса)
        "2xl": "1536px",
  
        // desktop-first (max-width)
        "max-2xl": { max: "1535px" },
        "max-xl":  { max: "1279px" },
        "max-lg":  { max: "1023px" },
        "max-md":  { max: "767px" },
        "max-sm":  { max: "639px" },
      },
      extend: {},
    },
    plugins: [
      require("daisyui"),
    ],
  }
  