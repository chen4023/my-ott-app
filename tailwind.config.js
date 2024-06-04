/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#FF1758",
        white: "#FFF6F6",
        grey: "#131518",
        lightgrey: "#525459",
      },
    },
  },
  plugins: [],
};
