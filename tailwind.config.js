/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        gray: {
          "100": "#202020",
          "200": "#181819",
        },
        goldenrod: "#efb900",
        darkgoldenrod: {
          "100": "#bd8500",
          "200": "rgba(189, 133, 0, 0.09)",
        },
        white: "#fff",
        darkslategray: {
          "100": "#465467",
          "200": "#4a4a4d",
          "300": "#303030",
        },
        lime: "#32f721",
        lightgray: "#d1d2d5",
        salmon: "#ef6855",
        orangered: "#e4250b",
        silver: "#c6c6c6",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
      },
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px",
        "31xl": "50px",
        "6xl": "25px",
      },
    },
    fontSize: {
      "3xs": "0.625rem",
      xs: "0.75rem",
      "2xs": "0.688rem",
      sm: "0.875rem",
      "6xl": "1.563rem",
      xl: "1.25rem",
      base: "1rem",
      "13xl": "2rem",
      "7xl": "1.625rem",
      lgi: "1.188rem",
      inherit: "inherit",
    },
    screens: {
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
