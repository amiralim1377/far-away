/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    letterSpacing: {
      widest: "20px",
    },
    extend: {
      colors: {
        background: "#081229",
      },
      fontFamily: {
        Roboto: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
