/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#e8ccff",

          secondary: "#18cebf",

          accent: "#640de5",

          neutral: "#2b2230",

          "base-100": "#f5f4f5",

          info: "#4d9fd5",

          success: "#84e1d8",

          warning: "#be8f04",

          error: "#e3342b",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
