import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0a0a0f',
          surface: '#141420',
          text: '#e8e8e8',
          muted: '#888888',
          accent: '#ff6b35',
          green: '#00ff88',
          panel: '#1a1a2e',
        },
      },
    },
  },
  plugins: [],
};

export default config;
