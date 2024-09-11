/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        formisWhitef0 : "#f0f0f0",
        formisWhitef5 : "#f5f5f5",
        formisBlack15 : "#15171c",
        formisBlack14 : "#14171c",
        formisOrange : "#fe915f",
      },
    },
    screens: {
      'sm': '300px',
      'sm-la': '480px',
      'md': '600px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1680px',
      '4xl': '1920px',
    },
  },
  plugins: [],
}