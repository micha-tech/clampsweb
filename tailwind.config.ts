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
        navy: {
          950: "#04101F",
          900: "#071B34",
          850: "#0C2746",
          800: "#12365E",
        },
        steel: {
          50: "#F7FAFC",
          100: "#E8EEF3",
          200: "#CED9E4",
          300: "#A7B7C8",
          500: "#637283",
          700: "#3B4A5A",
        },
        clamps: {
          blue: "#4DA3FF",
          cyan: "#7DD3FC",
          muted: "#256EA5",
          line: "#C8E9FF",
          red: "#D10000",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "Sora", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "industrial": "0 26px 70px rgba(7, 27, 52, 0.18)",
        "industrial-sm": "0 12px 30px rgba(7, 27, 52, 0.10)",
        "glow-blue": "0 0 34px rgba(77, 163, 255, 0.24)",
      },
      backgroundImage: {
        "engineering-grid":
          "linear-gradient(rgba(125, 218, 255, 0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(125, 218, 255, 0.10) 1px, transparent 1px)",
        "fine-grid":
          "linear-gradient(rgba(7, 26, 47, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(7, 26, 47, 0.06) 1px, transparent 1px)",
      },
      keyframes: {
        "line-scan": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "soft-pulse": {
          "0%, 100%": { opacity: "0.58" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "line-scan": "line-scan 5s ease-in-out infinite",
        "soft-pulse": "soft-pulse 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
