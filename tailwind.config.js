import fonts from "./src/app/assets/fonts/allFonts/fonts";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
        lora: "'lora', sans-serif",
        inco: "'Inconsolata', sans-serif"
      },
    },
  },
  plugins: [],
};
