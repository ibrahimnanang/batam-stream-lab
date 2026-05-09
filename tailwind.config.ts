import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: "#080a18",
          deep: "#05060f",
          card: "#0f1228",
          raised: "#141832",
        },
        stream: {
          violet: "#7c3aed",
          indigo: "#312e81",
          blue: "#38bdf8",
          glow: "#a78bfa",
          orange: "#fb923c",
        },
        page: {
          fg: "var(--page-fg)",
          muted: "var(--page-muted)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-mesh":
          "radial-gradient(ellipse 90% 60% at 20% -10%, rgba(124,58,237,0.35), transparent 55%), radial-gradient(ellipse 70% 50% at 90% 20%, rgba(56,189,248,0.14), transparent 50%), linear-gradient(180deg, #080a18 0%, #05060f 100%)",
        "card-glow":
          "linear-gradient(135deg, rgba(124,58,237,0.35), rgba(56,189,248,0.12), rgba(251,146,60,0.08))",
        "border-conic":
          "conic-gradient(from 180deg at 50% 50%, #7c3aed, #38bdf8, #312e81, #7c3aed)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(124, 58, 237, 0.45)",
        "glow-sm": "0 0 24px -8px rgba(56, 189, 248, 0.35)",
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-soft": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.95" },
          "50%": { transform: "scale(1.04)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
