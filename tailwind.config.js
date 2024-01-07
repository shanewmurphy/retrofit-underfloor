/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        mygrey: "#373636",
        primary: "#F1F1F1",
        secondary: "#F45B36",
        lightgrey: "#6D6D6D",
        deepgreen: "#E7EDEF",
      },
      screens: {
        sm: "358px",
      },
    },
  },
  plugins: [],
};
