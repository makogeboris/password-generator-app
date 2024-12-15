/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        jetBrains: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        '3xl': '2rem',
      },
      colors: {
        grey: 'hsl(251, 9%, 53%)',
        darkGrey: 'hsl(248, 10%, 15%)',
        veryDarkGrey: 'hsl(248, 15%, 11%)',
        almostWhite: 'hsl(252, 11%, 91%)',
        neonGreen: 'hsl(127, 100%, 82%)',
        yellow: 'hsl(42, 91%, 68%)',
        orange: 'hsl(13, 95%, 66%)',
        red: 'hsl(0, 91%, 63%)',
      },
      minHeight: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
}
