/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,tsx,ts}"
  ],
  theme: {
    screens: {
      xl: '750px',
      md: '570px',
      xs: '430px'
    },
    extend: {
      colors: {
        "header-blue": "#000F2E",
        "button-green": "#336930",
        "text-dark": "#000F2E"
      },
      maxWidth: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '2/3': '66%',
        'full': '100%',
      },
      // backgroundImage: {
      //   'background-cover': "url('/src/assets/MockGameCover.tsx')",
      // }
    },
  },
  plugins: [],
}

