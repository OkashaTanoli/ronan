/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary_color: '#282828',
        light_blue:'#6BFAF8'
      },
    },
    screens: {
      "sm": "320px",
      "mm": "375px",
      "ml": "500px",
      "md": "768px",
      "md-lg": "900px",
      "lg": "1024px",
      "lg-xl": "1200px",
      "xl": "1440px",
      "2xl": "2560px",
    },
  },
  plugins: [],
}
