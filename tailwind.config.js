// tailwind.config.js
module.exports = {
  content: [
    "./index.html", // Add this if using Vite
    "./src/**/*.{js,jsx}", // Path to all your React components
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.625rem", // Custom size for xxs
        xxxs: "0.5rem", // Custom size for xxs
        xxxxs: "0.4rem",
        nav: "900px",
      },
    },
  },
  plugins: [],
};
