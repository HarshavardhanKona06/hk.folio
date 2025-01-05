import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
