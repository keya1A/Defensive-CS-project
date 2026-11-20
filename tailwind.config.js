/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#090909',
        card: '#171717',
        secondary: '#111111',
        primary: '#E63946',
        dark: '#8B0000',
        muted: '#A1A1AA',
        success: '#22C55E',
        warning: '#F59E0B',
        critical: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 24px -4px rgba(230, 57, 70, 0.45)',
      },
    },
  },
  plugins: [],
};
