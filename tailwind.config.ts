import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'incoming-shows': 'url("/img/5nb-see-you-soon.webp")',
      },
      colors: {
        'purple-primary': '#7C7CF5',
        'amethyst-primary': '#D100FF',
        'charcoal-primary': '#020024',
        'medium-gray': '#bebebe',
      },
      boxShadow: {
        'centered-shadow': '0px 0px 19px 4px rgba(0,0,0,0.1)',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(80px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      animation: {
        slideUp: 'slideUp ease .3s forwards 1.2s',
      }
    },
  },
  plugins: [],
} satisfies Config;
