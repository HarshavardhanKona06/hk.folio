import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '834px',     // Changed from default 768px
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        'bg-primary-dark': 'var(--bg-primary-dark)',
        'bg-secondary-dark': 'var(--bg-secondary-dark)',
        'bg-tertiary-dark': 'var(--bg-tertiary-dark)',

        'text-primary-dark': 'var(--text-primary-dark)',
        'text-secondary-dark': 'var(--text-secondary-dark)',
        'text-tertiary-dark': 'var(--text-tertiary-dark)',

        'border-dark': 'var(--border-dark)',

        'teal-dark': 'var(--teal-dark)',
        'teal-hover-dark': 'var(--teal-hover-dark)',

        'saffron-dark': 'var(--saffron-dark)',
        'saffron-hover-dark': 'var(--saffron-hover-dark)',
      },
      fontFamily: {
        'firaCode': 'var(--font-firaCode)',
        'poppins': 'var(--font-poppins)',
        'firaSans': 'var(--font-firaSans)',
        'caveat': 'var(--font-caveat)',
        'crimsonPro': 'var(--font-crimsonPro)',
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      })
    }),
  ],
} satisfies Config;
