/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#faf2f2',
          100: '#f4e3e4',
          200: '#ecc9cb',
          300: '#dea1a5',
          400: '#cb7177',
          500: '#b3474f',
          600: '#8e2b31',
          700: '#6f1e22', // Brand signature burgundy
          800: '#5c1b1e',
          900: '#4c1a1c',
          950: '#2c0c0e',
        },
        cream: {
          50: '#fdfcfb',
          100: '#fbfbfb',
          150: '#f8f5f1', // Signature warm cream
          200: '#f3efe8',
          300: '#ebe3d7',
          400: '#ded1c0',
        },
        taupe: {
          400: '#8f746b',
          500: '#785e56',
          600: '#644e47',
          700: '#4a3a35',
        },
        ink: {
          900: '#0f1108',
          800: '#1c1f13',
          700: '#2d3024',
          600: '#4e5241',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Open Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        cursive: ['"Great Vibes"', '"Alex Brush"', '"Parisienne"', 'cursive'],
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.28em',
      }
    },
  },
  plugins: [],
}

