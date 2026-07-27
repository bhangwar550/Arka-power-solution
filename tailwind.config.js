/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {

      animation: {
        marquee: "marquee 25s linear infinite",
        bubble: "bubble 8s linear infinite",
      },


      keyframes: {

        marquee: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },


        bubble: {
          "0%": {
            transform: "translateY(100%) scale(0)",
            opacity: "0",
          },

          "20%": {
            opacity: "0.6",
          },

          "100%": {
            transform: "translateY(-120%) scale(1)",
            opacity: "0",
          },
        },

      },

    },
  },

  plugins: [],
};