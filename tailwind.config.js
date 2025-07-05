/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'scroll': 'scroll 10s linear infinite',
        'scroll-reverse': 'scroll-reverse 12s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-50% - 1rem))' },
        },
        'scroll-reverse': {
          '0%': { transform: 'translateX(calc(-50% - 1rem))' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
    screens: {
      sm: { max: "819px" },
      md: "820px",
    },
  },
  plugins: [],
};
