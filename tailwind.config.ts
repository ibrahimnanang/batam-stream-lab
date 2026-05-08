import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#f97316",
          "orange-deep": "#ea580c",
          glow: "#fb923c",
        },
        surface: {
          DEFAULT: "#0a0a0a",
          raised: "#141414",
          border: "#262626",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(10,10,10,0.92), rgba(10,10,10,1)), radial-gradient(ellipse 80% 50% at 50% -20%, rgba(249,115,22,0.25), transparent)",
        "hero-glow":
          "radial-gradient(ellipse 60% 40% at 70% 20%, rgba(249,115,22,0.15), transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
