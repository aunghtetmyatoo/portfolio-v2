import type { Config } from "tailwindcss";

const config: Config = {
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
        primary: {
          DEFAULT: "#297891",
          "50": "#f0fafb",
          "100": "#d8f2f5",
          "200": "#b6e3eb",
          "300": "#83cddd",
          "400": "#49b0c7",
          "500": "#33a5c1",
          "600": "#297891",
          "700": "#276277",
          "800": "#275163",
          "900": "#254554",
          "950": "#142c38",
        },
        secondary: {
          DEFAULT: "#000000",
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#000000",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
