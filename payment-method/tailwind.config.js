/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      color:{
        primary: "#00040f",
        secondary: "#00f6ff",
        dimwhite: "rgba(255, 255, 255, 0.7)",
        dimblue: "rgba(9, 151, 124, 0.1)",
        },
      fontFamily: {
        poppins: ["poppins", "sans-serif"]
        },
    },
     screens: {
      xs: "480px",
      xs: "620px",
      xs: "768px",
      xs: "1060px",
      xs: "1200px",
      xs: "1700px"
     },
  },
  plugins: [],
}

