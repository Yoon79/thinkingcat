import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  screens: {
    sm: {max: "819px"},
    md: "820px",
  },
  plugins: [],
} satisfies Config;

  //  /** @type {import('tailwindcss').Config} */
  //  module.exports = {
  //   content: [
  //     "./pages/**/*.{js,ts,jsx,tsx}",
  //     "./components/**/*.{js,ts,jsx,tsx}",
  //   ],
  //   theme: {
  //     extend: {},
  //   },
  //   plugins: [],
  // }
