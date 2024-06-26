import animations from '@midudev/tailwind-animations'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      listStyleType: {
        'lower-alpha': 'lower-alpha',
        'upper-alpha': 'upper-alpha'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        nav: {
          bg: '#42434565'
        },
        itesus: {
          primary: '#1a63a5',
          secondary: '#131a2e',
          tertiary: '#cdcccb'
        }
      }
    }
  },
  plugins: [animations]
}
