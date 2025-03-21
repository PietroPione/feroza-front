/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1C97B6",
          light: "#1C97B6CC"
        },
        secondary: "#FDA366",
        tertiary: "#EE662B",
        quaternary: "#5CCFD6",
        five: "#F7EAC8",
        gray: {
          light: "#54595F",
        dark: "#101010"},
        white: "#ffffff",
      },
      fontSize: {
        10: "0.65rem",
        12: "0.75rem",
        15: "0.938rem",
        17: "1.063rem",
        22: "1.375rem",
        26: "1.625rem",
        28: "1.75rem",
        32: "2rem",
        36: "2.25rem",
        40: "2.5rem",
        46: "2.875rem",
        60: "3.75rem",
        75: "4.688rem",
      },
      spacing: {
        header: "5.734375rem",
      },
      maxWidth: {
        container: "600px",
      },
    },
  },
  plugins: [],
};
