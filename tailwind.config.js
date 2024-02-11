/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '20px'],
      lg: ['20px', '24px'],
      xl: ['24px', '29px'],
      '2xl': ['30px', '35px'],
      '3xl': ['48px', '58px'],
      '4xl': ['96px', '106px'],
    },
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },

      backgroundImage: {
        banner: "url('images/banner.jpg')",
      },
    },
  },
  plugins: [],
};
