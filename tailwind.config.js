/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Blue1: "#0071e3",
        BorderBlue: "#2997ff",
        FooterBG: "rgb(245, 245, 247)",
        FooterText: "rgba(0, 0, 0, 0.56)",
        FooterLink: "rgba(0, 0, 0, 0.72)",
        NavbarBG: "rgba(248, 250, 252, .9)",
      },
    },
  },
  plugins: [],
};
