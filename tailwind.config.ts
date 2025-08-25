import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        base: {
          50: '#f6f8fb',
          100: '#eef2f7',
          200: '#e6ebf1',
          300: '#d7dee7',
          400: '#c7cfdb'
        }
      },
      boxShadow: {
        soft: '8px 8px 16px rgba(0,0,0,0.08), -8px -8px 16px rgba(255,255,255,0.9)',
        insetSoft: 'inset 8px 8px 16px rgba(0,0,0,0.08), inset -8px -8px 16px rgba(255,255,255,0.9)'
      },
      borderRadius: {
        neumorph: '22px'
      }
    },
  },
  plugins: [],
} satisfies Config
