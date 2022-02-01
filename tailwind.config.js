module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./containers/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      headings: ["Clash Display", "sans-serif"],
    },
    extend: {
      colors: {
        pink: "#f833ff",
        teal: "#46fcff",
        navy: "#1225b3",
        mainBg: "#26262E",
        sidebarBg: "#1c1c22",
        gradient: "linear-gradient(to bottom, var(--main-cursor-color), var(--secondary-cursor-color));",
      },
      spacing: {
        horizontal: "200vw",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
      backgroundImage: {
        gradientBg: "linear-gradient(to bottom, var(--main-cursor-color), var(--secondary-cursor-color));",
      },
    },
  },
  plugins: [],
}
