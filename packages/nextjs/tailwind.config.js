/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './utils/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  darkTheme: 'scaffoldEthDark',
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        wolfcitoTheme: {
          primary: '#6D73FF',
          'primary-content': '#FF6739',
          secondary: '#E5E6EF',
          'secondary-content': '#9378F3',
          accent: '#9378F2',
          'accent-content': '#D05CFF',
          neutral: '#212638',
          'neutral-content': '#ffffff',
          'base-100': '#FF6739',
          'base-200': '#FFFFFF',
          'base-300': '#FF6739',
          'base-content': '#000000',
          info: '#93BBFB',
          success: '#34EEB6',
          warning: '#FFCF72',
          error: '#FF8863',

          '--rounded-btn': '9999rem',

          '.tooltip': {
            '--tooltip-tail': '6px',
          },
          '.link': {
            textUnderlineOffset: '2px',
          },
          '.link:hover': {
            opacity: '80%',
          },
        },
      },
    ],
  },
  theme: {
    extend: {
      boxShadow: {
        center: '0 0 12px -2px rgb(0 0 0 / 0.05)',
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'text-gradient': 'text-gradient 3s linear infinite',
      },
      keyframes: {
        'text-gradient': {
          to: {
            backgroundPosition: '200% center',
          },
        },
      },
    },
  },
}
