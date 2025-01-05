import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
        'firaCode': 'var(--font-fira-code)',
        'poppins': 'var(--font-poppins)',
        'firaSans': 'var(--font-fira-sans)',
        'caveat': 'var(--font-caveat)',
        'crimsonPro': 'var(--font-crimsonPro)',
      }
    },
  },
  plugins: [],
} satisfies Config;
