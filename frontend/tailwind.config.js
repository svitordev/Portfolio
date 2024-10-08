/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(50deg, #052555 0%, #0666C5 55%, #0580F2 100%)",
        "custom-linear-gradient":
          "linear-gradient(9deg, #052555, #034089 50%,#034EA2 75%,#0354AF 88%, #025BBC 100%)",
      },
      fontFamily: {
        condensed: ["condensed", "sans-serif"],
        condensedItalic: ["condensedItalic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
