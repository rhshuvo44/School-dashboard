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
          primary: "#659dbd",

          secondary: "#8d8741",

          accent: "#daad86",

          neutral: "#bc986",

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
