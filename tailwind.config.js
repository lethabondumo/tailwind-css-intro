/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "nord",
      "dark",
      "winter",
      "cupcake",
      "dracula",
      "sunset",
      "lemonade",
      "garden",
      "pastel",
      "valentine",
      "forest",
    ],
  },
};
