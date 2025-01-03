/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Commissioner", "serif"],
      },
      colors: {
        primary: {
          moderateCyan: "hsl(176, 50%, 47%)",
          darkCyan: "hsl(176, 72%, 28%)",
        },
        neutral: {
          darkGray: "hsl(0, 0%, 48%)",
        },
      },
      backgroundColor: {
        primaryGray:
          "linear-gradient(to right, hsl(174, 86%, 45%) 80%, hsl(224, 65%, 95%) 0%, hsl(224, 65%, 95%) 100%)",
      },
    },
  },
  plugins: [],
};
