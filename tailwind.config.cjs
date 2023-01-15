/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "light-logo": "url('../img/github-mark-white.png')",
        "dark-logo": "url('../img/github-mark.png')",
      },
    },
  },
  plugins: [],
};
