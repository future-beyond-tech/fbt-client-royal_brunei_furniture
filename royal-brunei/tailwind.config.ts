import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        walnut: 'var(--walnut)',
        espresso: 'var(--espresso)',
        mahogany: 'var(--mahogany)',
        amber: 'var(--amber)',
        gold: 'var(--gold)',
        champagne: 'var(--champagne)',
        cream: 'var(--cream)',
        ivory: 'var(--ivory)',
        muted: 'var(--muted)',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-dm-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
