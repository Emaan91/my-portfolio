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
      },
      fontFamily: {
        "new-york-escape": ["var(--new-york-escape)", "sans-serif"],
        "roboto-light": ["var(--roboto-light)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
