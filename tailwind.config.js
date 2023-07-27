module.exports = {
  // mode: "jit",
  darkMode: "class",
  content: ["./src/components/**/*.{ts,tsx}", "./src/pages/**/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wavey: {
          "0%, 100%": {
            transform: "scaleY(0.5)",
          },
          "50%": {
            transform: "scaleY(1.5)",
          },
        },
        gling: {
          "0%, 100%": {
            transform: "translate(100px, 200px)",
          },
          "50%": {
            transform: "translate(0px,0px)",
          },
        },
        zoomIn: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.1)",
          },
        },
      },
      animation: {
        wavey: "wavey 1000ms linear infinite",
        gling: "gling 1000ms linear infinite",
        zoomIn: "zoomIn 1000ms ease-in-out ",
      },
      colors: {
        primary: "#5F9EA0",
        //primary: "#3A3845",
        secondary: "#00cba9",
        tertiary: "#eeeeee",
      },
      spacing: {
        128: "32rem",
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        logo: ["liismaiil", "cursive"],
        body: "var(--font-dm-sans)",
        heading: "var(--font-dm-serif)",
      },
      /*  typography: (theme) => ({
     DEFAULT: {
          css: {
            color: theme("colors.gray.700", defaultTheme.colors.gray(700)), 
          },
        },
      }), */
    },
    darkMode: "media",
    screens: {
      "2xl": { min: "1280px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
