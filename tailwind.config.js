module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        work: ["Work Sans", "sans"],
        akshar: ["Akshar", "sans"],
        inter: ["Inter", "sans"],
      },
      colors: {},
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
