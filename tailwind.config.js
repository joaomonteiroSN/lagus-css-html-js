/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'h1': ['Roboto', 'sans-serif']  
    },
    extend: {
      width: {
        '283': '17.688rem',
        '398': '24.875rem',
        '400': '25rem',
        '489': '32.5rem',
        '606': '37.875rem',
        '743': '46.438rem',
        '1024': '64rem',
        'desk': '90rem',
      },
      height: {
        '58': '3.625rem',
        '117': '7.313rem'
      },
      lineHeight: {
        '24': '1.5rem',
        '37': '2.344rem',
        '56': '3.516rem',
      },
      margin: {
        '119': '7.459rem',
        '82': '5.125rem'
      },
      fontSize: {
        '32': '2rem',
        '46': '2.875rem'
      },
      colors: {
        'header-color': '#070707',
        'legend-color': '#000000',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      'desktop': '1440px',
    },
  },
  plugins: [],
}
