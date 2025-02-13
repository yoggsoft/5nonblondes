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
        'incoming-shows': 'url("/bb479205-5950-452d-a31a-018929bebd99.jpg")',
        'hero-pattern': 'url("/pattern.png")',
      },
      fontFamily: {
        permanentMarker: ['Permanent Marker', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        rockSalt: ['Rock Salt', 'sans-serif'],
      },
      colors: {
        'fluo-green': '#43ffb6',
        'yellow-btn-primary': '#ffc621',
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
      },
    },
  },
  plugins: [],
} satisfies Config;
