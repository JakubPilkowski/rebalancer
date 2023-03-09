/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: true,
  theme: {
    extend: {},
    fontFamily: {
      primary: 'Poppins, sans-serif',
      secondary: 'Inter, sans-serif',
    },
    // colors: {
    //   primary: '#f78319',
    //   white: '#ffffff',
    //   secondary: '#2b318a',
    //   black: '#071521',
    // },
    fontSize: {
      xs: '1rem',
      s: '1.2rem',
      m: '1.4rem',
      l: '1.6rem',
      xl: '1.8rem',
      xxl: '2rem',
      xxxl: '2.4rem',
      title: '6.2rem',
      subtitle: '4.1rem',
    },
    space: {
      xs: '2px',
      s: '5px',
      m: '10px',
      l: '20px',
      xl: '30px',
      xxl: '35px',
    },
    screens: {
      // update CONSTANTS.ts
      lg: '1024px',
    },
  },
  plugins: [],
};
