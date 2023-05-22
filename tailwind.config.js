/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#bd1ac9",

          secondary: "#c15ee5",

          accent: "#26f2a7",

          neutral: "#22242A",

          "base-100": "#FCFCFD",

          info: "#89B1DC",

          success: "#22BFA5",

          warning: "#F7B559",

          error: "#FA0532",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
