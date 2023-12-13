/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Source Sans 3", "sans-serif"]
      },
      colors: {
        bodyColor: "#282A35",
        lightText: "#FFFFFF",
        titleColor: "#000000",
        brandColor: "#059862",
      },
    },
  },
  plugins: [],
};
