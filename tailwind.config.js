/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      // xs: ['12px', '16px'],
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
      // colors: {
      //   primary: '#ECEEFF',
      //   'coral-red': '#FF6452',
      //   'slate-gray': '#6D6D6D',
      //   'pale-blue': '#F5F6FF',
      //   'white-400': 'rgba(255, 255, 255, 0.80)',
      // },
      // boxShadow: {
      //   '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)',
      // },
      backgroundImage: {
        banner: "url('images/banner.jpg')",
        // card: "url('assets/images/thumbnail-background.svg')",
      },
      // screens: {
      //   wide: '1440px',
      // },
    },
  },
  plugins: [],
};
