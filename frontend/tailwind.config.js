/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(50deg, #052555 0%, #0666C5 55%, #0580F2 100%)",
      },
      fontFamily: {
        condensed: ["condensed", "sans-serif"],
        condensedItalic: ["condensedItalic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
